import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Awards from "./pages/Awards";
import Activities from "./pages/Activities";
import VolunteerAndWork from "./pages/VolunteerAndWork";
import QKDSimulator from "./pages/QKDSimulator";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/QKDSimulator">
            <QKDSimulator />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/awards">
            <Awards />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/volunteerAndWork">
            <VolunteerAndWork />
          </Route>
          {/* <Route path="/contact">
            <Contact />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
