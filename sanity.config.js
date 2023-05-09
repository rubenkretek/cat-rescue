import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myStructure} from './deskStructure'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'cat-rescue',

  projectId: 'jsyybsvd',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
