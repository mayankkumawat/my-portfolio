'use client';
import { useState, useEffect } from 'react';
import { RxDoubleArrowUp } from 'react-icons/rx';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <div className="arrow">
        <RxDoubleArrowUp />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
