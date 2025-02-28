import React from "react";

type CenterTextBlockProps = {
  title: string;
};

const CenterTextComponent: React.FC<CenterTextBlockProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center text-center py-8 mx-120">
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
};

export default CenterTextComponent;
