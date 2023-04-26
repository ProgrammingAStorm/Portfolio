import Hero from "./Hero";
import Footer from "./Footer";
import Content from "./Content";
import Main from "./Main";

function App() {
  return (
    <>
      <Hero />

      <Main>
        <Content id="frontend" header="Frontend">

        </Content>

        <Content id="backend" header="Backend">

        </Content>

        <Content id="fullstack" header="Fullstack">

        </Content>

        <Content id="aboutme" header="About Me">

        </Content>

        <Content id="contactme" header="Conact Me">

        </Content>
      </Main>

      <Footer />
    </>
  )
}

export default App
