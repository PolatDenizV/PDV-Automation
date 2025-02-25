import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
}

export default function TypewriterText({ text }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    setDisplayText('');
    const textToType = text.trim();
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setDisplayText(textToType.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="typewriter-text text-red-400">
      {displayText}
      <span className={`${showUnderscore ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        _
      </span>
    </span>
  );
}