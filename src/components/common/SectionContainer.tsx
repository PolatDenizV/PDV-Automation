import React from 'react';
import GlowingBackground from './GlowingBackground';
import LaserBeams from './LaserBeams';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return (
    <section className={`relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden ${className}`}>
      <LaserBeams />
      <GlowingBackground>
        {children}
      </GlowingBackground>
    </section>
  );
}