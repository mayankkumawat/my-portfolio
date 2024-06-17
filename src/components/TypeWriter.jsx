import { cabin } from '@/styles/fonts';
import React, { useEffect, useState } from 'react';

const TypeWriter = () => {
  const text = 'Mobile and web developer';
  const speed = 80;
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeWriter = () => {
      if (isTyping) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (index > 1) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
        }
      }
    };

    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [index, isTyping]);

  return <p className={`info-title ${cabin.className}`}>{displayedText}</p>;
};

export default TypeWriter;
