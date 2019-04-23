import React from "react";
import "./SliderCustomArrows.scss";
import { Parallelogram } from "../Parallelogram/Parallelogram";

export function SliderCustomArrows(props) {
  const { onClickPrev, onClickNext } = props;
  return (
    <div className="SliderCustomArrows-ArrowWrapper">
      <div
        className="SliderCustomArrows-Arrow SliderCustomArrows-ArrowPrev"
        onClick={onClickPrev}
      >
        <Parallelogram
          height="48px"
          width="80px"
          background="rgb(4, 16, 49)"
          transform="skew(45deg)"
        />
        <span>←</span>
      </div>
      <div className="SliderCustomArrows-SlidesCount">
        {props.slideIndex + 1} <span>OF {props.slidesCount}</span>
      </div>
      <div
        className="SliderCustomArrows-Arrow SliderCustomArrows-ArrowNext"
        onClick={onClickNext}
      >
        <Parallelogram
          height="48px"
          width="80px"
          background="rgb(54, 158, 207)"
          transform="skew(45deg)"
        />
        <span>→</span>
      </div>
    </div>
  );
}
