import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { ContentWithMedia } from '../../blocks/ContentWithMedia';
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'
import { GradientTextBlock } from '@/blocks/GradientTextBlock'
import { ContactBlock } from '@/blocks/Contact/config';
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { CenterTextBlock } from '@/blocks/CenterTextBlock'
import { AIInsightCardsBlock } from '@/blocks/AIInsightCards'
import { StackBlock } from '@/blocks/StackBlock'
import AnimatedTextBlock from '@/blocks/animatedTextBlock'
import { CaseStudiesBlock } from '@/blocks/CaseStudiesBlock/config'
import { HeaderBlock } from '@/blocks/HeaderBlock/config'
import { CompanyDescriptionBlock } from '@/blocks/CompanyDescriptionBlock/config'
import { InsightsBlock } from '@/blocks/InsightsBlock/config'
import { CapabilitiesBlock } from '@/blocks/CapabilitiesBlock/config'
import { MaslowFooterBlock } from '@/blocks/MaslowFooterBlock/config'
import { ArticleListBlock } from '@/blocks/Article/config'
import { FeaturedArticleBlock } from '@/blocks/FeaturedArticle/config'
import { CapabilitiesHeroBlock } from '@/blocks/CapabilitiesHeroBlock/config';
import { StrategicBlock } from '@/blocks/StrategicBlock/config';
import { TechnologyBlock } from '@/blocks/TechnologyBlock/config';

// Add this import at the top with other block imports
import { ShowcaseBlock } from '@/blocks/ShowcaseBlock/config';
import { TestimonialBlock } from '@/blocks/TestimonialBlock/config'
import { CaseStudyDetailsBlock } from '@/blocks/CaseStudyDetailsBlock/config'
import { StatisticsBlock } from '@/blocks/StatisticsBlock/config'
import { CaseStudyDetailsSecondBlock } from '@/blocks/CaseStudyDetailsSecondBlock/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              // Add ShowcaseBlock to the blocks array in the layout field
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction, 
                Content, 
                MediaBlock, 
                Archive, 
                FormBlock,
                ContentWithMedia,
                GradientTextBlock, 
                CenterTextBlock,
                AIInsightCardsBlock,
                StackBlock,
                AnimatedTextBlock,
                CaseStudiesBlock,
                HeaderBlock,
                CompanyDescriptionBlock,
                InsightsBlock, 
                CapabilitiesBlock,
                CapabilitiesHeroBlock,
                StrategicBlock, 
                MaslowFooterBlock,
                ArticleListBlock,
                FeaturedArticleBlock,
                StatisticsBlock,
                ContactBlock,
                TestimonialBlock,
                TechnologyBlock,
                ShowcaseBlock,
                CaseStudyDetailsBlock,
                CaseStudyDetailsSecondBlock
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
