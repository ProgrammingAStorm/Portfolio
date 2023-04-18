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

  const minWidth = '100px';

  return (
    <header className="bg-pink-500 w-full transition-all p-2 sm:p-6 md:p-10 lg:p-14" style={{
      height: isScrolled ? '65px' : '100%',
      position: isScrolled ? 'fixed' : 'relative',
      padding: isScrolled ? '.175rem' : ''
    }}>
      <div className="flex w-full h-full bg-purple-500 transition-all" style={{
        borderRadius: isScrolled ? '0%' : '5%',
        flexDirection: isScrolled ? 'column' : 'row',
      }}>
        <div className="flex" style={{
          flexDirection: isScrolled ? 'row' : 'column',
          height: isScrolled ? '100%' : '50%',
          width: isScrolled ? '33%' : '100%',
          minWidth
        }}>
          <h1 className="" style={{
            height: isScrolled ? '100%' : '66%',
            width: isScrolled ? '60%' : '100%'
          }}>Mark Pavel</h1>
          <h2 className="" style={{
            height: isScrolled ? '100%' : '33%',
            width: isScrolled ? '40%' : '100%'
          }}>ProgrammingAStorm</h2>
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