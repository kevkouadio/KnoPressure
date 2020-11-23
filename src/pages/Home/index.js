import React from "react";
import Chart from "../../components/Chart";
import Container from "../../components/Container";
import { FormBtn, Input } from "../../components/SearchForm";
import BPImage from "../../components/BPImage";

function Home(){
    return(
        <>       
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