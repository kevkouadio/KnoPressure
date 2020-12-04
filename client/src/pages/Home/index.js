import React from "react";
import Chart from "../../components/Chart";
import Container from "../../components/Container";
import BPImage from "../../components/BPImage";
import Navbar from "../../components/Navbar";
//import { useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import SearchForm from "../../components/SearchForm";

function Home(){

    const { user } = useAuth();
    // const history = useHistory();

    //const goToEditProfile = () => history.push("/profile");
    console.log(user)

    return(
        <>  
        <Navbar/>     
        <Container>
            <h2>Welcome {user.email}</h2>
            <SearchForm />
            <BPImage />
            <Chart />
        </Container>
       </> 
    )
};

export default Home;