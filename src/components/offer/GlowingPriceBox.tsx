import React from 'react';
import { Infinity, Sparkles } from 'lucide-react';

export default function GlowingPriceBox() {
  return (
    <div className="relative group">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 
        rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Neon Border */}
      <div className="relative bg-gray-900/90 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/50
        shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]
        transition-all duration-500">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Infinity className="w-12 h-12 text-blue-400" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-400 animate-pulse" />
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Lifetime Access</h3>
          <p className="text-xl text-blue-300 mb-6">One-time payment, forever value</p>
          <div className="flex items-baseline justify-center gap-2 mb-8">
            <span className="text-5xl font-bold text-white">$999</span>
            <span className="text-gray-400">/ lifetime</span>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white 
            py-4 px-8 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 
            transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}