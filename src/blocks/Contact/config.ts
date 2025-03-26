import type { Block } from 'payload';

export const ContactBlock: Block = {
  slug: 'contactBlock',
  interfaceName: 'ContactBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Contact us',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'minimumProjectValue',
      type: 'text',
      defaultValue: '$25,000',
      required: true,
    }
  ],
  labels: {
    singular: 'Contact Block',
    plural: 'Contact Blocks',
  },
};