import type { Block } from 'payload';

export const FeaturedArticleBlock: Block = {
  slug: 'featuredArticle',
  interfaceName: 'FeaturedArticleBlock',
  fields: [
    {
      name: 'article',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: true,
        }
      ],
    }
  ],
  labels: {
    singular: 'Featured Article Block',
    plural: 'Featured Article Blocks',
  },
};