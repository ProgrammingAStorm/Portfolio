import React, { useState } from 'react';

interface IHeroProps {
  setIsClicked: Function;
  setCurrentSection: Function;
}

const Hero: React.FC<IHeroProps> = ({ setIsClicked, setCurrentSection }) => {

  return (
    <header className="header">
      <section className="header-content" onMouseMove={e => {
        const blob = document.querySelector('.hero-blob');
        const blobBox = blob?.getBoundingClientRect();

        blob?.animate({
          top: `${e.clientY - blobBox!.height}px`,
          left: `${e.clientX - blobBox!.width}px`
        },
        {
          duration: 5000,
          fill: "forwards"
        });
      }}>
        <h1 className="main-header">Mark Pavel</h1>
        <h2 className='sub-header'>Fullstack Web Developer</h2>

        <div className='hero-blob' />
      </section>
      
      <a href="#main" className="arrow" onClick={() => {
        setCurrentSection(0);
        setIsClicked(true);
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </a>
    </header>
  );
};

export default Hero;