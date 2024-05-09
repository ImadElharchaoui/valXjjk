import React, { useState, useEffect } from 'react';

const MinuteSecondCounter = ({ clicked }) => {
  const [seconds, setSeconds] = useState(0);
  let timer;
  useEffect(() => {
    
    
    if (clicked) { 
      setSeconds(0)
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer); // Clear the timer when 'clicked' is false
    }

    return () => {
      clearInterval(timer); // Clear the timer when component unmounts
    };
  }, [clicked]); // Depend on 'clicked' to control start/stop

  const minutes = Math.floor(seconds / 60); // Calculate minutes
  const remainingSeconds = seconds % 60;   // Calculate remaining seconds

  return (
    <div className="text-3xl font-bold">
      <button>
        {clicked ?`${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')} ` : 'PLAY'} 
      </button>
    </div>
  );
};

export default MinuteSecondCounter;
