import React from 'react';

export default function LaserBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Green Laser */}
      <div className="absolute w-1 h-[200%] bg-gradient-to-b from-green-500/0 via-green-500/60 to-green-500/0 
        -rotate-45 transform -translate-x-1/2 -translate-y-1/2 blur-sm animate-laser-slide-1"></div>
      
      {/* Purple Laser */}
      <div className="absolute w-1 h-[200%] bg-gradient-to-b from-purple-500/0 via-purple-500/60 to-purple-500/0 
        rotate-45 transform translate-x-1/2 -translate-y-1/2 blur-sm animate-laser-slide-2"></div>
      
      {/* Pink Laser */}
      <div className="absolute w-1 h-[200%] bg-gradient-to-b from-pink-500/0 via-pink-500/60 to-pink-500/0 
        -rotate-12 transform translate-x-full -translate-y-1/2 blur-sm animate-laser-slide-3"></div>
    </div>
  );
}