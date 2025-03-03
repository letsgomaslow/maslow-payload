import React from "react";

type CenterTextBlockProps = {
  title: string;
  textSize?: string; // Tailwind text size (e.g., 'text-xl', 'text-lg')
  isBold?: boolean; // Controls bold styling
  textAlign?: "left" | "center" | "right"; // Text alignment
};

const CenterTextComponent: React.FC<CenterTextBlockProps> = ({ 
  title, 
  textSize = "text-sm", // Default smaller text size
  isBold = false, 
  textAlign = "center" 
}) => {
  return (
    <div className="w-full flex justify-center">


    <div className={`flex justify-center items-center w-[800px]`}>
      <h2 className={`${textSize} ${isBold ? "font-bold" : "font-normal"} text-${textAlign}  text-[rgb(112,127,147)] dark:text-[rgb(112,127,147)]`}>
        {title}
      </h2>
    </div>
    </div>
  );
};

export default CenterTextComponent;
