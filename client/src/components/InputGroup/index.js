import React from "react";

function InputGroup({ id, labelText, ...inputProps }) {
  return (
    <>
      <input id={id} {...inputProps} />
    </>
  );
}

export default InputGroup;
