import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  //Component
  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/9gs9-zhxw.json?$$app_token=vPPT8zahqHN2TohMNpmqqsiYQ"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>HighScoir</h1>
        <div className="grid">
          {console.log(this)}
          {this.state.data.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
