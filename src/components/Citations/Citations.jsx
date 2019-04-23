import React from "react";
import "./Citations.scss";
import CitationSlider from "../CitationSlider/CitationSlider";
import { Parallelogram } from "../Parallelogram/Parallelogram";

export const Citations = () => (
  <section className="citations">
    <div className="citations_slider">
      <div className="citations_sliderBg">
        <div className="citations_quotes" />
        <CitationSlider />
      </div>
    </div>
    <div className="citations_parallelogram">
      <Parallelogram
        height="390px"
        width="1000px"
        background="rgb(242, 243, 245)"
        transform="skew(45deg)"
      />
    </div>
  </section>
);
