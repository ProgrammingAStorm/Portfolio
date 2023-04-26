import React, { useState, useEffect } from 'react';

interface IHeroProps {
  setIsClicked: Function;
}

const Hero: React.FC<IHeroProps> = ({ setIsClicked }) => {
  return (
    <header className="header">
      <section className="header-content">
        <h1 className="main-header">Mark Pavel</h1>
        <h2 className='sub-header'>Fullstack Web Developer</h2>
      </section>

      <i className="arrow" onClick={() => setIsClicked(true)}>
        <a href="#main">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </i>
    </header>
  );
};

export default Hero;