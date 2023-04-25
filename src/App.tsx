import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Hero />

      <div className="flex flex-col flex-1">
        <main className="main">
          <AboutMe />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
