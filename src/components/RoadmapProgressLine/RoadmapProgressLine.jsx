import React from "react";
import "./RoadmapProgressLine.scss";

export function RoadmapProgressLine(props) {
  let ClassName = "";
  if (props.goal.status === "finished") {
    ClassName = "roadmapProgressLine--finished";
  } else if (props.goal.status === "current") {
    ClassName = "roadmapProgressLine--current";
  } else {
    ClassName = "roadmapProgressLine";
  }
  return (
    <div className={ClassName}>
      <div className="roadmapProgressLine_circle" />
      <div className="roadmapProgressLine_line" />
    </div>
  );
}
