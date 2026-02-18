import React from 'react';
import { siteContent } from '../../data/siteContent';

export default function ContactHeader() {
  const { contact } = siteContent;

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-gradient">
        {contact.header.title.split('<br />').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i !== arr.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium">
        {contact.header.subtitle}
      </p>
    </div>
  );
}
