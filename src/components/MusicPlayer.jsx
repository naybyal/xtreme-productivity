// 'use client'
//
// import { FiMusic } from "react-icons/fi";
// import { Toggle } from "@/components/ui/toggle";
// import { useState } from "react";
// import Sound from "react-sound";
// import rain from "../../src/assets/rain.mp3";
//
// // export default function MusicPlayer() {
//     const [isPlaying, setIsPlaying] = useState(false);
//
//     function toggleMusic() {
//         setIsPlaying((prevIsPlaying) => !prevIsPlaying);
//     }
//
//     return (
//         <>
//             <Toggle
//                 size="lg"
//                 aria-label="Toggle italic"
//                 onClick={toggleMusic}
//                 isActive={isPlaying}
//             >
//                 <FiMusic />
//             </Toggle>
//             <Sound
//                 url={rain}
//                 playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
//             />
//         </>
//     );
// }
