import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from "./pages/Home"
import ProjectPage from "./pages/Projects"
import WMSProject from "./pages/WMS"
import TapZProject from "./pages/TapZ"
import SDMProject from "./pages/SDM"
import ContactPage from "./pages/Contact"
import AboutPage from "./pages/About"

import "./default.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={ HomePage } exact path="/" />
          <Route component={ ProjectPage } exact path="/projects" />
          <Route component={ WMSProject } exact path="/projects/WillsMediaServer" />
          <Route component={ TapZProject } exact path="/projects/TapZ-Incremental" />
          <Route component={ SDMProject } exact path="/projects/Seneca-Dark-Mode" />
          <Route component={ ContactPage } path="/contact" />
          <Route component={ AboutPage } path="/about" />
        </Switch>
      </Router>
    );
  }
}

export default App;
