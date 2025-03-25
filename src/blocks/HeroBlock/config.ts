import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const HeroBlockAIGenerated: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'At Maslow',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      defaultValue: 'we turn big data into business success stories',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    }
  ],
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
}