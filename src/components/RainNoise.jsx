'use client'

import { useState } from "react";
import Sound from "react-sound";
import { MdOutlineMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";

export default function RainNoise() {
    const [isPlaying, setIsPlaying] = useState(false);
    const rainUrl = "rain.mp3";
    function toggleMusic() {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }

    return (
        <>
            <button onClick={toggleMusic}>
                {isPlaying ? <MdMusicNote /> : <MdOutlineMusicOff />}
            </button>
            <Sound
                url={rainUrl}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                loop={true}
            />
        </>
    );
}
