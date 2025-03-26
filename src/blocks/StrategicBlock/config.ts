import { Block } from 'payload';

export const StrategicBlock: Block = {
  slug: 'strategic',
  interfaceName: 'StrategicBlock',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'What we do',
    },
    {
      name: 'title',
      type: 'group',
      fields: [
        {
          name: 'strategic',
          type: 'text',
          defaultValue: 'Strategic navigation',
        },
        {
          name: 'execution',
          type: 'text',
          defaultValue: 'flawless execution',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'capabilities',
      type: 'group',
      fields: [
        {
          name: 'leftColumn',
          type: 'array',
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'array',
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};