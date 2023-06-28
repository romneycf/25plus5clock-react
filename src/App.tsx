import "./App.css";
import Box from "./components/box/box";
import Title from "./components/title/title";
import Labelbtn from "./components/labelbtn/labelbtn";
import { useEffect, useRef, useState } from "react";

function App() {
  const [session, setSession] = useState({
    lenght: 25,
    break: 5,
    minutes: 25,
    seconds: 0,
    label: "Session",
    isRunning: false,
  });

  const trueMinutes =
    session.minutes < 10 ? "0" + session.minutes : session.minutes;
  const trueSeconds =
    session.seconds < 10 ? "0" + session.seconds : session.seconds;

  function handleLenght(operator: "decrement" | "increment") {
    if (operator === "increment") {
      if (session.lenght >= 60) return false;
      setSession((values) => ({
        ...values,
        lenght: session.lenght++,
        minutes: session.minutes++,
      }));
    }

    if (operator === "decrement") {
      if (session.lenght <= 1) return false;
      setSession((values) => ({
        ...values,
        lenght: session.lenght--,
        minutes: session.minutes--,
      }));
    }
  }

  function handleBreak(operator: "decrement" | "increment") {
    if (operator === "increment") {
      if (session.break >= 60) return false;
      setSession((values) => ({
        ...values,
        break: session.break + 1,
      }));
    }

    if (operator === "decrement") {
      if (session.break <= 1) return false;
      setSession((values) => ({
        ...values,
        break: session.break - 1,
      }));
    }
  }

  function pause() {
    setSession((values) => ({
      ...values,
      isRunning: false,
    }));
  }

  function resume() {
    setSession((values) => ({
      ...values,
      isRunning: true,
    }));
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
            <p>{session.isRunning ? "Running" : "Not running"}</p>
            <label id="timer-label">{session.label}</label>
            <span id="time-left">
              {trueMinutes}:{trueSeconds}
            </span>
            <div>
              <Labelbtn
                id="start_stop"
                onClick={session.isRunning ? pause : resume}
              >
                <i
                  className={
                    !session.isRunning ? "fa fa-forward-step" : "fa fa-pause"
                  }
                ></i>
              </Labelbtn>
              <Labelbtn id="session-decrement">
                <i className="fa fa-refresh"></i>
              </Labelbtn>
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
              <label id="session-length">{trueMinutes}</label>
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
/*
import { useTimer } from 'react-timer-hook';
import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { theme } from '../../styles/theme';
import RenovacaoJwt from './ModalJwt';

const { rbmWhite, dangerColor } = theme.colors;

const Timer = ({ expiryTimestamp }) => {
  const [logout, setLogout] = useState(false);
  const [renovation, setRenovation] = useState(false);


   const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setRenovation(false);
      setLogout(true);
    },
  });

  const trueSeconds = seconds < 10 ? '0' + seconds : seconds;
  const trueMinutes = minutes < 10 ? '0' + minutes : minutes;
  const trueHours = hours < 10 ? '0' + hours : hours;
 

  useEffect(() => {
   hours == 0 && minutes == 0 && seconds == 59 && setRenovation(true);
  }, [minutes]);

  return (
    <div style={{ textAlign: 'center',width:'100%' }}>
      <span>{trueHours + ":" + trueMinutes + ':' + trueSeconds}</span>
      <RenovacaoJwt open={renovation} close={() => setRenovation(false)} />
      <Modal  open={logout} close={true} >
        <>
          <div style={{ padding: '1rem' }}>
            <h1>{'SUA SESSÃO FOI EXPIRADA'}</h1>
          </div>
          <div style={{ padding: '1rem' }}>
            <Button
              backgroundColor={dangerColor}
              width={'13.792vw'}
              height={'3.125vw'}
              hoverBGColor={dangerColor}
              hoverColor={rbmWhite}
              color={rbmWhite}
              onClick={() => {
                window.location = '/login';
                localStorage.clear();
              }}
              roleName={'button-confirmar-negar'}
            >
              <span>OK</span>
            </Button>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default Timer;
*/
