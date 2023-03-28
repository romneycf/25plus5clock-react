import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./components/box/box";
import Title from "./components/title/title";
import Labelbtn from "./components/labelbtn/labelbtn";

function App() {
  return (
    <div className="App">
      <Box>
        <Title>25 plus 5 Clock</Title>
        <div className="display-center">
          <div className="controller-wrapper">
            <label id="break-label">Break Length</label>
            <div>
              <Labelbtn id="break-decrement"><i className="fa fa-arrow-down"></i></Labelbtn>
              <label>5</label>
              <Labelbtn id="break-increment"><i className="fa fa-arrow-up"></i></Labelbtn>
            </div>
          </div>
          <div className="controller-wrapper">
            <label>Session</label>
            <div>
              <span>00:00</span>
            </div>
          </div>
          <div className="controller-wrapper">
            <label id="session-label">Session Length</label>
            <div>
              <button id="session-decrement">-</button>
              <span>25</span>
              <button id="session-increment">+</button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default App;
