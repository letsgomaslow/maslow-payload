import React from "react";

type GradientTextBlockProps = {
  text?: string; 
  gradientText?: string; 
  gradientFrom?: string;
  gradientTo?: string;
  useGradient?: boolean; // New prop to enable/disable gradient
};

const GradientTextBlockComponent: React.FC<GradientTextBlockProps> = ({
  text = "", 
  gradientText = "",
  gradientFrom = "#FF6B9A",
  gradientTo = "#76C7C0",
  useGradient = false, // Default to false
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline",
  };

  const normalStyle: React.CSSProperties = {
    color: "var(--foreground)",
    display: "inline",
  };

  console.log("Full Text:", text);
  console.log("Gradient Text:", gradientText);
  console.log("Use Gradient:", useGradient);

  if (!text.includes(gradientText)) {
    console.warn("Gradient text not found in full text!");
    return (
      <section className="gradient-text-block py-8 text-center">
        <h2 className="text-6xl font-bold text-white">{text}</h2>
      </section>
    );
  }

  const parts = text.split(new RegExp(`(${gradientText})`, "gi"));

  return (
    <section
      className="gradient-text-block py-8 text-center"
      style={{ margin: "0 105px" }}
    >
      <h2 className="text-6xl font-bold">
        {parts.map((part, index) =>
          part.toLowerCase().trim() === gradientText.toLowerCase().trim() && useGradient ? (
            <span key={index} style={gradientStyle}>
              {part}
            </span>
          ) : (
            <span key={index} style={normalStyle}>
              {part}
            </span>
          )
        )}
      </h2>
    </section>
  );
};

export default GradientTextBlockComponent;



// import React from "react";

// type GradientTextBlockProps = {
//   text?: string; 
//   gradientText?: string; 
//   gradientFrom?: string;
//   gradientTo?: string;
// };

// const GradientTextBlockComponent: React.FC<GradientTextBlockProps> = ({
//   text = "", 
//   gradientText = "",
//   gradientFrom = "#FF6B9A",
//   gradientTo = "#76C7C0",
// }) => {
//   const gradientStyle: React.CSSProperties = {
//     backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     display: "inline",
//   };

//   const normalStyle: React.CSSProperties = {
//     color: "var(--foreground)",
//     display: "inline",
//   };

 
//   console.log("Full Text:", text);
//   console.log("Gradient Text:", gradientText);


//   if (!text.includes(gradientText)) {
//     console.warn("Gradient text not found in full text!");
//     return (
//       <section className="gradient-text-block py-8 text-center">
//         <h2 className="text-6xl font-bold text-white">{text}</h2>
//       </section>
//     );
//   }

//   const parts = text.split(new RegExp(`(${gradientText})`, "gi"));

//   return (
//     <section
//       className="gradient-text-block py-8 text-center"
//       style={{ margin: "0 105px" }}
//     >
//       <h2 className="text-6xl font-bold">
//         {parts.map((part, index) =>
//           part.toLowerCase().trim() === gradientText.toLowerCase().trim() ? (
//             <span key={index} style={gradientStyle}>
//               {part}
//             </span>
//           ) : (
//             <span key={index} style={normalStyle}>
//               {part}
//             </span>
//           )
//         )}
//       </h2>
//     </section>
//   );
// };

// export default GradientTextBlockComponent;