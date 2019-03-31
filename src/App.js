import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from "./pages/Home"
import ProjectPage from "./pages/Projects"
import ContactPage from "./pages/Contact"
import AboutPage from "./pages/About"

import "./default.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={ProjectPage} path="/projects" />
          <Route component={ContactPage} path="/contact" />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </Router>
    );
  }
}

export default App;
