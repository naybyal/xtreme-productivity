import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function NewTask() {
    return (
        <Card className="w-[350px] justify-center m-auto mt-2">
            <CardHeader>
                <CardTitle>New Task</CardTitle>
                <CardDescription>Add a task to the list</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Task Title</Label>
                            <Input id="name" placeholder="Title of the task" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="completion-time">Completion Time</Label>
                            <Select>
                                <SelectTrigger id="completion-time">
                                    <SelectValue placeholder="Select" />
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
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Add to List</Button>
            </CardFooter>
        </Card>
    );
}
