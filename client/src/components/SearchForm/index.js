import React, { useState, useEffect } from "react";
import Col from "../../components/Col";
import API from "../../utils/BP";
import { Input, FormBtn } from "../../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../Form/Form";
import Row from "../Row";
// import "./style.css";

function SearchForm() {
  const [BP, setBP] = useState([])
  const [formObject, setFormObject] = useState({})
  const [sevenDayAverage, setSevenDayAverage] = useState({ systolic: 0, diastolic: 0 });
  const [monthAverage, setMonthAverage] = useState({ systolic: 0, diastolic: 0 });

  const notify = () => toast.success("Systolic and Diastolic values saved!", {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyE = () => toast.error("Incorrect Systolic and/or Diastolic values!", {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    loadBP()
  }, [])

  function loadBP() {
    API.getBPData()
      .then(res => {
        setBP(res.data);
        setSevenDayAverage(getSevenDayAverage(res.data));
        setMonthAverage(getMonthlyAverage(res.data))
      })
      .catch(err => console.log(err));
  };
  //function to get the 7 day average 
  function getSevenDayAverage(bpData) {
    const today = new Date();
    let systolicTotal = 0;
    let diastolicTotal = 0;
    let systolicCount = 0;
    let diastolicCount = 0;

    // Loop through the BP data array and add up the values for the last 7 days
    for (let i = 0; i < bpData.length; i++) {
      const bpDate = new Date(bpData[i].date);
      const timeDiff = Math.abs(today.getTime() - bpDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays <= 7) {
        systolicTotal += bpData[i].Systolic;
        diastolicTotal += bpData[i].Diastolic;
        systolicCount++;
        diastolicCount++;
      }
    }

    // Calculate the average values for each type of pressure
    const systolicAverage = systolicCount > 0 ? Math.round(systolicTotal / systolicCount) : 0;
    const diastolicAverage = diastolicCount > 0 ? Math.round(diastolicTotal / diastolicCount) : 0;

    // Return the average values as a new object
    return { systolic: systolicAverage, diastolic: diastolicAverage };
  }

  //function to get monthly average
  function getMonthlyAverage(readings) {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const monthlyReadings = readings.filter(reading => {
      const readingDate = new Date(reading.date);
      return readingDate >= firstDayOfMonth && readingDate <= lastDayOfMonth;
    });

    const monthlyAverage = monthlyReadings.reduce((acc, reading) => {
      acc.systolic += reading.Systolic;
      acc.diastolic += reading.Diastolic;
      return acc;
    }, { systolic: 0, diastolic: 0 });

    if (monthlyReadings.length > 0) {
      monthlyAverage.systolic = Math.round(monthlyAverage.systolic / monthlyReadings.length);
      monthlyAverage.diastolic = Math.round(monthlyAverage.diastolic / monthlyReadings.length);
    }

    return monthlyAverage;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.systolic.trim() !== '' && formObject.diastolic.trim() !== '') {
      API.saveBP({
        Systolic: formObject.systolic,
        Diastolic: formObject.diastolic,
      })
        .then(res => loadBP())
        .then(notify)
        .catch(err => notifyE(err))
    } else if (formObject.systolic.trim() === '' && formObject.diastolic.trim() === '') {
      notifyE();
    }
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  //set background color of average according to bp standard reading
  function getBackgroundColor(systolic) {
    if (systolic === 0) {
      return 'plum';
    } else if (systolic < 120) {
      return 'green';
    } else if (systolic >= 120 && systolic <= 129) {
      return 'yellow';
    } else if (systolic >= 130 && systolic <= 139) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  
  const sevenDaybackgroundColor = getBackgroundColor(sevenDayAverage.systolic);
  const monthBackgroundColor = getBackgroundColor(monthAverage.systolic);

  return (
    <Col size="md-6" id="emptycol" >
      <p>Kno pressure?! Let's find out where your numbers are today</p>
      <Form>
        <p>What are your numbers today? Let's find out if its normal</p>
        <Row>
          <div className="col-sm-4">
            <Input
              onChange={handleInputChange}
              name="systolic"
              placeholder="Systolic (required)"
            />
            <label id="systolic-label">Systolic/top number</label>
          </div>
          <div className="col-sm-4">
            <Input
              onChange={handleInputChange}
              name="diastolic"
              placeholder="Diastolic (required)"
            />
            <label id="diastolic-label" for="Diastolic">Diastolic/bottom number</label>
          </div>
        </Row>
        <FormBtn
          disabled={!(formObject.systolic && formObject.diastolic)}
          onClick={handleFormSubmit}
        >
          Submit
        </FormBtn>
        <div className="card" style={{ backgroundColor: sevenDaybackgroundColor, color: 'white',textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black", marginLeft: "29%", marginRight: "29%", padding: "15px" }}>
          {sevenDayAverage.systolic && sevenDayAverage.diastolic ? (
            <h6> Your 7 Day Average: {sevenDayAverage.systolic} / {sevenDayAverage.diastolic} mmHg</h6>
          ) : (<h6> No data available. Please add readings to see 7 day averages.</h6>
          )}
        </div>
        <br />
        <div className="card" style={{ backgroundColor: monthBackgroundColor, color: 'white', textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black", marginLeft: "29%", marginRight: "29%", padding: "15px" }}>
          {monthAverage.systolic && monthAverage.diastolic ? (
            <h6> Your Monthly average: {monthAverage.systolic} / {monthAverage.diastolic} mmHg</h6>
          ) : (
            <h6> No data available. Please add readings to see monthly averages.</h6>
          )}
        </div>
        <ToastContainer />
      </Form>
    </Col>
  );
}

export default SearchForm;