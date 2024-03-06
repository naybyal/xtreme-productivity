'use client'

import NewTask from "@/components/NewTask";
import RainNoise from "@/components/RainNoise";
import TaskTable from "@/components/TaskTable";

export default function Home() {

    return (
        <div className='page'>
            <div id='Footer' className="grid grid-flow-col justify-between m-5">
                <RainNoise/>
                <NewTask/>
            </div>
            <div id="Main" className='flex m-5'>
                <TaskTable/>
            </div>
        </div>

    );
}
