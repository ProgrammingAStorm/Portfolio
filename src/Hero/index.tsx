import React, { useState, useEffect } from 'react';

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const minWidth = '320px';

  return (
    <header className="bg-pink-500 w-full transition-all p-2 sm:p-6 md:p-10 lg:p-14" style={{
      height: isScrolled ? '100px' : '100%',
      position: isScrolled ? 'fixed' : 'relative',
      padding: isScrolled ? '.175rem' : ''
    }}>
      <div className="flex w-full h-full bg-purple-500 transition-all" style={{
        borderRadius: isScrolled ? '0%' : '5%',
        flexDirection: isScrolled ? 'column' : 'row',
      }}>
        <div className="flex sm:justify-start justify-center items-center" style={{
          flexDirection: isScrolled ? 'row' : 'column',
          height: isScrolled ? '100%' : '50%',
          width: isScrolled ? '33%' : '100%',
          gap: isScrolled ? '.25rem' : '',
          minWidth
        }}>
          <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl" style={{
            fontSize: isScrolled ? "2rem" : '',
          }}>
            Mark Pavel
          </h1>

          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl" style={{
            fontSize: isScrolled ? "2rem" : ''
          }}>
            {isScrolled ? 'P.A.G.' : 'ProgrammingAStorm'}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Hero;


// import { useState, useEffect } from "react";

// const Hero = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 0);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className="bg-pink-500 w-full transition-all p-2 sm:p-6 md:p-10 lg:p-14" style={{
//       height: isScrolled ? "65px" : "100%",
//       position: isScrolled ? "fixed" : "relative",
//       padding: isScrolled ? ".175rem" : "",
//     }}>
//       <div className="flex flex-col w-full h-full bg-purple-500 transition-all" style={{
//         borderRadius: isScrolled ? "0%" : "5%",
//       }}>
//         <div className="">
//           <h1>Mark Pavel</h1>
//           <h2>ProgrammingAStorm</h2>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Hero;