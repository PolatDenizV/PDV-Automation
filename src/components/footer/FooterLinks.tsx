import React from 'react';

export default function FooterLinks() {
  return (
    <div className="flex gap-6">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        Privacy Policy
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        Terms of Service
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        Contact Us
      </a>
    </div>
  );
}