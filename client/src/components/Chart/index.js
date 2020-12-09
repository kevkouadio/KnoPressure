import React, { useState, useEffect } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import API from "../../utils/BP";

function Chart() {
  const [BP, setBP] = useState([])
  
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
  
  let bp = BP;
  let systolicData = [];
  bp.map(sd => { 
    systolicData.push([sd.date, sd.Systolic])
  });
  let diastolicData = [];
  bp.map(sd => { 
    diastolicData.push([sd.date, sd.Diastolic])
  });
  
  const myData = {
    type: 'line',
    labels: [
    { //Scale to indicate value of normal bp rate 
      text: 'Systolic/Normal',
      hook: 'scale:name=scale-y,index=6',
      backgroundColor: '#4caf50'
    }, 
    { 
      text: 'Systolic/High BP',
      hook: 'scale:name=scale-y,index=7',
      backgroundColor: 'red'
    }, 
    { 
      text: 'Diastolic/High BP',
      hook: 'scale:name=scale-y,index=5',
      backgroundColor: 'red'
    },
    {
      text: 'Diastolic/Normal',
      hook: 'scale:name=scale-y,index=4',
      backgroundColor: '#4caf50'
    }
  ],
  scaleY: {
    label: {
      text: "Systolic & Disatolic values"
    },
  },
  scaleX: {
    label: {
      text: "Date & time"
    }
  },
    series: [
      { values: diastolicData, lineColor: 'red'},
      { values: systolicData, lineColor: 'blue'}
    ]
  };
  
    return (
      <div>
        <ZingChart data={myData}></ZingChart>
      </div>
    );
  }
  

export default Chart;
