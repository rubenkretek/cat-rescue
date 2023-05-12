import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'address1',
      title: 'Address Line 1',
      type: 'string',
    }),
    defineField({
      name: 'address2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'Town/City',
      type: 'string',
    }),
    defineField({
      name: 'county',
      title: 'County',
      type: 'string',
    }),
    defineField({
      name: 'postcode',
      title: 'Postcode',
      type: 'string',
    }),
    defineField({
      name: 'mapsURL',
      title: 'Google Maps link',
      type: 'url',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'city',
        maxLength: 96,
      },
    }),
  ],
})
