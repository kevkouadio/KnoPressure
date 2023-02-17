import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";

function ChartPage() {

  return (
    <>
     <Navbar/>
     <Container>
        <Chart/>
      </Container>
      <Footer/>
    </>
  )
};

export default ChartPage;
