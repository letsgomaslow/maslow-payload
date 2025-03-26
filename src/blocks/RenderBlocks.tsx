import React, { Fragment } from 'react';
import type { Page } from '@/payload-types';

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component';
import { CallToActionBlock } from '@/blocks/CallToAction/Component';
import { ContentBlock } from '@/blocks/Content/Component';
import { FormBlock } from '@/blocks/Form/Component';
import { MediaBlock } from '@/blocks/MediaBlock/Component';
import { ContentWithMediaComponent } from '@/blocks/ContentWithMediaComponent';
import GradientTextBlockComponent from './GradientTextBlockComponent';
import AIInsightCards from './AIInsightCardsComponent';
import CenterTextComponent from './CenterTextBlockProps';
import AIInsightCardComponents from './AIInsightCardsComponent';
import AnimatedTextBlockComponent from './AnimatedTextBlockComponent';
import CaseStudies from './CaseStudiesBlock/CaseStudies';
import Header from './HeaderBlock/Header';
import CompanyDescription from './CompanyDescriptionBlock/CompanyDescription';
import Insights from './InsightsBlock/Insights';
import Capabilities from './CapabilitiesBlock/Capabilities';
import MaslowFooter from './MaslowFooterBlock/MaslowFooter';
import { ArticleList } from './Article/ArticleList';
import { FeaturedArticle } from './FeaturedArticle/FeaturedArticle';
import { Contact } from './Contact/Contact';
import { CapabilitiesHero } from './CapabilitiesHeroBlock/CapabilitiesHero';
import { StrategicBlock } from './StrategicBlock/StrategicBlock';
import { TechnologyBlock } from './TechnologyBlock/TechnologyBlock';

// Type guard for blocks that have 'fields'
const hasFields = (block: any): block is { fields: any } => {
  return 'fields' in block;
};

// Add this import near the top with other block imports

const blockComponents: { [key: string]: React.FC<any> } = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  contentWithMedia: ContentWithMediaComponent,
  gradientText: GradientTextBlockComponent,
  centerTextBlock: CenterTextComponent,
  aiInsightCardsBlock: AIInsightCardComponents,
  animatedTextBlock: AnimatedTextBlockComponent,
  caseStudies: CaseStudies,
  headerBlockNew: Header,
  companyDescription: CompanyDescription,
  insights: Insights,
  capabilities: Capabilities,
  strategic: StrategicBlock, // Add this line
  capabilitiesHero: CapabilitiesHero,
  maslowFooter: MaslowFooter,
  articleList: ArticleList,
  featuredArticle: FeaturedArticle,
  contactBlock: Contact,
  technology: TechnologyBlock, // Add this line
};

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][];
}> = ({ blocks }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          console.log(`Block ${index} data:`, block);
          console.log(`Block type:`, block.blockType);

          const blockType = block.blockType as string;
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];
            if (Block) {
              console.log(`Rendering block:`, blockType, block);
              if (hasFields(block)) {
                return (
                  <div key={index}>
                    <Block {...block} disableInnerContainer />
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <Block {...block} disableInnerContainer />
                  </div>
                );
              }
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};