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
import addUser from "./components/user/addUser";
import editUser from "./components/user/editUser";
import profileUser from "./components/user/profileUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./contexts/context";
import { Provider as Provider2 } from 'react-redux';
import store2 from "./store";



function App() {
  return (
    <Provider2 store = {store2}>
      <Provider>
        <Router>
          <div className="App">
            <div className=" p-4 p-md-5 text-black rounded">
              <Header branding="Gold Anda Chile" />
              <Navbar />
            </div>

            <div
              className="container p-4 p-md-5 rounded"
              style={{ backgroundColor: "#FCBF49" }}
            >
              <Switch>
                
                <Route path="/" exact component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/addUser" component={addUser}/>
                <Route exact path="/profile" component={profileUser}/>
                <Route exact path="/test" component={Articletest} />
                <Route exact path="/article/:key" component={Article} />
                <Route exact path="/user/editUser/:id" component={editUser}/>
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer image={LogoSolo} />
          </div>
        </Router>
      </Provider>
    </Provider2>
  );
}

export default App;
