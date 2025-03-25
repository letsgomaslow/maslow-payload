import type { Block } from 'payload'

export const CaseStudiesBlock: Block = {
  slug: 'caseStudies',
  interfaceName: 'CaseStudiesBlock',
  fields: [
    {
      name: 'cases',
      type: 'array',
      label: 'Case Studies',
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        }
      ]
    },
    {
      name: 'viewAllLink',
      type: 'text',
      defaultValue: '/case-studies',
      label: 'View All Link'
    }
  ],
  labels: {
    singular: 'Case Studies Block',
    plural: 'Case Studies Blocks',
  },
}