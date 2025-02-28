"use client";

import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageUrl?: { url: string }; // Fix: Payload stores media as an object
};

const AIInsightCard: React.FC<CardProps> = ({ title, description, iconUrl }) => {
  return (
    <div className="bg-[#0D0F1A] border border-gray-700 rounded-2xl p-6 shadow-lg text-white w-80 transition-all hover:border-pink-500 flex flex-col justify-between h-full">
      {/* Optional Image - Check if imageUrl exists and has a URL */}
      {iconUrl?.url && (
        <div className="mb-4">
          <img src={iconUrl?.url } alt="Card Image" className=" rounded-lg" height={50} width={50} />
        </div>
       )} 

      {/* Card Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

type AIInsightCardsProps = {
  cards: CardProps[];
};

const AIInsightCardComponents: React.FC<AIInsightCardsProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mx-[60px] mt-[50px]">
      {cards.map((card, index) => (
        <AIInsightCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AIInsightCardComponents;
