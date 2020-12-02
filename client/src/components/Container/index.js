import React from "react";


function Container(props) {
  return <div className="container-body padding" style={props.style}>{props.children}</div>;
}

export default Container;
