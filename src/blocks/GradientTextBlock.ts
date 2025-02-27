import type { Block } from 'payload';

export const GradientTextBlock: Block = {
  slug: 'gradientText',
  labels: {
    singular: 'Gradient Text',
    plural: 'Gradient Text Blocks',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Text',
      required: true,
    },
    {
      name: 'gradientFrom',
      type: 'text',
      label: 'Gradient Start Color',
      defaultValue: "#FF6B9A",
      admin: {
        readOnly: true,
        hidden: true,
        description: 'Fixed gradient start color.',
      },
    },
    {
      name: 'gradientTo',
      type: 'text',
      label: 'Gradient End Color',
      defaultValue: "#76C7C0",
      admin: {
        readOnly: true,
        hidden: true,
        description: 'Fixed gradient end color.',
      },
    },
  ],
};
