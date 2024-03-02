'use client'
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddTask from "@/components/AddTask";


export default function NewTask() {
    return (
        <Dialog>
            <DialogTrigger>
                New Task
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <AddTask />
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}
