import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RightComp from "./components/RightComp";
import LeftComp from "./components/LeftComp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <LeftComp />
        <RightComp />
      </div>
    </div>
  );
}

export default App;
