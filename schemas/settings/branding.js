import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'branding',
  title: 'Branding',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'companyTagline',
      title: 'Company Tagline',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'primaryColour',
      title: 'Primary Colour',
      type: 'color',
    }),
    defineField({
      name: 'SecondaryColour',
      title: 'Secondary Colour',
      type: 'color',
    }),
  ],
})
