import Hero from "./Hero";
import Footer from "./Footer";
import Content from "./Content";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Hero setIsClicked={setIsClicked} />

      {isClicked && (
        <Main>
          <Content id="frontend" header="Frontend">

          </Content>

          <Content id="backend" header="Backend">

          </Content>

          <Content id="fullstack" header="Fullstack">

          </Content>

          <Content id="aboutme" header="About Me">

          </Content>

          <Content id="contactme" header="Contact Me">

          </Content>
        </Main>
      )}

      {isClicked && (
        <Footer />
      )}
    </>
  )
}

export default App
