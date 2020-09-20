import React, { Component } from "react";
import News from "./News";
import Carousel from "./Carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <News />
      </div>
    );
  }
}

export default Home;
