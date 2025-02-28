import { Block } from "payload";

export const CenterTextBlock: Block ={
    slug: 'centerTextBlock',
    labels:{
        singular: 'Center Text Block',
        plural: 'Center Text Block'
    },
    fields:[
        {
            type: 'text',
            name: 'title',
            required: true,
          },
    ]
}