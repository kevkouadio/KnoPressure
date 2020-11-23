// App file renders the Container.js which is the bult of the application
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Wrapper>     
         
            <Route exact path="/" component={Landing} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />           
           
        </Wrapper>
      </div>
    </Router>
  );
  
}


export default App;
