import React, { Component } from "react";
import "./Textarea.css";
function Textarea(props) {
  return (
    <div>
      <textarea onChange={props.onChange} />
    </div>
  );
}

export default Textarea;
