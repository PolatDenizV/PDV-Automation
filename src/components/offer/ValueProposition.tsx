import React from 'react';
import { Infinity, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Infinity,
    title: "Perpetual Access",
    description: "Your personal AI workforce that operates indefinitely, growing with your business"
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "A tireless system that works around the clock, requiring only minimal maintenance costs"
  }
];

export default function ValueProposition() {
  return (
    <div className="relative group">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 
        rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content Container */}
      <div className="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/50
        shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]
        transition-all duration-500">
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6 mx-auto w-16">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl transform 
                  group-hover:scale-150 transition-transform duration-500"></div>
                <benefit.icon className="relative w-16 h-16 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}