"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type AnimatedTextBlockComponentProps = {
  title?: string;
  animatedWords?: { word: string }[];
  useGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
};

const AnimatedTextBlockComponent: React.FC<AnimatedTextBlockComponentProps> = ({
  title = "",
  animatedWords = [],
  useGradient = false,
  gradientFrom = "#FF6B9A",
  gradientTo = "#76C7C0",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (animatedWords.length > 1) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % animatedWords.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [animatedWords]);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="w-full flex justify-center px-8">
      <h1 className="w-full text-5xl md:text-7xl font-regular tracking-tighter text-center">
        {title && (
          <span style={useGradient ? gradientStyle : {}}>{title}</span>
        )}
        <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
          &nbsp;
          {animatedWords.length > 0 && (
            <motion.span
              key={index}
              className="absolute font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              style={useGradient ? gradientStyle : {}}
            >
              {animatedWords[index]?.word}
            </motion.span>
          )}
        </span>
      </h1>
    </div>
  );
};

export default AnimatedTextBlockComponent;


// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// type AnimatedTextBlockComponentProps = {
//   title: string;
//   animatedWords?: { word: string }[];
// };

// const AnimatedTextBlockComponent: React.FC<AnimatedTextBlockComponentProps> = ({ title, animatedWords = [] }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (animatedWords.length > 1) {
//       const interval = setInterval(() => {
//         setIndex((prev) => (prev + 1) % animatedWords.length);
//       }, 2000); // Change word every 2 seconds
//       return () => clearInterval(interval);
//     }
//   }, [animatedWords]);

//   return (
//     <div className="w-full flex justify-center">
//       <h1 className="text-5xl md:text-7xl font-regular tracking-tighter text-center">
//         <span className="text-spektr-cyan-50">{title}</span>
//         <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
//           &nbsp;
//           {animatedWords.length > 0 && (
//             <motion.span
//               key={index}
//               className="absolute font-semibold"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.5 }}
//             >
//               {animatedWords[index]?.word}
//             </motion.span>
//           )}
//         </span>
//       </h1>
//     </div>
//   );
// };

// export default AnimatedTextBlockComponent;
