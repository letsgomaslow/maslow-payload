import type { Block } from 'payload';

export const ShowcaseBlock: Block = {
  slug: 'showcase',
  interfaceName: 'ShowcaseBlock',
  fields: [
    {
      name: 'caseStudyLabel',
      type: 'text',
      defaultValue: 'CASE STUDY',
      admin: {
        description: 'Label for case study',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the showcase title',
      },
    },
    {
      name: 'descriptionOne',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Enter the first paragraph of description',
      },
    },
    {
      name: 'descriptionTwo',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Enter the second paragraph of description',
      },
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'year',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              defaultValue: 'YEAR',
            },
            {
              name: 'value',
              type: 'text',
              required: true,
            }
          ]
        },
        {
          name: 'skills',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              defaultValue: 'SKILLS',
            },
            {
              name: 'items',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'skill',
                  type: 'text',
                  required: true,
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  labels: {
    singular: 'Showcase Block',
    plural: 'Showcase Blocks',
  },
};