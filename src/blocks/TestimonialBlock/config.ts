import type { Block } from 'payload';

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  fields: [
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Enter the testimonial quote',
          },
        },
        {
          name: 'attribution',
          type: 'group',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'company',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
};