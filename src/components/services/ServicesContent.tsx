import React from 'react';
import { siteContent } from '../../data/siteContent';
import ServiceCard from './ServiceCard';

export default function ServicesContent() {
  const { services } = siteContent;

  return (
    <div className="relative z-10 container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-gradient">
          {services.title.split('.').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}{i !== arr.length - 1 && '.'}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
          {services.subtitle}
        </p>
      </div>

      {/* Bento Grid Intro */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-blue-400 mb-4 uppercase tracking-widest text-sm">{services.problemSolution.problem.title}</h3>
          <p className="text-gray-400 leading-relaxed font-medium">
            {services.problemSolution.problem.description}
          </p>
        </div>
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 uppercase tracking-widest text-sm">{services.problemSolution.missingPiece.title}</h3>
          <p className="text-gray-400 leading-relaxed font-medium">
            {services.problemSolution.missingPiece.description}
          </p>
        </div>
        <div className="glass-card p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-purple-400 mb-4 uppercase tracking-widest text-sm">{services.problemSolution.solution.title}</h3>
          <p className="text-gray-400 leading-relaxed font-medium">
            {services.problemSolution.solution.description}
          </p>
        </div>
      </div>

      {/* Main Services Bento Grid */}
      <div className="flex flex-col gap-32 md:gap-[40vh] py-20">
        {services.items.map((service, index) => (
          <div key={index} className={`w-full max-w-4xl mx-auto ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-500 tracking-tight">
          {services.footerNote}
        </h3>
      </div>
    </div>
  );
}
