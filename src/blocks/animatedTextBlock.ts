import { Block } from "payload";

export const AnimatedTextBlock: Block = {
  slug: "animatedTextBlock",
  labels: {
    singular: "Animated Text Block",
    plural: "Animated Text Blocks",
  },
  fields: [
    {
      name: "title",
      label: "Static Title",
      type: "text",
      required: false, 
    },
    {
      name: "animatedWords",
      label: "Animated Words",
      type: "array",
      labels: {
        singular: "Word",
        plural: "Words",
      },
      fields: [
        {
          name: "word",
          type: "text",
          required: true,
        },
      ],
      defaultValue: [
        { word: "amazing" },
        { word: "new" },
        { word: "wonderful" },
        { word: "beautiful" },
        { word: "smart" },
      ],
    },
    {
      name: "useGradient",
      label: "Use Gradient Text",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "gradientFrom",
      label: "Gradient Start Color",
      type: "text",
      defaultValue: "#FF6B9A",
      admin: {
        condition: (data) => data.useGradient === true, 
      },
    },
    {
      name: "gradientTo",
      label: "Gradient End Color",
      type: "text",
      defaultValue: "#76C7C0",
      admin: {
        condition: (data) => data.useGradient === true, 
      },
    },
  ],
};

export default AnimatedTextBlock;
