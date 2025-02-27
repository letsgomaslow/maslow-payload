// C:\Users\Aakash\Desktop\Payload2\src\blocks\RenderBlocks.tsx
import React, { Fragment } from 'react';
import type { Page } from '@/payload-types';

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component';
import { CallToActionBlock } from '@/blocks/CallToAction/Component';
import { ContentBlock } from '@/blocks/Content/Component';
import { FormBlock } from '@/blocks/Form/Component';
import { MediaBlock } from '@/blocks/MediaBlock/Component';
// Correct import path for ContentWithMediaComponent:
import { ContentWithMediaComponent } from '@/blocks/ContentWithMediaComponent';
import GradientTextBlockComponent from './GradientTextBlockComponent';
import AIInsightCards from './AIInsightCardsComponent';

// const blockComponents: { [key: string]: React.FC<any> } = {
//   archive: ArchiveBlock,
//   content: ContentBlock,
//   cta: CallToActionBlock,
//   formBlock: FormBlock,
//   mediaBlock: MediaBlock,
//   // Make sure the key matches the slug in the block definition
//   contentWithMedia: ContentWithMediaComponent,
//   gradientText: GradientTextBlockComponent,
//   aiInsightCards : AIInsightCards
// };
const blockComponents: { [key: string]: React.FC<any> } = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  // Make sure the key matches the slug in the block definition
  contentWithMedia: ContentWithMediaComponent,
  gradientText: GradientTextBlockComponent,
  aiInsightBlock: AIInsightCards, // Fix: Match the slug in AIInsightBlock.ts
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

  const blockType = block.blockType as string;
  if (blockType && blockType in blockComponents) {
    const Block = blockComponents[blockType];
    if (Block) {
      return (
        <div  key={index}>
<Block {...(block.hasOwnProperty('fields') ? (block as any).fields : block)} disableInnerContainer />
</div>
      );
    }
  }
  return null;
})}

      </Fragment>
    );
  }
  return null;
};
