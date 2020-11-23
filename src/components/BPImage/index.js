import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import Container from "../../components/Container";
import "./style.css";

function BPImage () {
return (
    
  <section>      
        <Row>
            <Col size="md-6" id="bloodpressure">                                             
                <p id="secondtext">Understanding Blood Pressure Readings</p> 
                    <img id="bloodpressure-chart" src={"./assets/images/blood pressure readings chart.jpg"} alt="bloodpressure-chart" 
                    className="img-fluid"/>                      
                                
            </Col>
            <Col size="md-6" id="emptycol" >                                      
                <p>Put Whatever you want here</p> 
                                        
                                
            </Col>
        </Row>
</section>

);

}

export default BPImage;