import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import "./landingstyle.css"


function Landing() {
    const location = useLocation();
    return (
       <div>
            <Container>
               <Row>
                    <Col size="md-12"> 
                          <h1 className="display-5" id="display-5">KnoPressure</h1>
                            <img  id="heart" src={"./assets/images/heart-799138__340.webp"} alt="heart" 
                                className="img-fluid"/>                        
                    </Col>
                    <Col size="col-12">
                        <p><strong>
                                Hypertension is more dangerous than ever before.  Did you know you can lower your risk...
                                If your blood pressure is too high, it puts extra strain on your blood vessels, heart and other organs, such as the brain, kidneys and eyes. Persistent high blood pressure can increase your risk of a number of serious and potentially life-threatening health conditions, such as: 
                            </strong></p>
                            <p id="firsttext"> heart disease. heart attacks !!!!</p>
                            </Col>
                            </Row>
                <Row>                    
                    <Col size="lg-12" className="login">                                 
                        <p id="secondtext">Visit our Site and Track your Blood Pressure</p>
                        <p id="thirdtext"> Login if you are a member or Signup to become a member</p>
                        <Link to="/login" className={location.pathname === "/login"}><button type="login" className="btn btn-primary btn-md" id="login-btn">Login</button></Link>
                        <br/>
                        <br/>
                        <ul>
                        <li><strong>SignUp:</strong> <Link to="/signup">SignUp</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
} 
export default Landing;