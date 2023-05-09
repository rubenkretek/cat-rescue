export const myStructure = (S) =>
  S.list()
    .title('Cats')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings Documents')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Branding')
                .child(S.document().schemaType('branding').documentId('branding')),
              //   S.listItem()
              //     .title('Main Navigation')
              //     .child(S.document().schemaType('navigation').documentId('navigation')),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'branding', 'navigation'].includes(listItem.getId())
      ),
    ])
