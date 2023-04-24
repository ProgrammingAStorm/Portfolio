import { useState, useEffect } from 'react';

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsBurgerOpen(false)
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
    <header className={`header ${isScrolled ? 'scroll' : ''}`}>
      <section className={`header-content ${isScrolled ? 'scroll' : ''}`}>
        <div className={`hero-headers ${isScrolled ? 'scroll' : ''}`}>
          <h1 className={`main-header ${isScrolled ? 'scroll' : ''}`}>Mark Pavel</h1>
          <h2 className={`sub-header ${isScrolled ? 'scroll' : ''}`}>{isScrolled ? 'P.A.S' : 'ProgrammingAStorm'}</h2>
        </div>

        {isScrolled && (
          <div className={`burger ${isBurgerOpen ? 'open' : ''}`} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
            <div className="burger-content" ></div>
            <div className="burger-content" ></div>
            <div className="burger-content" ></div>
          </div>
        )}

        <nav className={`navBar ${isScrolled ? 'scroll' : ''} ${isBurgerOpen ? 'open' : ''}`}>

          <a className={`navBar-items ${isScrolled ? 'scroll' : ''}`} href="#frontend">Frontend</a>
          <a className={`navBar-items ${isScrolled ? 'scroll' : ''}`} href="#backend">Backend</a>
          <a className={`navBar-items ${isScrolled ? 'scroll' : ''}`} href="#fullstack">Fullstack</a>
          <a className={`navBar-items ${isScrolled ? 'scroll' : ''}`} href="#aboutme">About Me</a>
          <a className={`navBar-items ${isScrolled ? 'scroll' : ''}`} href="#contactme">Contact Me</a>

        </nav >
      </section >
    </header >
  );
}

export default Hero;