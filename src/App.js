import React, { Component } from "react";
import "./App.css";
import Route from "./Router";

import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route />
      </Router>
    );
  }
}

export default App;
