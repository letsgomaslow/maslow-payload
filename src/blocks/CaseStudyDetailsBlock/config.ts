import type { Block } from 'payload';

export const CaseStudyDetailsBlock: Block = {
  slug: 'caseStudyDetails',
  interfaceName: 'CaseStudyDetailsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the section title',
      },
    },
    {
      name: 'description',
      type: 'array',
      required: true,
      admin: {
        description: 'Add paragraphs of description',
      },
      fields: [
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      maxRows: 2,
      required: true,
      admin: {
        description: 'Add up to 2 phone mockup images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  labels: {
    singular: 'Case Study Details Block',
    plural: 'Case Study Details Blocks',
  },
};