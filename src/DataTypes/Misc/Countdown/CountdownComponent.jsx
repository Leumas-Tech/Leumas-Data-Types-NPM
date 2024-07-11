import React, { useState, useEffect } from 'react';
import Countdown from './Countdown'; // Assuming Countdown class is in the same directory

const CountdownComponent = () => {
    const [countdown, setCountdown] = useState(new Countdown(10, () => alert('Countdown Complete!')));
    const [remainingTime, setRemainingTime] = useState(countdown.getRemainingTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(countdown.getRemainingTime());
        }, 1000);
        return () => clearInterval(interval);
    }, [countdown]);

    const handleStart = () => {
        countdown.start();
    };

    const handleStop = () => {
        countdown.stop();
    };

    const handleReset = () => {
        countdown.reset(10);
        setRemainingTime(countdown.getRemainingTime());
    };

    return (
        <div>
            <h3>Countdown Timer</h3>
            <div>
                <p>Remaining Time: {remainingTime} seconds</p>
            </div>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default CountdownComponent;
