import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import QKDSimulator from "./pages/QKDSimulator";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <QKDSimulator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
