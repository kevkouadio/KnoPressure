import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { alpha } from '@material-ui/core/styles';
import API from "../../utils/BP";
import "./style.css"

function Table() {

    const [BP, setBP] = useState([])

    //add new bp data on table
    function addBPData(newBPData) {
        API.saveBP(newBPData)
            .then(res => {
                loadBP()
            })
            .catch(err => console.log(err));
    }
    //delete a bp data on table
    function DeleteBPData(bpId) {
        API.deleteBP(bpId)
            .then(res => {
                loadBP()
            })
            .catch(err => console.log(err));
    }
    //update a bp data on table
    function updateBPData(bpId, newData) {
        API.updateBP(bpId, newData)
            .then(res => {
                loadBP()
            })
            .catch(err => console.log(err));
    }
  
    useEffect(() => {
        loadBP()
    }, [])

    function loadBP() {
        API.getBPData()
            .then(res =>
                //special code to format the date Month, DD, yyyy, time
                setBP(res.data.map(bpData => {
                    const dateObj = new Date(bpData.date);
                    const month = dateObj.toLocaleString('default', { month: 'short' });
                    const day = dateObj.getDate();
                    const year = dateObj.getFullYear();
                    const hour = dateObj.getHours();
                    const minute = dateObj.getMinutes();
                    const meridiem = hour >= 12 ? "PM" : "AM";
                    const hour12 = hour % 12 || 12;
                    const formattedDate = `${month} ${day}, ${year}, ${hour12}:${minute} ${meridiem}`;
                    return { ...bpData, date: formattedDate };
                }))
            )
            .catch(err => console.log(err));
    };
    

    const columns = [
        { title: "Systolic", field: "Systolic" },
        { title: "Diastolic", field: "Diastolic" },
        { title: "Date", field: "date" },
    ];

    return (
        <MaterialTable
            title="Your blood pressure readings"
            columns={columns}
            data={BP}
            options={{
                actionsColumnIndex: -1,
                rowStyle: {
                    backgroundColor: 'plum',
                    color: 'white',
                  }
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            addBPData(newData)
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const bpId = oldData._id;
                            updateBPData(bpId, newData);
                            resolve();
                            console.log(newData)
                        }, 1000);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const Id = oldData._id
                            DeleteBPData(Id)
                            resolve()
                        }, 1000)
                    }),
            }}

        />
    )
}

export default Table;