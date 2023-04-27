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
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  return (
    <>
      <Hero setIsClicked={setIsClicked} setCurrentSection={setCurrentSection} />

      {isClicked && (
        <Main currentSection={currentSection} setCurrentSection={setCurrentSection}>
          <CSSTransition in={currentSection === 0} unmountOnExit timeout={500}>
            <Frontend />
          </CSSTransition>

          <CSSTransition in={currentSection === 1} unmountOnExit timeout={500}>
            <Backend />
          </CSSTransition>

          <CSSTransition in={currentSection === 2} unmountOnExit timeout={500}>
            <Fullstack />
          </CSSTransition>

          <CSSTransition in={currentSection === 3} unmountOnExit timeout={500}>
            <AboutMe />
          </CSSTransition>

          <CSSTransition in={currentSection === 4} unmountOnExit timeout={500}>
            <ContactMe />
          </CSSTransition>
        </Main>
      )}

      <CSSTransition in={currentSection === 4} unmountOnExit timeout={500}>
        <Footer />
      </CSSTransition>
    </>
  )
}

export default App
