import Hero from "./Hero";
import Footer from "./Footer";
import Content  from "./Content";

function App() {
  return (
    <>
      <Hero />

      <main className="main">
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
      </main>

      <Footer />
    </>
  )
}

export default App
