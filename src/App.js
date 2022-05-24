import React from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Product from "./Components/Data";
//import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  //Component
  componentDidMount = () => {
    fetch("https://data.cityofnewyork.us/resource/9gs9-zhxw.json?$limit=20")
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
        <Carousel />
        <div className="grid">
          {console.log(this)}
          {this.state.data.map((data) => (
            <Card data={data} />
          ))}
        </div>
        <div id="Data" style={{ height: 500 }}>
          <h1>Data visiualization</h1>
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
