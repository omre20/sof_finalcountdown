import { useState, useRef, useEffect} from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }
    

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return <>
        <ResultModal
            targetTime={targetTime}
            remainingTime={timeRemaining}
            ref={dialog}
            onReset={handleReset}
        />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerIsActive ? "active" : undefined}>
                {timerIsActive ? "Timer is running..." : "Timer inactive"}
            </p>
        </section>
    </>
}