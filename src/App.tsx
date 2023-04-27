import { useState } from "react";

import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";

import Frontend from "./Frontend";
import Backend from "./Backend";
import Fullstack from "./Fullstack";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

import { CSSTransition } from "react-transition-group";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <Hero setIsClicked={setIsClicked} />

      {isClicked && (
        <Main currentSection={currentSection} setCurrentSection={setCurrentSection}>
          <CSSTransition in={currentSection === 0} unmountOnExit timeout={1000}>
            <Frontend />
          </CSSTransition>

          <CSSTransition in={currentSection === 1} unmountOnExit timeout={1000}>
            <Backend />
          </CSSTransition>

          <CSSTransition in={currentSection === 2} unmountOnExit timeout={1000}>
            <Fullstack />
          </CSSTransition>

          <CSSTransition in={currentSection === 3} unmountOnExit timeout={1000}>
            <AboutMe />
          </CSSTransition>

          <CSSTransition in={currentSection === 4} unmountOnExit timeout={1000}>
            <ContactMe />
          </CSSTransition>
        </Main>
      )}

      {isClicked && (
        <Footer />
      )}
    </>
  )
}

export default App
