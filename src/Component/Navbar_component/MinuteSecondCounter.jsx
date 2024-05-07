import React, { useState, useEffect } from 'react';

const MinuteSecondCounter = () => {
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    let timer;
    if (true) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Clear the interval when the component is unmounted or the timer stops
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }); // Dependency on isRunning to start/stop the timer

  const minutes = Math.floor(seconds / 60); // Calculate minutes
  const remainingSeconds = seconds % 60;   // Calculate remaining seconds

  return (
    <div className="">
        {`${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`} {/* 00:00 format */}
    </div>
  );
};

export default MinuteSecondCounter;
