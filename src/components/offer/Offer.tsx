import React from 'react';
import LaserAccents from './LaserAccents';
import OfferContent from './OfferContent';
import ValueProposition from './ValueProposition';

export default function Offer() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]"></div>
      <LaserAccents />
      
      {/* Content */}
      <OfferContent />
      
      {/* Value Proposition */}
      <div className="max-w-4xl mx-auto px-4 mt-16">
        <ValueProposition />
      </div>
    </section>
  );
}