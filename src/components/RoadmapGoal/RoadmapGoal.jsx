import React from "react";
import "./RoadmapGoal.scss";

export function RoadmapGoal(props) {
  let ClassName = "";
  if (props.goal.status === "finished") {
    ClassName = "goal--finished";
  } else if (props.goal.status === "current") {
    ClassName = "goal--current";
  } else {
    ClassName = "goal";
  }
  return (
    <div className={ClassName}>
      <h3 className="goal_title">
        {props.goal.number} {props.goal.year}
      </h3>
      <ul className="goal_list">
        {props.goal.list.map((listItem, listItemKey) => (
          <li className="goal_listItem" key={listItemKey}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
