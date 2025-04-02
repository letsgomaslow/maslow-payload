import type { Block } from 'payload';

export const CaseStudyDetailsSecondBlock: Block = {
  slug: 'caseStudyDetailsSecond',
  interfaceName: 'CaseStudyDetailsSecondBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'points',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};