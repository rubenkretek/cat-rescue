import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'string'},
            {type: 'image', title: 'Image', name: 'heroImage'},
            {name: 'link', title: 'Link', type: 'reference', to: [{type: 'page'}]},
          ],
        },
      ],
    }),
  ],
})
