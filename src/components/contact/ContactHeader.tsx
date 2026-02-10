import React from 'react';
import { Twitter } from 'lucide-react';

export default function ContactHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-6">
        Let's Work Together
      </h2>
      <p className="text-xl text-gray-300">
        Contact me today to discuss how I can automate your business.
      </p>
    </div>
  );
}