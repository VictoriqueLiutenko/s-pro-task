import React from "react";
import "./Button.scss";

export function Button(props) {
  return (
    <a
      href="#"
      className="Button"
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
          className="Button-Icon"
        />
      ) : (
        <span />
      )}
      <span className="ButtonText">{props.text}</span>
    </a>
  );
}
