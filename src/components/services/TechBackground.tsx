import React from 'react';

export default function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circuit-like lines */}
      <div className="absolute w-full h-full">
        <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-2/4 right-0 w-64 h-px bg-gradient-to-l from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-500/20 blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-purple-500/20 blur-xl"></div>
    </div>
  );
}