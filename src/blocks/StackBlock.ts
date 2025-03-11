// import { Block } from "payload";

// export const StackBlock: Block = {
//   slug: "stackBlock",
//   labels: {
//     singular: "Stack Block",
//     plural: "Stack Blocks",
//   },
//   fields: [
//     {
//       type: "array",
//       name: "items",
//       fields: [
//         {
//           type: "text",
//           name: "title",
//           required: true,
//         },
//         {
//           type: "textarea",
//           name: "description",
//         },
//       ],
//     },
//   ],
// };

// export default StackBlock;
import type { Block } from "payload";
import { GradientTextBlock } from "../blocks/GradientTextBlock";
import { CenterTextBlock } from "../blocks/CenterTextBlock";

export const StackBlock: Block = {
  slug: "stackBlock",
  labels: {
    singular: "Stack Block",
    plural: "Stack Blocks",
  },
  fields: [
    {
      name: "blocks",
      type: "blocks",
      label: "Child Blocks",
      required: false,
      blocks: [
        GradientTextBlock, 
        CenterTextBlock,   
      ],
    },
  ],
};
