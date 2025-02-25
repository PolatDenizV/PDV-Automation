import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 ${className}`}>
      {children}
    </span>
  );
}