import {Progress} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";


export default function PomodoroTimer() {
    return (
        <>
            <h2 className="text-lg font-bold m-5">Pomodoro Timer</h2>
            <Progress value={20}/>
            <div className="flex justify-around m-5">
                <Button className="">45 mins</Button>
                <Button className="">60 mins</Button>
                <Button className="">120 mins</Button>
            </div>

        </>
    );
}