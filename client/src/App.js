// App file renders the Container.js which is the bult of the application
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About";
import SignUp from "./pages/signUp";
import Home from "./pages/Home";
import Chart from "./components/Chart";
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Tips from "./pages/Tips";
import { AnimatePresence, motion } from "framer-motion";//module to animate page navigation 
import ChartPage from "./pages/Table-Chart";

//the motion.div with parameters define the type of animation, here the page slides from left to right 

function App() {
  return (
    <AuthProvider>
      <AnimatePresence exitBeforeEnter>
        <Router>
          <div className="App">
            <Wrapper>
              <Route exact path="/">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: "100%", transition: { duration: 0.1 } }}>
                  <Landing />
                </motion.div>
              </Route>
              <ProtectedRoute exact path="/Chart" component={ChartPage} />
              <Route exact path="/login">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: "100%", transition: { duration: 0.1 } }}>
                  <Login />
                </motion.div>
              </Route>
              <Route exact path="/signup">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: "100%", transition: { duration: 0.1 } }}>
                  <SignUp />
                </motion.div>
              </Route>
              <ProtectedRoute exact path="/home">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: "100%", transition: { duration: 0.1 } }}>
                  <Home />
                </motion.div>
              </ProtectedRoute>
              <ProtectedRoute exact path="/about">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: "100%", transition: { duration: 0.1 } }}>
                  <About />
                </motion.div>
              </ProtectedRoute>
              <ProtectedRoute exact path="/tips">
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: "100%", transition: { duration: 0.1 } }}>
                  <Tips />
                </motion.div>
              </ProtectedRoute>
            </Wrapper>
          </div>
        </Router>
      </AnimatePresence>
    </AuthProvider>
  );

}


export default App;
