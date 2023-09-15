import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./AppContext";
import ParentComponent from "./components/ParentComponent";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <AppProvider>
    <ParentComponent />
  </AppProvider>,
  rootElement
);
