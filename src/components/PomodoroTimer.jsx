import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CiPause1, CiPlay1, CiStop1 } from "react-icons/ci";
import BackgroundGradient from "@/components/ui/background-gradient";

export default function PomodoroTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const totalSeconds = minutes * 60 + seconds;
        const initialProgress = ((25 * 60 - totalSeconds) / (25 * 60)) * 100;
        setProgress(initialProgress);

        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(intervalId);
                        setIsRunning(false);
                        // Timer is finished, you can implement what happens next
                    } else {
                        setMinutes((prev) => prev - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds((prev) => prev - 1);
                }
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, minutes, seconds]);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setMinutes(25);
        setSeconds(0);
    };

    const formatTime = (value) => {
        return value < 10 ? "0" + value : value;
    };

    return (
        <div className="pomodoro-container">
            <BackgroundGradient className="flex justify-center items-center rounded-[22px] w-full p-4 sm:p-10 bg-background dark:bg-zinc-900">
                <svg className="progress-svg" viewBox="0 0 100 100">
                    <circle
                        className="progress-bar-background"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                    />

                    <circle
                        className="progress-bar"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * progress) / 100}
                        transform="rotate(-90, 50, 50)" // Adjust the rotation to start at the top
                    />

                    <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="20"
                    >
                        {formatTime(minutes)}:{formatTime(seconds)}
                    </text>
                </svg>

                <div className="m-3">
                    <Button
                        className="bg-card hover:bg-opacity-90"
                        onClick={startTimer}
                        disabled={isRunning}
                    >
                        <CiPlay1 />
                    </Button>
                    <Button
                        className="bg-card hover:bg-opacity-90"
                        onClick={stopTimer}
                        disabled={!isRunning}
                    >
                        <CiPause1 />
                    </Button>
                    <Button className="bg-card hover:bg-opacity-90" onClick={resetTimer}>
                        <CiStop1 />
                    </Button>
                </div>
            </BackgroundGradient>
        </div>
    );
}
