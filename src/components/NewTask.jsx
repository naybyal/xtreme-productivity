'use client'
import {Button} from "@/components/ui/button";
import { CiCirclePlus } from "react-icons/ci";
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
                <CiCirclePlus />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <AddTask />
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}
