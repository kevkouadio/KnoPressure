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
       <h2>If your blood pressure reading is 180/120 or greater and/or you are having symptoms such as chest pain, shortness of breath,etc. Please call 911 IMMEDIATELY!!</h2>
        <div className="row">
      <CardList />
    </div>
      </Container>
      <Footer/>
    </>
  )
};

export default Tips;
