import type { Block } from 'payload';

export const MaslowFooterBlock: Block = {
  slug: 'maslowFooter',
  interfaceName: 'MaslowFooterBlock',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Footer Logo',
    },
    {
      name: 'locations',
      type: 'array',
      label: 'Office Locations',
      minRows: 1,
      fields: [
        {
          name: 'city',
          type: 'text',
          required: true,
          label: 'City',
        },
        {
          name: 'address',
          type: 'textarea',
          required: true,
          label: 'Address',
        },
        {
          name: 'status',
          type: 'select',
          options: [
            { label: 'Open Now', value: 'open' },
            { label: 'Closed', value: 'closed' }
          ],
          label: 'Status',
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: `Copyright ${new Date().getFullYear()}. All rights reserved.`,
    },
  ],
  labels: {
    singular: 'Maslow Footer Block',
    plural: 'Maslow Footer Blocks',
  },
};
