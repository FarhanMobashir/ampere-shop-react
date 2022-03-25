import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
