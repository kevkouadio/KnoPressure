// App file renders the Container.js which is the bult of the application
import React from "react";
// import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {  
  return (
    <div className="App">
      <Wrapper>       
        <Header />
        <Container />
      </Wrapper>
      <Footer />
    </div>
  );
  
}


export default App;
