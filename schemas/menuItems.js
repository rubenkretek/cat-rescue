import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu-items',
  title: 'Menu Items',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'page',
      title: 'Page',
      description: 'Which page do you want this menu item to link to?',
      type: 'reference',
      to: [{type: 'page'}],
    }),
    // defineField({
    //   name: 'parent',
    //   title: 'Parent',
    //   type: 'reference',
    //   to: [{type: 'menu-items'}],
    // }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
