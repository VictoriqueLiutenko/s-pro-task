import React from "react";
import { RoadmapGoal } from "../RoadmapGoal/RoadmapGoal";
import { RoadmapProgressLine } from "../RoadmapProgressLine/RoadmapProgressLine";
import { RoadmapTitle } from "../RoadmapTitle/RoadmapTitle";
import { RoadmapMainGoal } from "../RoadmapMainGoal/RoadmapMainGoal";
import { roadmapInformation } from "../../config/data_config";
import "./Roadmap.scss";

export const Roadmap = () => (
  <div className="roadmap">
    <RoadmapTitle />
    <div className="roadmap_treeWrapper">
      {roadmapInformation.map((goal, goalKey) =>
        goalKey % 2 === 0 ? (
          <div
            key={goalKey}
            className="roadmap_itemWrapper roadmap_itemWrapper--even"
          >
            <RoadmapGoal goal={goal} />
            <div className="roadmap_connectingLine" />
            <RoadmapProgressLine goal={goal} />
          </div>
        ) : (
          <div
            key={goalKey}
            className="roadmap_itemWrapper roadmap_itemWrapper--odd"
          >
            <RoadmapProgressLine goal={goal} />
            <div className="roadmap_connectingLine" />
            <RoadmapGoal goal={goal} />
          </div>
        )
      )}
    </div>
    <RoadmapMainGoal />
  </div>
);
