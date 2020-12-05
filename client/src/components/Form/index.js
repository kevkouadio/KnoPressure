import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10, marginTop: 15 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function Form(props) {
    return <form className="LoginForm" {...props} />;
}

export function InputGroup({ id, labelText, ...inputProps }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...inputProps} />
    </>
  );
}

