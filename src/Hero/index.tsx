import React, { useState, useEffect } from 'react';

interface IHeroProps {
  isClicked: boolean;
  setIsClicked: Function;
}

const Hero: React.FC<IHeroProps> = ({ isClicked, setIsClicked }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <section className="header-content">
        <h1 className="main-header">Mark Pavel</h1>
        <h2 className='sub-header'>Fullstack Web Developer</h2>
      </section>

      <i className={`arrow ${isVisible ? 'visible' : ''}`} onClick={() => setIsClicked(true)}>
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

// import { useState, useEffect } from 'react';

// interface IHeroProps {
//   isClicked: boolean;
//   setIsClicked: Function;
// }

// function Hero({ isClicked, setIsClicked }: IHeroProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isBurgerOpen, setIsBurgerOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClick = () => {
//     setIsClicked(true);
//     setIsBurgerOpen(false);
//   };

//   return (
//     <header className={`header ${isClicked ? 'click' : ''} ${isBurgerOpen ? 'open' : ''}`}>
//       <section className={`header-content ${isClicked ? 'click' : ''}`}>
//         <div className={`hero-headers ${isClicked ? 'click' : ''}`}>
//           <h1 className={`main-header ${isClicked ? 'click' : ''}`}>Mark Pavel</h1>
//           {!isClicked && (
//             <h2 className={`sub-header ${isClicked ? 'click' : ''}`}>Fullstack Web Developer</h2>
//           )}
//         </div>

//         {isClicked && (
//           <div className={`burger ${isBurgerOpen ? 'open' : ''}`} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
//             <div className="burger-content" ></div>
//             <div className="burger-content" ></div>
//             <div className="burger-content" ></div>
//           </div>
//         )}

//         <nav className={`navBar ${isClicked ? 'click' : ''} ${isBurgerOpen ? 'open' : ''}`}>

//           <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#main">Frontend</a>
//           <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#main">Backend</a>
//           <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#main">Fullstack</a>
//           <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#main">About Me</a>
//           <a className={`navBar-items ${isClicked ? 'click' : ''}`} onClick={handleClick} href="#main">Contact Me</a>

//         </nav >

//         <i className={`arrow ${isVisible ? 'visible' : ''} ${isClicked ? 'click' : ''}`} onClick={handleClick}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
//           </svg>
//         </i>
//       </section >
//     </header >
//   );
// }

// export default Hero;