import React from 'react';

export default function LaserEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vertical Lasers */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b 
        from-green-500/0 via-green-500/30 to-green-500/0 blur-sm"></div>
      <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b 
        from-purple-500/0 via-purple-500/30 to-purple-500/0 blur-sm"></div>
      
      {/* Glowing Points */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full 
        bg-blue-500/30 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full 
        bg-purple-500/30 blur-xl animate-pulse"></div>
    </div>
  );
}