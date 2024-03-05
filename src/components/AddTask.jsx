'use client'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";

export default function AddTask() {

    return(
        <Card className="w-[350px] m-auto border-0 sm: align-top">
            <CardHeader>
                <CardTitle>New Task</CardTitle>
                <CardDescription>Add a task to the list</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-5">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Task Name</Label>
                            <Input id="name" placeholder="Title of the task"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="completion-time">Completion Time</Label>
                            <Select>
                                <SelectTrigger id="completion-time">
                                    <SelectValue placeholder="Select"/>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="grid justify-center align-middle gap-3">
                <Button>Add to List</Button>
            </CardFooter>
        </Card>
    )
}