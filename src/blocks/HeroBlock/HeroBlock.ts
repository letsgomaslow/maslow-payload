import type { Field } from 'payload';

export const HeroBlock: Field = {
  name: 'heroBlock', // using name instead of slug for a field
  type: 'array', // or 'blocks', depending on how you want to use it
  label: 'Hero Block',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'gradientText',
      type: 'text',
      label: 'Gradient Text',
      admin: {
        description: 'The part of the title that will have the gradient effect',
      },
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
  ],
};
