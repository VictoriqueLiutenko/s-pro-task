import React, { Component } from "react";
import Slider from "react-slick";
import "./CitationSlider.scss";
import "../../assets/helpers/SlickSliderCrutch.scss";
import { SliderCustomArrows } from "../SliderCustomArrows/SliderCustomArrows";
import { quoter } from "../../config/data_config";

export default class CitationSlider extends Component {
  state = { slideIndex: 0 };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: true,
      arrows: false
    };
    return (
      <section>
        <SliderCustomArrows
          onClickPrev={() => this.slider.slickPrev()}
          onClickNext={() => this.slider.slickNext()}
          slideIndex={this.state.slideIndex}
          slidesCount={quoter.length}
        />
        <Slider
          ref={slider => (this.slider = slider)}
          {...settings}
          className="citationSlider"
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {quoter.map((quote, quoteKey) => (
            <div key={quoteKey} className="citationSlider_slide">
              <div className="citationSlider_citation">{quote.citation}</div>
              <div className="citationSlider_personInfoWrapper">
                <div className="citationSlider_logo" />
                <div>
                  <div className="citationSlider_name">{quote.name}</div>
                  <div className="citationSlider_position">
                    {quote.position}
                  </div>
                  <div className="citationSlider_company">{quote.company}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}
