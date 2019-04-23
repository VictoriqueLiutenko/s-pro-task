import React from "react";
import "./Button.scss";

export const Button = props => (
  <a
    href="#"
    className="button"
    style={{
      backgroundColor: `${props.background}`,
      width: `${props.width}`,
      color: `${props.color}`,
      borderColor: `${props.borderColor}`,
      marginRight: `${props.marginRight}`
    }}
  >
    {props.icon ? (
      <span
        style={{ backgroundImage: `url(${props.icon})` }}
        className="button_icon"
      />
    ) : (
      <span />
    )}
    <span className="button_text">{props.text}</span>
  </a>
);
