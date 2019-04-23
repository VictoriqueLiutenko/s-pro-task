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
      <div className="timer">
        <Title text="Title block" fontSize="2vw" />
        <time
          className="timerDisplay"
          dateTime={`P${deltaDetailed.asDays}DT${deltaDetailed.hours}H${
            deltaDetailed.minutes
          }M${deltaDetailed.seconds}S`}
        >
          <div className="timerDisplay_days">
            <span className="timerDisplay_name">days</span>
            <span className="timerDisplay_number">
              {String(deltaDetailed.days).padStart(2, 0)}
            </span>
          </div>
          <div className="timerDisplay_hours">
            <span className="timerDisplay_name">hours</span>
            <span className="timerDisplay_number">
              {String(deltaDetailed.hours).padStart(2, 0)}
            </span>
          </div>
          <div className="timerDisplay_minutes">
            <span className="timerDisplay_name">minutes</span>
            <span className="timerDisplay_number">
              {String(deltaDetailed.minutes).padStart(2, 0)}
            </span>
          </div>
          <div className="timerDisplay_seconds">
            <span className="timerDisplay_name">seconds</span>
            <span className="timerDisplay_number">
              {String(deltaDetailed.seconds).padStart(2, 0)}
            </span>
          </div>
        </time>
      </div>
    );
  }
}
