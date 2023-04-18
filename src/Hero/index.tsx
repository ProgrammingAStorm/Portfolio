import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-pink-500 transition-all w-full top-0" style={{
      height: isScrolled ? '65px' : '100%',
      position: isScrolled ? 'fixed' : 'relative',
      padding: isScrolled ? '.175rem' : '1.75rem',
    }}>
      <div className="bg-purple-500 w-full h-full transition-all" style={{
        borderRadius: isScrolled ? '1%' : '0.5%',
      }}>
        {/* Content goes here */}
      </div>
    </div>
  );
}