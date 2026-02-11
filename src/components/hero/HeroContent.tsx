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
    <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-20">
      <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <span className={`neon-text ${isVisible ? 'animate-neon' : ''}`}>
          Inhuman Volume Made Cheaper Than Human Labor
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
        From social media dominance to personalized outreach, I deliver 24/7 automation
        that scales your brand effortlessly.
      </p>
      <a
        href="https://x.com/PolatskiD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 
          text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 
          hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Twitter className="w-5 h-5" />
        DM Me on Twitter
      </a>
    </div>
  );
}