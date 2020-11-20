// App file renders the Container.js which is the bult of the application
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import "./style.css"


function App() {  
  return (
    <Router>
      <div className="App">
        <Wrapper>       
         
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Home" component={Home} />
         
        </Wrapper>
      </div>
    </Router>
  );
  
}


export default App;
