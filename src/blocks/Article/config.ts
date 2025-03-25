import type { Block } from 'payload';

export const ArticleListBlock: Block = {
  slug: 'articleList',
  interfaceName: 'ArticleListBlock',
  fields: [
    {
      name: 'articles',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        }
      ],
    }
  ],
  labels: {
    singular: 'Article List Block',
    plural: 'Article List Blocks',
  },
};