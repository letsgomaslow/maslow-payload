import type { Block } from 'payload';

export const ArchiveListBlock: Block = {
  slug: 'archiveList',
  interfaceName: 'ArchiveListBlock',
  fields: [
    {
      name: 'archives',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'category',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        }
      ],
    }
  ],
  labels: {
    singular: 'Archive List Block',
    plural: 'Archive List Blocks',
  },
};