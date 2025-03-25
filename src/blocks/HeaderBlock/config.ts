import type { Block } from 'payload'

export const HeaderBlock: Block = {
  slug: 'headerBlockNew',
  interfaceName: 'HeaderBlock',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'menuItems',
      type: 'array',
      label: 'Menu Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        }
      ],
      defaultValue: [
        { label: 'CASE STUDIES', link: '/case-studies' },
        { label: 'INSIGHTS', link: '/insights' },
        { label: 'CAPABILITIES', link: '/capabilities' }
      ]
    }
  ],
  labels: {
    singular: 'Header Block',
    plural: 'Headers Block',
  },
}