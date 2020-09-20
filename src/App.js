import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/pages/About";
import ExternalLink from "./components/ExternalLink";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articletest from "./components/NewsArticle";
import Article from "./components/pages/Article";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/Footer";
import LogoSolo from "./img/Logo_FULL.svg.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./contexts/context";

import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <div className=" p-4 p-md-5 text-black rounded">
            <ExternalLink></ExternalLink>
            <Header branding="Gold Anda Chile" image={LogoSolo} />
            <Navbar />
          </div>

          <div
            className="container p-4 p-md-5 rounded"
            style={{ backgroundColor: "#FCBF49" }}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Articletest} />
              <Route exact path="/article/:key" component={Article} />
              <Route component={NotFound} />
            </Switch>
          </div>

          {/* <div className="container">
            <Footer image={LogoSolo} />
          </div> */}
          <Footer image={LogoSolo} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
