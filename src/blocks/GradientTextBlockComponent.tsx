import React from 'react';

type GradientTextBlockProps = {
  text: string;
  gradientFrom?: string;
  gradientTo?: string;
};

const GradientTextBlockComponent: React.FC<GradientTextBlockProps> = ({
  text,
  gradientFrom = "#FF6B9A",
  gradientTo = "#76C7C0",
}) => {
  // Using inline style since Tailwind utility classes don't accept hex colors directly.
  const style = {
    backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <section className="gradient-text-block text-center">
      <h2 className="text-5xl font-bold" style={style}>
        {text}
      </h2>
    </section>
  );
};

export default GradientTextBlockComponent;
