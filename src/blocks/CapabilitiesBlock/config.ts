import type { Block } from 'payload';

export const CapabilitiesBlock: Block = {
  slug: 'capabilities',
  interfaceName: 'CapabilitiesBlock',
  fields: [
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Category Title',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Category Items',
          minRows: 1,
          fields: [
            {
              name: 'item',
              type: 'text',
              required: true,
              label: 'Item',
            },
          ],
        },
      ],
    },
    {
      name: 'viewAllLink',
      type: 'text',
      defaultValue: '/capabilities',
      label: 'View All Link',
    },
  ],
  labels: {
    singular: 'Capabilities Grid Block',
    plural: 'Capabilities Grid Blocks',
  },
};