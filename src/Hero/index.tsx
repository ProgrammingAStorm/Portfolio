import { useState, useEffect, useRef } from 'react';

function Hero() {
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setIsBurgerOpen(false);
  };

  return (
    <header className={`header ${isClicked ? 'click' : ''} ${isBurgerOpen ? 'open' : ''} ${isDown ? 'down' : ''}`}>
      <section className={`header-content ${isClicked ? 'click' : ''}`}>
        <div className={`hero-headers ${isClicked ? 'click' : ''}`}>
          <h1 className={`main-header ${isClicked ? 'click' : ''}`}>Mark Pavel</h1>
          {!isClicked && (
            <h2 className={`sub-header ${isClicked ? 'click' : ''}`}>Fullstack Web Developer</h2>
          )}
        </div>

        {isClicked && (
          <div className={`burger ${isBurgerOpen ? 'open' : ''}`} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
            <div className="burger-content" ></div>
            <div className="burger-content" ></div>
            <div className="burger-content" ></div>
          </div>
        )}

        <nav className={`navBar ${isClicked ? 'click' : ''} ${isBurgerOpen ? 'open' : ''}`}>

          <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#frontend">Frontend</a>
          <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#backend">Backend</a>
          <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#fullstack">Fullstack</a>
          <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#aboutme">About Me</a>
          <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#contactme">Contact Me</a>

        </nav >

        <i className={`arrow ${isVisible ? 'visible' : ''} ${isClicked ? 'click' : ''}`} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </i>
      </section >
    </header >
  );
}

export default Hero;