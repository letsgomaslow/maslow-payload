import type { Block } from 'payload';

export const StatisticsBlock: Block = {
  slug: 'statistics',
  interfaceName: 'StatisticsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'By the numbers',
    },
    {
      name: 'stats',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'select',
          options: [
            {
              label: 'Teal',
              value: 'teal',
            },
            {
              label: 'Purple',
              value: 'purple',
            },
            {
              label: 'Yellow',
              value: 'yellow',
            },
          ],
          defaultValue: 'teal',
          required: true,
        },
      ],
    },
  ],
};