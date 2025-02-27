"use client"; // Ensure this component runs in the client

import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
};

class AIInsightCard extends React.Component<CardProps> {
  override render() {
    const { title, description, imageUrl, iconUrl } = this.props;
    return (
      <div className="bg-dark rounded-xl p-4 shadow-lg text-white max-w-sm">
        <div className="relative">
          <img src={imageUrl} alt={title} className="w-full rounded-t-lg" />
          <div className="absolute top-4 left-4 bg-black p-2 rounded-lg">
            <img src={iconUrl} alt="Icon" className="w-6 h-6" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    );
  }
}

type AIInsightCardsProps = {
  cards: CardProps[];
};

const AIInsightCardComponents: React.FC<AIInsightCardsProps> = ({ cards }) => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {cards.map((card, index) => (
        <AIInsightCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AIInsightCardComponents;
