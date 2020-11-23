import React from "react";
import Chart from "../../components/Chart";
import Container from "../../components/Container";
import { FormBtn, Input } from "../../components/SearchForm";


function Home(){
    return(
        <>       
        <Container>
            <Input />
            <FormBtn />
            <Chart />
        </Container>
       </> 
    )
};

export default Home;