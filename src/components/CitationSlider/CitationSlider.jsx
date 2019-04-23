import React, { Component } from "react";
import Slider from "react-slick";
import "./CitationSlider.scss";
import "../../assets/helpers/SlickSliderCrutch.scss";
import { SliderCustomArrows } from "../SliderCustomArrows/SliderCustomArrows";

const quoter = [
  {
    citation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Roy Rivera",
    position: "FrontEnd Developer",
    company: "S-PRO"
  },
  {
    citation:
      "Uspendisse velit nibh, interdum in neque a, ullamcorper malesuada dui. Duis pharetra suscipit mauris, eu fringilla erat iaculis ac. Aliquam magna eros, suscipit eget urna in, fermentum tristique eros.",
    name: "Jon Snow",
    position: "FrontEnd Developer",
    company: "S-PRO"
  },
  {
    citation:
      "Nunc faucibus pellentesque rutrum. Suspendisse purus nibh, vulputate non mollis in, malesuada non leo. Pellentesque blandit rutrum accumsan. Suspendisse eget nulla sit amet dolor luctus imperdiet.",
    name: "Tom Clancy",
    position: "FrontEnd Developer",
    company: "S-PRO"
  }
];

export default class CitationSlider extends Component {
  state = { slideIndex: 0 };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      //autoplay: true,
      //centerMode: true,
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
          className="CitationSlider"
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {quoter.map((quote, quoteKey) => (
            <div key={quoteKey} className="CitationSlider-Slide">
              <div className="CitationSlider-Citation">{quote.citation}</div>
              <div className="CitationSlider-PersonInfoWrapper">
                <div className="CitationSlider-Logo" />
                <div>
                  <div className="CitationSlider-Name">{quote.name}</div>
                  <div className="CitationSlider-Position">
                    {quote.position}
                  </div>
                  <div className="CitationSlider-Company">{quote.company}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}
