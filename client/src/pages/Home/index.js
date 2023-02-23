import React from "react";
import Chart from "../../components/Chart";
import Container from "../../components/Container";
import BPImage from "../../components/BPImage";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useAuth } from "../../utils/auth";
import SearchForm from "../../components/SearchForm";
import Row from "../../components/Row";
import Table from "../../components/Table";

function Home() {

    const { user } = useAuth();

    return (
        <>
            <Navbar />
            <Container>
                <h2>Welcome {user.username}</h2>
                <Row>
                    <SearchForm />
                    <BPImage />
                </Row>
                <Table />
            </Container>
            <Footer />
        </>
    )
};

export default Home;