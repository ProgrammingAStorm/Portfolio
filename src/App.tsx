import { useState } from "react";

import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";

import Frontend from "./Frontend";
import Backend from "./Backend";
import Fullstack from "./Fullstack";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Hero setIsClicked={setIsClicked} />

      {isClicked && (
        <Main>
          <Frontend />

          <Backend />

          <Fullstack />

          <AboutMe />

          <ContactMe />
        </Main>
      )}

      {isClicked && (
        <Footer />
      )}
    </>
  )
}

export default App
