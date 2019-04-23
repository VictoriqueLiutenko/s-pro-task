import React from "react";
import { RoadmapGoal } from "../RoadmapGoal/RoadmapGoal";
import { RoadmapProgressLine } from "../RoadmapProgressLine/RoadmapProgressLine";
import { RoadmapTitle } from "../RoadmapTitle/RoadmapTitle";
import { RoadmapMainGoal } from "../RoadmapMainGoal/RoadmapMainGoal";
import "./Roadmap.scss";

const roadmapInformation = [
  {
    number: "S1",
    year: 2018,
    list: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut enim ad minim veniam"
    ],
    status: "finished"
  },
  {
    number: "S2",
    year: 2018,
    list: [
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut enim ad minim veniam"
    ],
    status: "current"
  },
  {
    number: "S3",
    year: 2018,
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "Ut enim ad minim veniam, quis nostrud exercitation"
    ],
    status: "future"
  },
  {
    number: "S1",
    year: 2019,
    list: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut enim ad minim veniam"
    ],
    status: "future"
  },
  {
    number: "S2",
    year: 2019,
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    status: "future"
  },
  {
    number: "S3",
    year: 2019,
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    status: "future"
  },
  {
    number: "S4",
    year: 2019,
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Ut enim ad minim veniam, quis nostrud exercitation"
    ],
    status: "future"
  }
];

export function Roadmap(props) {
  return (
    <div className="Roadmap">
      <RoadmapTitle />
      <div className="Roadmap-TreeWrapper">
        {roadmapInformation.map((goal, goalKey) =>
          goalKey % 2 === 0 ? (
            <div
              key={goalKey}
              className="Roadmap-ItemWrapper Roadmap-ItemWrapper_even"
            >
              <RoadmapGoal goal={goal} />
              <div className="Roadmap-ConnectingLine" />
              <RoadmapProgressLine goal={goal} />
            </div>
          ) : (
            <div
              key={goalKey}
              className="Roadmap-ItemWrapper Roadmap-ItemWrapper_odd"
            >
              <RoadmapProgressLine goal={goal} />
              <div className="Roadmap-ConnectingLine" />
              <RoadmapGoal goal={goal} />
            </div>
          )
        )}
      </div>
      <RoadmapMainGoal />
    </div>
  );
}
