import { Block } from 'payload';

export const TechnologyBlock: Block = {
  slug: 'technology',
  interfaceName: 'TechnologyBlock',
  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'extendedDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'title',
      type: 'group',
      fields: [
        {
          name: 'technology',
          type: 'text',
          defaultValue: 'Technology',
        },
        {
          name: 'geniuses',
          type: 'text',
          defaultValue: 'savvy, usability geniuses',
        },
      ],
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