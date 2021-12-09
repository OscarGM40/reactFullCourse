import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import CalendarApp from "./CalendarApp";
import "./index.css";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <CalendarApp />
  </Suspense>,
  document.getElementById("root")
);
