import React from "react";
import "./Title.scss";

export const Title = props => (
  <h2
    className="title"
    style={props.fontSize ? { fontSize: `${props.fontSize}` } : {}}
  >
    {props.text}
  </h2>
);
