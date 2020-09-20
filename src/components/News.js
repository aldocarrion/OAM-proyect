import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../contexts/context";

class News extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { news } = value;
          return (
            <div className="row rounded-3 m-2">
              {news.map((item) => (
                <div className="col-md-6" key={item.key}>
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column">
                      <strong className="d-inline-block mb-2 text-primary">
                        {item.tag}
                      </strong>
                      <h3 className="mb-0">{item.title}</h3>
                      <div className="mb-1 text-muted">
                        {item.key.toString()}
                      </div>
                      <p className="card-text mb-auto">
                        {item.body} Fecha:{item.date}
                      </p>
                      <Link className="nav-item" to={`/article/${item.key}`}>
                        Continuar leyendo...
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default News;
