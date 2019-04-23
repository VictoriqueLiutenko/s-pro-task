import React, { Component } from "react";
import { Roadmap } from "./components/Roadmap/Roadmap";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Background } from "./components/Background/Background";
import "./App.css";
import { Citations } from "./components/Citations/Citations";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Background />
        <Citations />
        <Roadmap />
        <Footer />
      </div>
    );
  }
}

export default App;
