import React from 'react';

export default function FuturisticLogo() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-80 pointer-events-none">
      <div className="relative w-full h-full animate-cube-float">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 
          rounded-full blur-3xl"></div>
        
        {/* Logo container with glow effect */}
        <div className="relative w-full h-full p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full 
            backdrop-blur-sm"></div>
          <img 
            src="/logo.jpg"
            alt="PDV Automation"
            className="w-full h-full object-contain rounded-full transform hover:scale-105 transition-transform 
              duration-500 filter brightness-110"
          />
        </div>
      </div>
    </div>
  );
}