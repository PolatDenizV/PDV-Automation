import React from 'react';

interface RobotPeekProps {
  isVisible: boolean;
}

export default function RobotPeek({ isVisible }: RobotPeekProps) {
  return (
    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Triangle Break Effect */}
      <div className={`absolute w-12 h-12 transition-transform duration-500 origin-top-left
        ${isVisible ? 'translate-x-1 translate-y-1 rotate-6' : 'translate-x-0 translate-y-0 rotate-0'}
        bg-gradient-to-br from-red-500/20 to-red-400/20 clip-triangle`}>
      </div>

      {/* Robot Head */}
      <div className={`absolute w-8 h-8 transition-all duration-500 ease-out
        ${isVisible ? 'translate-x-2 translate-y-2' : '-translate-x-full -translate-y-full'}
        bg-gray-900 rounded-lg border border-red-500/50 overflow-hidden`}>
        {/* Robot Face */}
        <div className="relative w-full h-full">
          {/* Eyes */}
          <div className="absolute top-2 left-1 w-1.5 h-1.5 bg-red-400 rounded-full 
            animate-robot-blink"></div>
          <div className="absolute top-2 right-1 w-1.5 h-1.5 bg-red-400 rounded-full 
            animate-robot-blink"></div>
          {/* Mouth */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-0.5 
            bg-red-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}