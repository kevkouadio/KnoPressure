import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";

function BPImage () {
return (
<Row>
    <Col size="col-lg-6">                                       
        <p id="secondtext">Understanding Blood Pressure Readings</p> 
             <img id="bloodpressure-chart" src={"./assets/images/blood pressure readings chart.jpg"} alt="bloodpressure-chart" 
             className="img-fluid"/>                      
                         
    </Col>
</Row>
);

}

export default BPImage;