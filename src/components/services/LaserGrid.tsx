import React from 'react';

export default function LaserGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal laser lines */}
      <div className="absolute w-full h-full">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`absolute h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent
              animate-laser-slide-${i} opacity-60`}
            style={{
              top: `${i * 25}%`,
              left: '-100%',
              width: '200%',
              transform: `rotate(${i * 15}deg)`,
            }}
          ></div>
        ))}
      </div>

      {/* Vertical laser lines */}
      <div className="absolute w-full h-full">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0"
            style={{
              left: `${i * 33}%`,
              opacity: 0.4,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}