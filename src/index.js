import React from "react";
import ReactDOM from "react-dom";
import Route from "../src/route/index";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/index.css";
import "./tailwind.css";

ReactDOM.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>,
  document.getElementById("root")
);
