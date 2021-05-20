import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

import Alert from "./components/Alert";
import { About } from "./components/About";
import User from "./components/User";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = (props) => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <Alert />

            <Switch>
              <Route exact path="/" component={Home} />

              {/* route only to show page */}
              <Route exact path="/about" component={About} />
              {/* dynamic route for single user */}

              <Route exact path="/user/:login" component={User} />

              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
