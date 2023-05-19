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
          name: 'singleBlock',
          type: 'singleBlock',
        },
      ],
    }),
  ],
})
