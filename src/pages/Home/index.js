import React from "react";
import Chart from "../../components/Chart";
import Container from "../../components/Container";
import { FormBtn, Input } from "../../components/SearchForm";
import BPImage from "../../components/BPImage";
import Navbar from "../../components/Navbar";

function Home(){
    return(
        <>  
        <Navbar/>     
        <Container>
            <Input />
            <FormBtn />           
            <BPImage />
            <Chart />
        </Container>
       </> 
    )
};

export default Home;