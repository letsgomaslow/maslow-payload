"use client";

import React from "react";
import { CodeIcon } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

type CardProps = {
  title: string;
  description: string;
  iconUrl?: { url: string };
};

const AIInsightCard: React.FC<CardProps> = ({ title, description, iconUrl }) => {
  return (
    <div className="relative border border-border rounded-[15px] p-6 shadow-lg w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:border-[#0ea5e9] flex flex-col justify-between h-full bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Pixel Canvas Background */}
      <PixelCanvas
        gap={10}
        speed={25}
        colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
        variant="icon"
      />

      {/* Card Icon */}
      <div className="relative z-10 flex items-center mb-4">
        {iconUrl?.url ? (
          <img
            src={iconUrl.url}
            alt="Card Icon"
            className="w-11 h-8 rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <CodeIcon className="w-11 h-8 text-muted-foreground transition-transform duration-300 group-hover:scale-110" />
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow relative z-10 text-left">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

type AIInsightCardsProps = {
  cards: CardProps[];
};

const AIInsightCardComponents: React.FC<AIInsightCardsProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 mt-10">
      {cards.map((card, index) => (
        <AIInsightCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AIInsightCardComponents;

// "use client";

// import React from "react";
// import { CodeIcon } from "lucide-react";
// import { PixelCanvas } from "@/components/ui/pixel-canvas";

// type CardProps = {
//   title: string;
//   description: string;
//   iconUrl?: { url: string };
// };

// const AIInsightCard: React.FC<CardProps> = ({ title, description, iconUrl }) => {
//   return (
//     <div className="border border-border rounded-[32px] p-6 shadow-lg w-80 transition-all hover:border-[#0ea5e9] flex flex-col justify-between h-full bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
//       {/* Pixel Canvas Background */}
//       <PixelCanvas
//         gap={10}
//         speed={25}
//         colors={["#e0f2fe", "#7dd3fc", "#0ea5e9"]}
//         variant="icon"
//       />
//       {/* Card Icon */}
//       <div className="relative z-10 h-full w-full flex items-center justify-center mb-4">
//         {iconUrl?.url ? (
//           <img
//             src={iconUrl?.url}
//             alt="Card Icon"
//             className="w-20 h-20 rounded-lg transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-[#0ea5e9]"
//           />
//         ) : (
//           <CodeIcon className="w-20 h-20 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-[#0ea5e9]" />
//         )}
//       </div>
//       {/* Card Content */}
//       <div className="flex flex-col flex-grow relative z-10 text-center">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-sm text-[rgb(112,127,147)]">{description}</p>
//       </div>
//     </div>
//   );
// };

// type AIInsightCardsProps = {
//   cards: CardProps[];
// };

// const AIInsightCardComponents: React.FC<AIInsightCardsProps> = ({ cards }) => {
//   return (
//     <div className="grid grid-cols-3 gap-6 mx-[60px] mt-[50px]">
//       {cards.map((card, index) => (
//         <AIInsightCard key={index} {...card} />
//       ))}
//     </div>
//   );
// };

// export default AIInsightCardComponents;
