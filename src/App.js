import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Scoir For High School</h1>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
