import "./App.css";
import Box from "./components/box/box";
import Title from "./components/title/title";
import Labelbtn from "./components/labelbtn/labelbtn";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
}

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  const [session, setSession] = useState({
    lenght: 25,
    break: 5,
    label: "Session",
  });

  function handleLenght(operator: "decrement" | "increment") {
    if (operator === "increment") {
      if (session.lenght >= 60) return false;
      setSession((values) => ({ ...values, lenght: session.lenght + 1 }));
    }

    if (operator === "decrement") {
      if (session.lenght <= 1) return false;
      setSession((values) => ({ ...values, lenght: session.lenght - 1 }));
    }
  }

  function handleBreak(operator: "decrement" | "increment") {
    if (operator === "increment") {
      if (session.break >= 60) return false;
      setSession((values) => ({ ...values, break: session.break + 1 }));
    }

    if (operator === "decrement") {
      if (session.break <= 1) return false;
      setSession((values) => ({ ...values, break: session.break - 1 }));
    }
  }

  return (
    <div className="App">
      <Box>
        <Title>25 plus 5 Clock</Title>
        <div className="display-center">
          <div className="controller-wrapper">
            <label id="break-label">Break Length</label>
            <div>
              <Labelbtn
                id="break-decrement"
                onClick={() => handleBreak("decrement")}
              >
                <i className="fa fa-arrow-down"></i>
              </Labelbtn>
              <label id="break-length">{session.break}</label>
              <Labelbtn
                id="break-increment"
                onClick={() => handleBreak("increment")}
              >
                <i className="fa fa-arrow-up"></i>
              </Labelbtn>
            </div>
          </div>
          <div className="controller-wrapper">
            <label id="timer-label">Session</label>
            <div>
              <MyTimer expiryTimestamp={time} />
            </div>
          </div>
          <div className="controller-wrapper">
            <label id="session-label">Session Length</label>
            <div>
              <Labelbtn
                id="session-decrement"
                onClick={() => handleLenght("decrement")}
              >
                <i className="fa fa-arrow-down"></i>
              </Labelbtn>
              <label id="session-length">{session.lenght}</label>
              <Labelbtn
                id="session-increment"
                onClick={() => handleLenght("increment")}
              >
                <i className="fa fa-arrow-up"></i>
              </Labelbtn>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default App;
