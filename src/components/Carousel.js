import React, { Component } from "react";
import { Consumer } from "../contexts/context";

import background from "../img/background-00.jpg";
import background2 from "../img/background-01.jpg";

function isPosition(value) {
  if (value === 1) {
    return "carousel-item text-left active";
  } else if (value === 2) {
    return "carousel-item";
  } else if (value === 3) {
    return "carousel-item text-right";
  } else {
    return null;
  }
}

function isBackground(value) {
  if (value === 1) {
    return background;
  } else {
    return background2;
  }
}

function isPositionText(value) {
  if (value === 1) {
    return "carousel-caption text-left";
  } else if (value === 2) {
    return "carousel-caption";
  } else if (value === 3) {
    return "carousel-caption text-right";
  } else {
    return null;
  }
}

class Carousel extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { carousel } = value;
          return (
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="1"
                  className=""
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="2"
                  className=""
                ></li>
              </ol>

              <div className="carousel-inner">
                {carousel.map((item) => (
                  <div className={isPosition(item.key)} key={item.key}>
                    <img
                      className="d-block w-100"
                      src={isBackground(item.key)}
                      alt="First slide"
                    ></img>
                    <div className="container">
                      <div className={isPositionText(item.key)}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <p>
                          <a
                            className="btn btn-lg btn-primary"
                            href={item.url}
                            role="button"
                          >
                            {item.btn}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Carousel;
