import React from 'react';
import { motion } from 'framer-motion';
import { Twitter } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export default function HeroContent() {
  const { hero } = siteContent;

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 pt-44 pb-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter"
      >
        <span className="neon-text animate-neon bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 inline-block">
          {hero.title.split('.').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}{i !== arr.length - 1 && '.'}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
      >
        {hero.subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a
          href={hero.cta.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
        >
          <Twitter className="w-6 h-6 fill-current" />
          {hero.cta.text}
        </a>
      </motion.div>
    </div>
  );
}

