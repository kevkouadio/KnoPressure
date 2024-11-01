import React from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import "./aboutstyle.css";

function About() {
    return (
        <div>
            <Navbar />
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="display-5">About Us</h1>
                        <hr />
                    </Col>
                    <Col size="md-10">
                        <div className="card border border-info">
                            <div className="card-body">
                                <p className="card-text">Welcome all to our KnoPressure app. Our App was built so that you can input your information in order to determine your blood pressure.
                                    High or Low blood pressure is such a deadly silent killer in our society today and many of us don't even know we have it.
                                    High blood pressure, also called hypertension, is when the pressure in your blood vessels is unusually high. It can be serious if not treated.
                                    Lifestyle changes like eating a healthy diet and exercising regularly can help lower high blood pressure. Some people also need to take medicines.
                                    Things that increase your chances of high blood pressure include being overweight, having an unhealthy diet, smoking and not exercising enough.
                                    <br></br>
                                    We created this app in light of the current pandemic. Many people are under huge amount of stress in everyday life and if your blood pressure is untracked and unchecked
                                    you can literally end up in the hospital or worse in the blink of an eye. So please try and stay healthy, find ways to destress, take care of yourselves.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col size="md-6">
                        <div className="card-body">
                            <h5>OUR TEAM</h5>
                        </div>
                    </Col>
                    <Row>
                        <div className="card images">
                            <img src={"./assets/images/kevin.JPG"} className="card-img-top custom-img" alt="Kevin" />
                            <div className="card-body">
                                <p className="card-text">Kouassi Kevin Kouadio </p>
                                <a href="https://www.linkedin.com/in/kouassi-kouadio-b731a071/?locale=en_US" target="_blank" rel="noopener noreferrer">
                                    <img className="linkedin-icon" src={"./assets/images/linkedin-icon.png"} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                        <div className="card images">
                            <img src={"./assets/images/Wendy1.jpg"} className="card-img-top custom-img" alt="Wendy" />
                            <div className="card-body">
                                <p className="card-text">Wendy Hintzen</p>
                                <a href="https://www.linkedin.com/in/wendy-hintzen-999b7583/" target="_blank" rel="noopener noreferrer">
                                    <img className="linkedin-icon" src={"./assets/images/linkedin-icon.png"} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                        <div className="card images">
                            <img src={"./assets/images/Tashena.jpg"} className="card-img-top custom-img" alt="Tashena" />
                            <div className="card-body">
                                <p className="card-text">Tashena 'Sheena' Malloy </p>
                                <a href="https://www.linkedin.com/in/tashenamalloy/" target="_blank" rel="noopener noreferrer">
                                    <img className="linkedin-icon" src={"./assets/images/linkedin-icon.png"} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                        <div className="card images">
                            <img src={"./assets/images/Miguel1.png"} className="card-img-top custom-img" alt="Miguel" />
                            <div className="card-body">
                                <p className="card-text">Miguel Lopez</p>
                                <a href="https://www.linkedin.com/in/miguel--a--lopez/" target="_blank" rel="noopener noreferrer">
                                    <img className="linkedin-icon" src={"./assets/images/linkedin-icon.png"} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </Row>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}


export default About;  