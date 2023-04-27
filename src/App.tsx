import { useState } from "react";

import Hero from "./Hero";
import Main from "./Main";
import Section from "./Section";
import Article from "./Article";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

import { frontendData, backendData, fullstackData} from "./data";

import { CSSTransition } from "react-transition-group";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  return (
    <>
      <img className="background-image"/>

      <Hero setIsClicked={setIsClicked} setCurrentSection={setCurrentSection} />

      <CSSTransition in={isClicked} unmountOnExit timeout={500}>
        <Main currentSection={currentSection} setCurrentSection={setCurrentSection}>
          <CSSTransition in={currentSection === 0} unmountOnExit timeout={500}>
            <Section header={frontendData.header} subHeaders={frontendData.subHeaders} animationName="frontend">
              <Article payload={frontendData.payload}/>
            </Section>
          </CSSTransition>

          <CSSTransition in={currentSection === 1} unmountOnExit timeout={500}>
            <Section header={backendData.header} subHeaders={backendData.subHeaders} animationName="backend">
              <Article payload={frontendData.payload}/>
            </Section>
          </CSSTransition>

          <CSSTransition in={currentSection === 2} unmountOnExit timeout={500}>
            <Section header={fullstackData.header} subHeaders={fullstackData.subHeaders} animationName="fullstack">
              <Article payload={frontendData.payload}/>
            </Section>
          </CSSTransition>

          <CSSTransition in={currentSection === 3} unmountOnExit timeout={500}>
            <AboutMe />
          </CSSTransition>

          <CSSTransition in={currentSection === 4} unmountOnExit timeout={500}>
            <ContactMe />
          </CSSTransition>
        </Main>
      </CSSTransition>

      <CSSTransition in={currentSection === 4} unmountOnExit timeout={500}>
        <Footer />
      </CSSTransition>
    </>
  )
}

export default App
