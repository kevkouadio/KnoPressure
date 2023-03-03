import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import API from "../../utils/BP";
import "./style.css"

function Table() {
    const [BP, setBP] = useState([])

    //add new bp data on table
    function formatDate(date) {
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        const hour = date.getHours();
        let minute = date.getMinutes();
        minute = minute < 10 ? `0${minute}` : minute;
        const meridiem = hour >= 12 ? "PM" : "AM";
        const hour12 = hour % 12 || 12;
        return `${month} ${day}, ${year}, ${hour12}:${minute} ${meridiem}`;
      }      

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
                setBP(res.data.reverse().map(bpData => {
                    const dateObj = new Date(bpData.date);
                    const formattedDate = formatDate(dateObj);
                    return { ...bpData, date: formattedDate };
                }))
            )
            .catch(err => console.log(err));
    };


    const columns = [
        { title: "Systolic", field: "Systolic" },
        { title: "Diastolic", field: "Diastolic" },
        {
            title: "Date",
            field: "date",
            //component to select the date and time in the table 
            editComponent: ({ value, onChange }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={value}
                        onChange={(newValue) => {
                            //console.log(newValue);
                            sessionStorage.setItem('selectedDate', JSON.stringify(newValue)); // save newValue in session storage
                            onChange(newValue); // pass the new value to the parent component
                        }}
                        format="MM/dd/yyyy hh:mm a"
                        KeyboardButtonProps={{
                            "aria-label": "change time"
                        }}
                    />
                </MuiPickersUtilsProvider>
            ),
        },
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
                onRowAdd: (newData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const storedDate = sessionStorage.getItem('selectedDate'); // get the saved date from session storage
                            if (storedDate) {
                                newData.date = formatDate(new Date(JSON.parse(storedDate))); // set newData.date to the saved date
                                sessionStorage.removeItem('selectedDate'); // delete the saved date from session storage
                            }
                            addBPData(newData);
                            console.log(newData.date);
                            resolve();
                        }, 1000);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const storedDate = sessionStorage.getItem('selectedDate'); // get the saved date from session storage
                            if (storedDate) {
                                newData.date = new Date(JSON.parse(storedDate)); // set newData.date to the saved date
                                sessionStorage.removeItem('selectedDate'); // delete the saved date from session storage
                            }
                            const bpId = oldData._id;
                            updateBPData(bpId, newData);
                            resolve();
                        }, 1000);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const Id = oldData._id;
                            DeleteBPData(Id);
                            resolve();
                        }, 1000);
                    }),
            }}


        />
    )
}

export default Table;