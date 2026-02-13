import { useState, useEffect, useRef } from 'react';
import { Twitter } from 'lucide-react';

export default function HeroContent() {
  const [isVisible, setIsVisible] = useState(false);
  const headlineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 pt-44 pb-24 text-center">
      <h1 ref={headlineRef} className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
        <span className={`neon-text ${isVisible ? 'animate-neon' : ''} bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 inline-block`}>
          Inhuman Output.<br />Fraction-of-Human Cost.
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
        I build AI-powered automation systems that replace repetitive human labor — from content
        and outreach to ads and customer handling — so your business scales 24/7 without hiring.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="https://x.com/PolatskiD"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
        >
          <Twitter className="w-6 h-6 fill-current" />
          DM Me on Twitter
        </a>
      </div>
    </div>
  );
}