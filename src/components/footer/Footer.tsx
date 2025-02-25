import React from 'react';
import FooterLogo from './FooterLogo';
import FooterSocial from './FooterSocial';
import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* Subtle gradient overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative">
          {/* Upper Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <FooterLogo />
            <FooterSocial />
          </div>

          {/* Divider with glow effect */}
          <div className="border-t border-gray-800 pt-8 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          </div>

          {/* Lower Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <FooterCopyright />
            <FooterLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}