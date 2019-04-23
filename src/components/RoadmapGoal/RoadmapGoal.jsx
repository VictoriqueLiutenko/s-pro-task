import React from "react";
import "./RoadmapGoal.scss";

export function RoadmapGoal(props) {
  let ClassName = "";
  if (props.goal.status === "finished") {
    ClassName = "Goal_finished";
  } else if (props.goal.status === "current") {
    ClassName = "Goal_current";
  } else {
    ClassName = "Goal";
  }
  return (
    <div className={ClassName}>
      <h3 className="Goal-Title">
        {props.goal.number} {props.goal.year}
      </h3>
      <ul className="Goal-List">
        {props.goal.list.map((listItem, listItemKey) => (
          <li className="Goal-ListItem" key={listItemKey}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
