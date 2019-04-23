import React from "react";
import "./Parallelogram.scss";

export function Parallelogram(props) {
  return (
    <div
      style={
        props.transform
          ? {
              backgroundColor: `${props.background}`,
              height: `${props.height}`,
              width: `${props.width}`,
              transform: `${props.transform}`
            }
          : {
              backgroundColor: `${props.background}`,
              height: `${props.height}`,
              width: `${props.width}`
            }
      }
      className="Parallelogram"
    />
  );
}
