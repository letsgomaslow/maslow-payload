import type { Block } from 'payload';

export const CompanyDescriptionBlock: Block = {
  slug: 'companyDescription',
  interfaceName: 'CompanyDescriptionBlock',
  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'locations',
      type: 'array',
      fields: [
        {
          name: 'location',
          type: 'text',
        },
      ],
    },
    {
      name: 'learnMoreLink',
      type: 'text',
      defaultValue: '/about',
    },
  ],
  labels: {
    singular: 'Company Description Block',
    plural: 'Company Description Blocks',
  },
};
