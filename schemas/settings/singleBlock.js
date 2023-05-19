import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'singleBlock',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
    {type: 'image', title: 'Image', name: 'heroImage'},
    {name: 'link', title: 'Link', type: 'reference', to: [{type: 'page'}]},
  ],
})
