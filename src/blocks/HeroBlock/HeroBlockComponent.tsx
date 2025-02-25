// Example in HeroBlockComponent.tsx
import React from 'react';

export type HeroBlockProps = {
  backgroundImage?: string | number; // Adjust based on how media is populated
  title: string;
  gradientText: string;
  subtitle: string;
  description: string;
};

const HeroBlockComponent: React.FC<HeroBlockProps> = ({
  backgroundImage,
  title,
  gradientText,
  subtitle,
  description,
}) => {
  console.log('HeroBlockComponent props:', { backgroundImage, title, gradientText, subtitle, description });
  
  // Assuming backgroundImage is an ID or URL. Adjust how you get the URL.
  const bgUrl = typeof backgroundImage === 'string' ? backgroundImage : `/media/${backgroundImage}`;
  
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-dark">
      {/* Background Image */}
      {bgUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
      )}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          {title} <br />
          <span className="bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text">
            {gradientText}
          </span>
        </h1>
        <h2 className="text-lg md:text-xl text-gray-300 mt-4">
          {subtitle}
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-6 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroBlockComponent;
