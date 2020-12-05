// App file renders the Container.js which is the bult of the application
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About";
import signUp from "./pages/signUp";
import Home from "./pages/Home";
import Chart from "./components/Chart";
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {  
  return (
    <AuthProvider>
      <Router basename="/KnoPressure-App">
      <div className="App">
        <Wrapper>  
        <Route exact path="/" component={Landing} />   
            <ProtectedRoute exact path="/Chart" component={Chart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={signUp} />
            <ProtectedRoute exact path="/home" component={Home} />
            <ProtectedRoute exact path="/about" component={About} />           
            
        </Wrapper>
      </div>
      </Router>
    </AuthProvider>
  );
  
}


export default App;
