import { Block } from "payload";

export const GradientTextBlock: Block = {
  slug: "gradientText",
  labels: {
    singular: "Gradient Text Block",
    plural: "Gradient Text Blocks",
  },
  fields: [
    {
      name: "text",
      label: "Full Text",
      type: "text",
      required: true,
    },
    {
      name: "gradientText",
      label: "Gradient Text",
      type: "text",
      required: false, 
    },
    {
      name: "useGradient",
      label: "Use Gradient Text",
      type: "checkbox",
      defaultValue: false, // Default: No gradient
    },
    {
      name: "gradientFrom",
      label: "Gradient Start Color",
      type: "text",
      defaultValue: "#FF6B9A",
      admin: {
        condition: (data) => data.useGradient === true, // Show only if gradient is enabled
      },
    },
    {
      name: "gradientTo",
      label: "Gradient End Color",
      type: "text",
      defaultValue: "#76C7C0",
      admin: {
        condition: (data) => data.useGradient === true, // Show only if gradient is enabled
      },
    },
  ],
};

export default GradientTextBlock;


// // Payload CMS Block
// import type { Block } from 'payload';

// export const GradientTextBlock: Block = {
//   slug: 'gradientText',
//   labels: {
//     singular: 'Gradient Text',
//     plural: 'Gradient Text Blocks',
//   },
//   fields: [
//     {
//       name: 'text',
//       type: 'text',
//       label: 'Full Text',
//       required: true,
//     },
//     {
//       name: 'gradientText',
//       type: 'text',
//       label: 'Text with Gradient',
//       required: true,
//     },
//     {
//       name: 'gradientFrom',
//       type: 'text',
//       label: 'Gradient Start Color',
//       defaultValue: "#FF6B9A",
//       admin: {
//         readOnly: true,
//         hidden: true,
//         description: 'Fixed gradient start color.',
//       },
//     },
//     {
//       name: 'gradientTo',
//       type: 'text',
//       label: 'Gradient End Color',
//       defaultValue: "#76C7C0",
//       admin: {
//         readOnly: true,
//         hidden: true,
//         description: 'Fixed gradient end color.',
//       },
//     },
//   ],
// };
