// // C:\Users\Aakash\Desktop\Payload2\src\blocks/ContentWithMediaComponent.tsx
// import React from 'react';
// import { serializeRichText } from '@/utilities/serializeRichText';

// export type ContentWithMediaProps = {
//   content?: string | any;
//   image?: {
//     url?: string;
//     filename?: string;
//     alt?: string;
//   };
//   textPosition?: 'Left' | 'Right';
//   disableInnerContainer?: boolean;
// };

// export const ContentWithMediaComponent: React.FC<ContentWithMediaProps> = ({
//   content,
//   image,
//   textPosition = 'Left',
// }) => {
//   // Log received content for debugging
//   console.log('ContentWithMediaComponent received content:', content);

//   const imageUrl = image?.url || (image?.filename ? `/media/${image.filename}` : '');
  
//   let htmlContent = '';
//   if (typeof content === 'string') {
//     htmlContent = content;
//   } else {
//     htmlContent = serializeRichText(content);
//   }
  
//   // Log the final HTML content to be rendered
//   console.log('Final HTML content:', htmlContent);

//   return (
//     <section className={`content-with-media ${textPosition.toLowerCase()}`}>
//       <div className="text">
//         <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//       </div>
//       {imageUrl && (
//         <div className="image">
//           <img src={imageUrl} alt={image?.alt || 'Content image'} />
//         </div>
//       )}
//     </section>
//   );
// };
// C:\Users\Aakash\Desktop\Payload2\src\blocks/ContentWithMediaComponent.tsx
// C:\Users\Aakash\Desktop\Payload2\src\blocks/ContentWithMediaComponent.tsx
// C:\Users\Aakash\Desktop\Payload2\src\blocks/ContentWithMediaComponent.tsx
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
  title?: string;
  titleGradient?: string[];
};

export const ContentWithMediaComponent: React.FC<ContentWithMediaProps> = ({
  content,
  image,
  textPosition = 'Left',
  title = '',
  titleGradient,
}) => {
  // Construct image URL
  const imageUrl =
    image?.url || (image?.filename ? `/media/${image.filename}` : '');

  // Convert rich text to HTML if needed
  let htmlContent = '';
  if (typeof content === 'string') {
    htmlContent = content;
  } else {
    htmlContent = serializeRichText(content);
  }

  // We'll only apply gradient to the words "Maslow AI"
  // Split on "Maslow AI" and re-inject it with a <span> that has the gradient style
  let processedTitle: React.ReactNode = title;
  const targetPhrase = 'Maslow AI';

  // Create gradient style if we have at least 2 colors
  const gradientStyle =
    titleGradient && titleGradient.length > 1
      ? {
          background: `linear-gradient(to right, ${titleGradient.join(', ')})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }
      : {};

  if (title.includes(targetPhrase)) {
    const parts = title.split(targetPhrase);
    processedTitle = (
      <>
        {parts[0]}
        <span style={gradientStyle}>{targetPhrase}</span>
        {parts[1]}
      </>
    );
  }

  // Decide if the text should be on the left
  const isTextLeft = textPosition === 'Left';

  return (
    <section
      style={{
        // Added left/right margin here
        margin: '0 10rem',
        // Also add top/bottom padding
        padding: '5rem 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '2rem',
        alignItems: 'center',
      }}
    >
      {/* Text Column */}
      {isTextLeft && (
        <div>
          {title && (
            <h2
              style={{
                // Increase font size and make bold
                fontSize: '3rem',
                fontWeight: 500,
                marginBottom: '1rem',
                color: '#fff',
              }}
            >
              {processedTitle}
            </h2>
          )}
          <div
            style={{ fontSize: '1rem', lineHeight: '1.5', color: '#fff' }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      )}

      {/* Image Column */}
      {imageUrl && (
        <div style={{ textAlign: isTextLeft ? 'right' : 'left' }}>
          <img
            src={imageUrl}
            alt={image?.alt || 'Content image'}
            style={{
              borderRadius: '8px',
              maxWidth: '85%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          {/* {titleGradient && titleGradient.length > 1 && (
            <div
              style={{
                height: '4px',
                marginTop: '8px',
                borderRadius: '2px',
                background: `linear-gradient(to right, ${titleGradient.join(', ')})`,
              }}
            />
          )} */}
        </div>
      )}

      {/* If text is on the right, render text second */}
      {!isTextLeft && (
        <div>
          {title && (
            <h2
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#fff',
              }}
            >
              {processedTitle}
            </h2>
          )}
          <div
            style={{ fontSize: '1rem', lineHeight: '1.5', color: '#fff' }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      )}
    </section>
  );
};