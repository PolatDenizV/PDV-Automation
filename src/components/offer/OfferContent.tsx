import React from 'react';
import GradientText from '../common/GradientText';

export default function OfferContent() {
  return (
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <GradientText>Your Personal AI Workforce</GradientText>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Invest once in your automated system and gain a tireless digital workforce that operates 
          24/7/365. With just a minimal monthly maintenance investment, your AI automation continues 
          to deliver value, scale your operations, and drive growth year after year.
        </p>
      </div>
    </div>
  );
}