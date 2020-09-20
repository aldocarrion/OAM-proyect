import React, { Component } from "react";
import { Consumer } from "../contexts/context";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { LogoSolo } = this.props;
    return (
      <Consumer>
        {(value) => {
          const { items } = value;
          return (
            <footer
              className="footer mt-4 py-3 rounded-top "
              // style={{ backgroundColor: "#f19321" }}
              style={{ backgroundColor: "#EAE2B7" }}
            >
              <img src={LogoSolo} className="" alt="Logo" />

              <ul className="nav justify-content-center">
                {items.map((item) => (
                  <li className="nav-item mx-auto" key={item.key} href="/">
                    <Link className="nav-item" to={item.headlink}>
                      {item.head}
                    </Link>
                  </li>
                ))}
              </ul>
            </footer>
          );
        }}
      </Consumer>
    );
  }
}

export default Footer;
