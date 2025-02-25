import React from 'react';

export default function FooterLogo() {
  return (
    <div className="flex items-center gap-2 mb-6 md:mb-0">
      <img 
        src="/logo.jpg" 
        alt="PDV Automation" 
        className="w-10 h-10 object-contain rounded-full"
      />
      <span className="text-2xl font-bold">PDV Automation</span>
    </div>
  );
}