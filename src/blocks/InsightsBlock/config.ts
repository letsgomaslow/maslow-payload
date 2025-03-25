import type { Block } from 'payload';

export const InsightsBlock: Block = {
  slug: 'insights',
  interfaceName: 'InsightsBlock',
  fields: [
    {
      name: 'posts',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
    {
      name: 'morePostsLink',
      type: 'text',
      defaultValue: '/insights',
    },
  ],
  labels: {
    singular: 'Insights Block',
    plural: 'Insights Blocks',
  },
};