import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'catInfo',
  title: 'Cat Info',
  type: 'document',
  fields: [
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
      title: 'Do we know when the cat was born?',
      name: 'knownDOB',
      type: 'string',
      options: {
        list: [
          {title: 'Yes', value: 'yes'},
          {title: 'No', value: 'no'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'dob',
      title: 'Date of birth',
      type: 'date',
      hidden: ({parent}) => parent?.knownDOB === 'no',
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
      name: 'likesOlderFamilies',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    }),
    defineField({
      title: 'Outdoor/Indoor',
      name: 'likesOutdoorIndoor',
      type: 'string',
      options: {
        list: ['Outdoor', 'Indoor', 'Either'],
      },
    }),
  ],
})
