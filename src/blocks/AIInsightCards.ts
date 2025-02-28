import { Block } from "payload";

export const AIInsightCardsBlock: Block = {
  slug: "aiInsightCardsBlock",
  labels: {
    singular: "AI Insight Card Block",
    plural: "AI Insight Card Blocks",
  },
  fields: [
    {
      name: "cards",
      type: "array",
      label: "Cards",
      minRows: 1,
      maxRows: 6, // Limit number of cards
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          required: true,
        },
        {
          name: "iconUrl",
          type: "upload",
          relationTo: "media", // Ensure you have a media collection in Payload CMS
          label: "Icon",
          required: true,
        },
      ],
    },
  ],
};
