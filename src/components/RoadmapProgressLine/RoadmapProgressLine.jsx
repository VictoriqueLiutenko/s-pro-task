import React from "react";
import "./RoadmapProgressLine.scss";

export function RoadmapProgressLine(props) {
  let ClassName = "";
  if (props.goal.status === "finished") {
    ClassName = "RoadmapProgressLine_finished";
  } else if (props.goal.status === "current") {
    ClassName = "RoadmapProgressLine_current";
  } else {
    ClassName = "RoadmapProgressLine";
  }
  return (
    <div className={ClassName}>
      <div className="RoadmapProgressLine-Circle" />
      <div className="RoadmapProgressLine-Line" />
    </div>
  );
}
