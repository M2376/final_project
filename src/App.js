import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
