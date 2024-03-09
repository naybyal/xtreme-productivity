import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CiPause1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import BackgroundGradient from "@/components/ui/background-gradient";


export default function PomodoroTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(intervalId);
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

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const totalSeconds = minutes * 60 + seconds;
        const initialProgress = ((25 * 60 - totalSeconds) / (25 * 60)) * 100;
        setProgress(initialProgress);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + (100 / (25 * 60)) * 0.1; // Increase progress by 10% every 100ms
            });
        }, 100);

        return () => clearInterval(interval);
    }, [25, minutes, seconds]);

    const formatTime = (value) => {
        return value < 10 ? "0" + value : value;
    };

    return (
        <div className="pomodoro-container">
            <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-background dark:bg-zinc-900">
                <div className="mt-1 progress-container">
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
                </div>
                <div className='m-3'>
                    <Button
                        className="bg-card"
                        onClick={startTimer}
                        disabled={isRunning}
                    >
                        <CiPlay1 />
                    </Button>
                    <Button
                        className="bg-card"
                        onClick={stopTimer}
                        disabled={!isRunning}
                    >
                        <CiPause1 />
                    </Button>
                    <Button className="bg-card" onClick={resetTimer}>
                        <CiStop1 />
                    </Button>
                </div>
            </BackgroundGradient>
        </div>
    );
}
