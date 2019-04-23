import React from "react";
import "./Timer.scss";
import { Title } from "../Title/Title";

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { now: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { now } = this.state;
      const { toDate } = this.props;
      const delta = toDate - now;

      if (delta <= 1000) {
        clearInterval(this.intervalId);
      } else {
        this.setState({ now: new Date() });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { now } = this.state;
    const { toDate } = this.props;
    const delta = toDate - now;

    const deltaDetailed = {
      days: Math.floor((delta / 1000 / 60 / 60 / 24) % 30),
      hours: Math.floor((delta / 1000 / 60 / 60) % 24),
      minutes: Math.floor((delta / 1000 / 60) % 60),
      seconds: Math.floor((delta / 1000) % 60),
      asDays: Math.floor(delta / 1000 / 60 / 60 / 24)
    };

    return (
      <div className="Timer">
        <Title text="Title block" fontSize="2vw" />
        <time
          className="TimerDisplay"
          dateTime={`P${deltaDetailed.asDays}DT${deltaDetailed.hours}H${
            deltaDetailed.minutes
          }M${deltaDetailed.seconds}S`}
        >
          <div className="TimerDisplay-Days">
            <span className="TimerDisplay-Name">days</span>
            <span className="TimerDisplay-Number">
              {String(deltaDetailed.days).padStart(2, 0)}
            </span>
          </div>
          <div className="TimerDisplay-Hours">
            <span className="TimerDisplay-Name">hours</span>
            <span className="TimerDisplay-Number">
              {String(deltaDetailed.hours).padStart(2, 0)}
            </span>
          </div>
          <div className="TimerDisplay-Minutes">
            <span className="TimerDisplay-Name">minutes</span>
            <span className="TimerDisplay-Number">
              {String(deltaDetailed.minutes).padStart(2, 0)}
            </span>
          </div>
          <div className="TimerDisplay-Seconds">
            <span className="TimerDisplay-Name">seconds</span>
            <span className="TimerDisplay-Number">
              {String(deltaDetailed.seconds).padStart(2, 0)}
            </span>
          </div>
        </time>
      </div>
    );
  }
}
