import React from 'react';
import { Twitter } from 'lucide-react';

export default function ContactHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-6">
        Let's Work Together
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Contact me today to discuss how I can automate your business.
      </p>
      <a
        href="https://x.com/PolatskiD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
          bg-gray-900/50 border border-gray-700/50 text-gray-300 
          hover:text-white hover:border-red-500/50 transition-all"
      >
        <Twitter className="w-5 h-5" />
        DM me on Twitter
      </a>
    </div>
  );
}