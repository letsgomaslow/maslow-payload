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
import HeroBlockComponent from './HeroBlock/HeroBlockComponent';

const blockComponents: { [key: string]: React.FC<any> } = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  // Make sure the key matches the slug in the block definition
  contentWithMedia: ContentWithMediaComponent,
  heroblock : HeroBlockComponent,
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

          // Payload returns _blockType; if not, try block.blockType
          const blockType = block.blockType as string;
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];
            if (Block) {
              // Check if your block data has fields nested under "fields"
              // If so, you may want to pass {...block.fields} instead.
              return (
                <div className="my-16" key={index}>
                  {/* If the data is nested under fields, you can do:
                      <Block {...block.fields} disableInnerContainer />
                      Otherwise, as below: */}
                  <Block {...block} disableInnerContainer />
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
