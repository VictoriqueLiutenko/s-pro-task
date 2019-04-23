import React from "react";
import "./Citations.scss";
import CitationSlider from "../CitationSlider/CitationSlider";
import { Parallelogram } from "../Parallelogram/Parallelogram";

export function Citations(props) {
  return (
    <section className="Citations">
      <div className="Citations-Slider">
        <div className="Citations-SliderBg">
          <div className="Citations-Quotes" />
          <CitationSlider />
        </div>
      </div>
      <div className="Citations-Parallelogram">
        <Parallelogram
          height="390px"
          width="1000px"
          background="rgb(242, 243, 245)"
          transform="skew(45deg)"
        />
      </div>
    </section>
  );
}
