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
import BgImage from "./BgImage";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  const sectionTimeout = 250;

  return (
    <>
      <BgImage />

      <Hero setIsClicked={setIsClicked} setCurrentSection={setCurrentSection} />

      <CSSTransition in={isClicked} unmountOnExit timeout={sectionTimeout}>
        <Main currentSection={currentSection} setCurrentSection={setCurrentSection}>
          <CSSTransition in={currentSection === 0} unmountOnExit timeout={sectionTimeout}>
            <Section header={frontendData.header} subHeaders={frontendData.subHeaders}>
              <Article payload={frontendData.payload}/>
            </Section>
          </CSSTransition>

          <CSSTransition in={currentSection === 1} unmountOnExit timeout={sectionTimeout}>
            <Section header={backendData.header} subHeaders={backendData.subHeaders}>
              <Article payload={backendData.payload}/>
            </Section>
          </CSSTransition>

          <CSSTransition in={currentSection === 2} unmountOnExit timeout={sectionTimeout}>
            <Section header={fullstackData.header} subHeaders={fullstackData.subHeaders}>
              <Article payload={fullstackData.payload}/>
            </Section>
          </CSSTransition>

          <CSSTransition in={currentSection === 3} unmountOnExit timeout={sectionTimeout}>
            <AboutMe />
          </CSSTransition>

          <CSSTransition in={currentSection === 4} unmountOnExit timeout={sectionTimeout}>
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
