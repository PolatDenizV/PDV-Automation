import React from 'react';

export default function LaserAccents() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal Lasers */}
      <div className="absolute -left-1/4 top-0 w-1 h-[200%] bg-gradient-to-b 
        from-green-500/0 via-green-500/30 to-green-500/0 -rotate-45 blur-sm"></div>
      <div className="absolute -right-1/4 top-0 w-1 h-[200%] bg-gradient-to-b 
        from-purple-500/0 via-purple-500/30 to-purple-500/0 rotate-45 blur-sm"></div>
      
      {/* Glowing Points */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500/50 blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-purple-500/50 blur-xl"></div>
    </div>
  );
}