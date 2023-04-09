import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cat',
  title: 'Cat',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{type: 'location'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'sex',
      title: 'Sex',
      type: 'string',
      options: {
        list: ['Male', 'Female', 'Unknown'],
      },
    }),
    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'reference',
      to: [{type: 'cat-breed'}],
    }),
    defineField({
      name: 'colour',
      title: 'Colour',
      type: 'string',
    }),
    defineField({
      title: 'Can live with other cats?',
      name: 'likesCats',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      title: 'Can live with dogs?',
      name: 'likesDogs',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      title: 'Can live with children?',
      name: 'likesChildren',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      title: 'Likes older families?',
      name: 'olderFamilies',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      name: 'outdoorIndoor',
      title: 'Outdoor/Indoor',
      type: 'string',
      options: {
        list: ['Outdoor', 'Indoor', 'Either'],
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
