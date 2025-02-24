// C:\Users\Aakash\Desktop\Payload2\src\blocks/ContentWithMediaComponent.tsx
import React from 'react';
import { serializeRichText } from '@/utilities/serializeRichText';

export type ContentWithMediaProps = {
  content?: string | any;
  image?: {
    url?: string;
    filename?: string;
    alt?: string;
  };
  textPosition?: 'Left' | 'Right';
  disableInnerContainer?: boolean;
};

export const ContentWithMediaComponent: React.FC<ContentWithMediaProps> = ({
  content,
  image,
  textPosition = 'Left',
}) => {
  // Log received content for debugging
  console.log('ContentWithMediaComponent received content:', content);

  const imageUrl = image?.url || (image?.filename ? `/media/${image.filename}` : '');
  
  let htmlContent = '';
  if (typeof content === 'string') {
    htmlContent = content;
  } else {
    htmlContent = serializeRichText(content);
  }
  
  // Log the final HTML content to be rendered
  console.log('Final HTML content:', htmlContent);

  return (
    <section className={`content-with-media ${textPosition.toLowerCase()}`}>
      <div className="text">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      {imageUrl && (
        <div className="image">
          <img src={imageUrl} alt={image?.alt || 'Content image'} />
        </div>
      )}
    </section>
  );
};
