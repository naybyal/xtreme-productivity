'use client'

import NewTask from "@/components/NewTask";
import RainNoise from "@/components/RainNoise";
import TaskTable from "@/components/TaskTable";

export default function Home() {

    return (
        <>
            <div id='Header' className="grid grid-flow-col justify-between">
                <NewTask/>
                <RainNoise/>
            </div>
            <div id="Main" className='flex m-5'>
                <TaskTable />
            </div>
        </>

    );
}
