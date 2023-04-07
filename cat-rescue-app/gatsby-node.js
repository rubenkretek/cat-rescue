exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCat(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const cats = result.data.allSanityCat.edges || [];
  cats.forEach((edge, index) => {
    const path = `/cats/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/cat.js"),
      context: { slug: edge.node.slug.current },
    });
  });
};
