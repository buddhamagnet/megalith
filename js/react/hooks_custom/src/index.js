import React from "react";
import ReactDOM from "react-dom";
import { Tracker, Tracer } from "./components/Tracker";

ReactDOM.render(
  <React.StrictMode>
    <Tracker />
    <Tracer />
  </React.StrictMode>,
  document.getElementById("root")
);
