import React from "react";
import "./RoadmapTitle.scss";
import { Parallelogram } from "../Parallelogram/Parallelogram";
import { Title } from "../Title/Title";

export const RoadmapTitle = () => (
  <div className="roadmapTitle">
    <h1 className="roadmapTitle_backgroundText">Roadmap</h1>
    <div className="roadmapTitle_parallelogram">
      <Parallelogram
        height="37px"
        width="82px"
        background="rgba(54, 158, 207, 0.9)"
      />
    </div>
    <div className="roadmapTitle_headerText">
      <Title text="Party Jokes Startling But Unnecessary" />
    </div>
  </div>
);
