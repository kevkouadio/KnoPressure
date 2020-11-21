import React from "react";
import Chart from "../../components/Chart";
// import Row from "../../components/Row";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
// import Col from "../../components/Col";
import { FormBtn, Input } from "../../components/SearchForm";


function Home(){
    return(
        <>
        <Navbar />
        <Container>
            <Input />
            <FormBtn />
            <Chart />
        </Container>
       </> 
    )
};

export default Home;