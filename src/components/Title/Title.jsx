import React from "react";
import "./Title.scss";

export function Title(props) {
  return (
    <h2
      className="Title"
      style={props.fontSize ? { fontSize: `${props.fontSize}` } : {}}
    >
      {props.text}
    </h2>
  );
}
