import React, { useState, useEffect }  from "react";
import Col from "../../components/Col";
import API from "../../utils/BP";
import { Input, FormBtn } from "../../components/Form";
// import "./style.css";

function SearchForm() {
  const [BP, setBP] = useState([])
  const [formObject, setFormObject] = useState({})


  useEffect(() => {
    loadBP()
  }, [])

  function loadBP() {
    API.getBPData()
      .then(res => 
        setBP(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.systolic && formObject.diastolic) {
      API.saveBP({
        Systolic: formObject.systolic,
        Diastolic: formObject.diastolic,
      })
        .then(res => loadBP())
        .catch(err => alert(err));
        alert("Systolic & Diastolic Saved!")
    }
    window.location.reload();
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  return (
    <Col size="md-6" id="emptycol" >                                     
      <p>Kno pressure?! Let's find out where your numbers are today</p> 
      <form>
         <p>What are your numbers today? Let's find out if its normal</p>
           <label id="systolic-label">Systolic/top number</label>
              <Input
                onChange={handleInputChange}
                name="systolic"
                placeholder="Systolic (required)"
              /> 
              <br></br>
           <label id="diastolic-label" for="Diastolic">Diastolic/bottom number</label>
              <Input
                onChange={handleInputChange}
                name="diastolic"
                placeholder="Diastolic (required)"
              />
              <FormBtn
                disabled={!(formObject.systolic && formObject.diastolic)}
                onClick={handleFormSubmit}
              >
                Submit 
              </FormBtn>
      </form>
    </Col>
  );
}

export default SearchForm;