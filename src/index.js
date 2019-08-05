import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import UserInput from "./components/UserInput";

function App() {
  return (
    <UserInput />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
