import React from "react";
import CardList from "../../components/CardList";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Tips() {

  return (
    <>
     <Navbar/>
    <div className="row">
      <CardList />
    </div>
    <Footer/>
    </>
  )
};

export default Tips;
