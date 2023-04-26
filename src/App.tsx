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

          <Content />

          <Content />

          
        </Main>
      )}

      {isClicked && (
        <Footer />
      )}
    </>
  )
}

export default App
