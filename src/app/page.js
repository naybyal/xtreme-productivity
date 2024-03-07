'use client'

import NewTask from "@/components/NewTask";
import RainNoise from "@/components/RainNoise";
import TaskTable from "@/components/TaskTable";
import PomodoroTimer from "@/components/PomodoroTimer";

export default function Home() {

    return (
        <div className='page sm:h-dvh w-full h-42 overflow-y-scroll no-scrollbar'>
            <div id='Header' className="grid grid-flow-col justify-between m-5">
                <RainNoise/>
                <NewTask/>
            </div>
            <div id="Main" className='flex m-5'>
                <TaskTable/>
            </div>
            <PomodoroTimer />
        </div>

    );
}
