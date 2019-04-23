import React from "react";
import "./Background.scss";
import { Title } from "../Title/Title";
import { Parallelogram } from "../Parallelogram/Parallelogram";
import { Button } from "../Button/Button";
import { Timer } from "../Timer/Timer";
import cloudIconViolet from "../../assets/images/cloudIcon-violet.svg";
import cloudIconWhite from "../../assets/images/cloudIcon-white.svg";
import playIcon from "../../assets/images/playIcon.svg";

export function Background(props) {
  return (
    <section className="Background">
      <div className="Background-TitleParallelogram">
        <Parallelogram
          height="53px"
          width="112px"
          background="rgba(54, 158, 207, 0.7)"
        />
      </div>
      <div className="Background-Title">
        <Title fontSize="3.3vw" text="Virginia Travel For Kids" />
      </div>
      <div className="Background-Buttons">
        <Button
          icon={cloudIconViolet}
          color="rgb(65, 50, 129)"
          background="rgb(255, 255, 255)"
          width="155px"
          borderColor="rgb(255, 255, 255)"
          marginRight="20px"
          text="Button text"
        />
        <Button
          icon={cloudIconWhite}
          color="rgb(255, 255, 255)"
          background="transparent"
          width="180px"
          borderColor="rgb(255, 255, 255)"
          marginRight="20px"
          text="Button text"
        />
        <Button
          icon={playIcon}
          color="rgb(255, 255, 255)"
          background="transparent"
          width="155px"
          borderColor="rgb(255, 255, 255)"
          marginRight="20px"
          text="Watch video"
        />
      </div>
      <div className="Background-Parallelogram">
        <Parallelogram
          height="200px"
          width="700px"
          background="rgb(54, 158, 207)"
        />
        <Timer toDate={new Date("2019-05-10 12:00:00")} />
      </div>
    </section>
  );
}
