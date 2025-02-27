import React from 'react';

type GradientTextBlockProps = {
  text: string;
  gradientText: string; // Part of the text to apply gradient
  gradientFrom?: string;
  gradientTo?: string;
};

const GradientTextBlockComponent: React.FC<GradientTextBlockProps> = ({
  text,
  gradientText,
  gradientFrom = "#FF6B9A",
  gradientTo = "#76C7C0",
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline',
  };

  const normalStyle: React.CSSProperties = {
    color: 'white',
    display: 'inline',
  };

  // Debugging: Log text values to check for mismatches
  console.log("Full Text:", text);
  console.log("Gradient Text:", gradientText);

  // Ensure `gradientText` exists in `text`
  if (!text.includes(gradientText)) {
    console.warn("Gradient text not found in full text!");
    return (
      <section className="gradient-text-block py-8 text-center">
        <h2 className="text-6xl font-bold text-white">{text}</h2>
      </section>
    );
  }

  // Splitting the text into parts for gradient styling
  const parts = text.split(new RegExp(`(${gradientText})`, 'gi'));

  // Debugging: Log parts array to check how text is split
  console.log("Split Parts:", parts);

  return (
    <section className="gradient-text-block py-8 text-center">
      <h2 className="text-6xl font-bold">
        {parts.map((part, index) =>
          part.toLowerCase().trim() === gradientText.toLowerCase().trim() ? (
            <span key={index} style={gradientStyle}>{part}</span>
          ) : (
            <span key={index} style={normalStyle}>{part}</span>
          )
        )}
      </h2>
    </section>
  );
};

export default GradientTextBlockComponent;

// import React from 'react';

// type GradientTextBlockProps = {
//   text: string;
//   gradientFrom?: string;
//   gradientTo?: string;
// };

// const GradientTextBlockComponent: React.FC<GradientTextBlockProps> = ({
//   text,
//   gradientFrom = "#FF6B9A",
//   gradientTo = "#76C7C0",
// }) => {
//   // Using inline style since Tailwind utility classes don't accept hex colors directly.
//   const style = {
//     backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
//     WebkitBackgroundClip: 'text',
//     color: 'transparent',
//   };

//   return (
//     <section className="gradient-text-block py-8 text-center">
//       <h2 className="text-5xl font-bold" style={style}>
//         {text}
//       </h2>
//     </section>
//   );
// };

// export default GradientTextBlockComponent;
