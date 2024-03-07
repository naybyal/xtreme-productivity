import {Progress} from "@/components/ui/progress";
import {Button} from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function PomodoroTimer() {
    return (
        <>
            {/*<Carousel>*/}
            {/*    <CarouselContent>*/}
            {/*        <CarouselItem></CarouselItem>*/}
            {/*        <CarouselItem></CarouselItem>*/}
            {/*        <CarouselItem></CarouselItem>*/}
            {/*    </CarouselContent>*/}
            {/*    <CarouselPrevious />*/}
            {/*    <CarouselNext />*/}
            {/*</Carousel>*/}

            <h2 className="text-lg font-bold m-5">Pomodoro Timer</h2>
            <Progress value={100}/>
            <div className="flex justify-around m-5">
                <Button className="">45 mins</Button>
                <Button className="">60 mins</Button>
                <Button className="">120 mins</Button>
            </div>

        </>
    );
}