import React from 'react';

interface GlowingBackgroundProps {
  children: React.ReactNode;
}

export default function GlowingBackground({ children }: GlowingBackgroundProps) {
  return (
    <div className="relative">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}