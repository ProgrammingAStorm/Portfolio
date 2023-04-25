import Hero from "./Hero";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Fullstack from "./Fullstack";
import AboutMe from "./AboutMe";
import ContractMe from "./ContactMe";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Hero />

      <main className="main">
        <Frontend />

        <Backend />

        <Fullstack />

        <AboutMe />

        <ContractMe />
      </main>

      <Footer />
    </>
  )
}

export default App
