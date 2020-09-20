import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../contexts/context";

class Item extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { items } = value;
          return (
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mr-auto">
                {items.map((item) => (
                  <li
                    className="nav-item dropdown mx-auto"
                    key={item.key.toString()}
                  >
                    {item.item1 ? (
                      <div>
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          id="navbarDropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {item.head}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          {item.item1 ? (
                            <Link to={item.item1link}>
                              <span className="dropdown-item" href="/">
                                {item.item1}
                              </span>
                            </Link>
                          ) : null}
                          {item.item2 ? (
                            <Link to={item.item2link}>
                              <span className="dropdown-item" href="/">
                                {item.item2}
                              </span>
                            </Link>
                          ) : null}
                          {item.item3 ? (
                            <Link to={item.item3link}>
                              <span className="dropdown-item" href="/">
                                {item.item3}
                              </span>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      <Link to={item.headlink}>
                        <span
                          className="nav-link item"
                          href="/"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {item.head}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Item;
