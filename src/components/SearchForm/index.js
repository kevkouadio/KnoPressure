import React from "react";
import Col from "../../components/Col";
import "./style.css";

function SearchForm() {
return (
  <Col size="md-6" id="emptycol" >                                      
  <p>Kno pressure?! Let's find out where your numbers are today</p> 
<form>
<p>What are your numbers today? Let's find out if its normal</p>
<label id="systolic-label" for="bp-systolic">Systolic/top number</label>
<input type="text"></input>
<br></br>
<label id="diastolic-label" for="bp-systolic">Diastolic/bottom number</label>
<input type="text"></input>
<button>Submit</button>

</form>
</Col>
);


}

export default SearchForm;