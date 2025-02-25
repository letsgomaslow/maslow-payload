// // C:\Users\Aakash\Desktop\Payload2\src\blocks\ContentWithMedia.ts
// import { Block } from 'payload';

// export const ContentWithMedia: Block = {
//   slug: 'contentWithMedia',
//   labels: {
//     singular: 'Content with Media Block',
//     plural: 'Content with Media Blocks',
//   },
//   fields: [
//     {
//       type: 'richText',
//       name: 'content',
//     },
//     {
//       type: 'upload',
//       name: 'image',
//       relationTo: 'media',
//     },
//     {
//       type: 'radio',
//       name: 'textPosition',
//       options: ['Left', 'Right'],
//     },
//   ],
// };
import { Block } from 'payload';

export const ContentWithMedia: Block = {
  slug: 'contentWithMedia',
  labels: {
    singular: 'Content with Media Block',
    plural: 'Content with Media Blocks',
  },
  fields: [
    {
      type: 'richText',
      name: 'content',
      required: true,
    },
    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'radio',
      name: 'textPosition',
      options: ['Left', 'Right'],
      defaultValue: 'Left',
    },
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'json',
      name: 'titleGradient',
      admin: {
        description: 'Define gradient colors for the title (e.g., ["#FF6B9A", "#76C7C0"])',
      },
    },
    {
      type: 'checkbox',
      name: 'showGradientLine',
      label: 'Show Gradient Line Under Image',
      defaultValue: false,
    },
  ],
};