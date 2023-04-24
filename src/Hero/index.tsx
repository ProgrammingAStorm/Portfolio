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

// import { useEffect, useState } from 'react';

// const Hero = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     const scrolled = window.scrollY > 0;
//     setIsScrolled(scrolled);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const flexDirection = isScrolled ? 'row' : 'column';
//   const width = isScrolled ? '33%' : '100%';
//   const fontSize = isScrolled ? '2rem' : '';
//   const subHeaderFontSize = isScrolled ? '2rem' : '';
//   const subHeaderText = isScrolled ? 'P.A.S.' : 'ProgrammingAStorm';

//   return (
//     <header
//       className="bg-pink-500 w-full transition-all p-2 sm:p-6 md:p-10 lg:p-14"
//       style={{
//         height: isScrolled ? '100px' : '100%',
//         position: isScrolled ? 'fixed' : 'relative',
//         padding: isScrolled ? '.175rem' : '',
//         minWidth: 'fit-content',
//       }}
//     >
//       <div
//         className="flex w-full h-full bg-purple-500 transition-all"
//         style={{
//           borderRadius: isScrolled ? '0%' : '5%',
//           flexDirection,
//           minWidth: '320px',
//         }}
//       >
//         <div
//           className="flex h-1/2 justify-center items-center"
//           style={{
//             flexDirection,
//             height: isScrolled ? '100%' : '50%',
//             width,
//             minWidth: '320px',
//           }}
//         >
//           <h1
//             className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl m-1"
//             style={{
//               fontSize,
//             }}
//           >
//             Mark Pavel
//           </h1>

//           <h2
//             className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl m-1"
//             style={{
//               fontSize: subHeaderFontSize,
//             }}
//           >
//             {subHeaderText}
//           </h2>
//         </div>

//         {isScrolled && <div className='burger'>
//           <div className='burger-content' />
//           <div className='burger-content' />
//           <div className='burger-content' />
//         </div>}

//         <nav
//           className="flex flex-wrap gap-6 justify-center items-center h-1/2 w-full"
//         >
//           <a className='flex h-1/4 px-8 rounded-md items-center justify-center bg-slate-600' href="#section1">Section 1</a>
//           <a className='flex h-1/4 px-8 rounded-md items-center justify-center bg-slate-600' href="#section2">Section 2</a>
//           <a className='flex h-1/4 px-8 rounded-md items-center justify-center bg-slate-600' href="#section3">Section 3</a>
//           <a className='flex h-1/4 px-8 rounded-md items-center justify-center bg-slate-600' href="#section4">Section 4</a>
//           <a className='flex h-1/4 px-8 rounded-md items-center justify-center bg-slate-600' href="#section5">Section 5</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Hero;
