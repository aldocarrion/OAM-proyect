import React, { Component } from "react";
import News from "./News";
import Carousel from "./Carousel";
import Profiles from "./user/profileUser";



class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <br />
        <br/><br/>
        <h3 className="text-center mb-3">Noticias</h3>

        <News />
        <br/><br/>
        <Profiles />
      </div>
    );
  }
}

export default Home;
