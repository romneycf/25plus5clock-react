import "./App.css";
import Title from "./components/title/title";
import Labelbtn from "./components/labelbtn/labelbtn";
import { useEffect, useRef, useState } from "react";

function App() {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [displayTime, setDisplayTime] = useState(1500);
  const [isActive, setActive] = useState(false);
  const [label, setLabel] = useState("Session");
  const audioElement = useRef(null);

  function maskTime(time: number) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  function changeTime(amount: number, type: string) {
    let newCount;
    if (type === "Session") {
      newCount = sessionTime + amount;
    } else {
      newCount = breakTime + amount;
    }

    if (newCount > 0 && newCount <= 60 && !isActive) {
      type === "Session" ? setSessionTime(newCount) : setBreakTime(newCount);
      if (type === "Session") {
        setDisplayTime(newCount * 60);
      }
    }
  }

  function start() {
    setActive(!isActive);
  }

  useEffect(() => {
    if (isActive && displayTime > 0) {
      const interval = setInterval(() => {
        setDisplayTime(displayTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (displayTime === 0) {
      console.log("acabou");
      //audioElement.current.play();
      //audioElement.current.currentTime = 0;

      //    setTimeout(() => {
      if (label === "Session") {
        setDisplayTime(breakTime * 60);
        setLabel("Break");
      }
      if (label === "Break") {
        setDisplayTime(sessionTime * 60);
        setLabel("Session");
      }
    }
  }, [breakTime, sessionTime, displayTime, label, isActive]);

  function resetTime() {
    setBreakTime(5);
    setSessionTime(25);
    setDisplayTime(1500);
    setLabel("Session");
    setActive(false);
    clearInterval(undefined);
    //audioElement.current.load();
  }

  return (
    <div className="App">
      <div className="display">
        <div className="display-center">
          <div className="wrapper break-wrapper">
            <label id="break-label">Break Length</label>
            <div>
              <Labelbtn
                id="break-decrement"
                onClick={() => changeTime(-1, "Break")}
              >
                <i className="fa fa-arrow-down"></i>
              </Labelbtn>
              <label id="break-length">{`${breakTime}`}</label>
              <Labelbtn
                id="break-increment"
                onClick={() => changeTime(1, "Break")}
              >
                <i className="fa fa-arrow-up"></i>
              </Labelbtn>
            </div>
          </div>
          <div className="wrapper session-wrapper">
            <label id="timer-label">{label}</label>
            <span id="time-left">{maskTime(displayTime)}</span>
            <div>
              <Labelbtn id="start_stop" onClick={start}>
                <i
                  className={!isActive ? "fa fa-forward-step" : "fa fa-pause"}
                ></i>
              </Labelbtn>
              <Labelbtn id="reset" onClick={resetTime}>
                <i className="fa fa-refresh"></i>
              </Labelbtn>
            </div>
          </div>
          <div className="wrapper length-wrapper">
            <label id="session-label">Session Length</label>
            <div>
              <Labelbtn
                id="session-decrement"
                onClick={() => changeTime(-1, "Session")}
              >
                <i className="fa fa-arrow-down"></i>
              </Labelbtn>
              <label id="session-length">{sessionTime}</label>
              <Labelbtn
                id="session-increment"
                onClick={() => changeTime(1, "Session")}
              >
                <i className="fa fa-arrow-up"></i>
              </Labelbtn>
            </div>
          </div>
        </div>
        <span className="title">25 plus 5 Clock - by R. Freire</span>
      </div>
    </div>
  );
}

export default App;
