import React from "react";
import "./RoadmapTitle.scss";
import { Parallelogram } from "../Parallelogram/Parallelogram";
import { Title } from "../Title/Title";

export function RoadmapTitle(props) {
  return (
    <div className="RoadmapTitle">
      <h1 className="RoadmapTitle-BackgroundText">Roadmap</h1>
      <div className="RoadmapTitle-Parallelogram">
        <Parallelogram
          height="37px"
          width="82px"
          background="rgba(54, 158, 207, 0.9)"
        />
      </div>
      <div className="RoadmapTitle-HeaderText">
        <Title text="Party Jokes Startling But Unnecessary" />
      </div>
    </div>
  );
}
