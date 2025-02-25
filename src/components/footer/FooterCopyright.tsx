import React from 'react';

export default function FooterCopyright() {
  return (
    <div className="text-gray-400 mb-4 md:mb-0">
      © {new Date().getFullYear()} PDV Automation. All rights reserved.
    </div>
  );
}