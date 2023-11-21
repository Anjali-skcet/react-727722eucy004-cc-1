import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Time: {seconds} seconds</h1>
      <Stack spacing={2} direction="row">
      <Button onClick={handleStart} disabled={isActive} style={{backgroundColor:"green",color:"white"}}>Start</Button>
      <Button onClick={handleStop} disabled={!isActive} style={{backgroundColor:"red",color:"white"}}>Stop</Button>
      <Button onClick={handleReset} style={{backgroundColor:"blue",color:"white"}}>Reset</Button>
    </Stack>
    </div>
  );
};

export default Timer;