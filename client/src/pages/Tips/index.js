import React from "react";
import CardList from "../../components/CardList";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

function Tips() {

  return (
    <>
     <Navbar/>
     <Container>
        <div className="row">
      <CardList />
    </div>
      </Container>
      <Footer/>
    </>
  )
};

export default Tips;
