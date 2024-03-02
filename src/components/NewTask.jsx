'use client'
import { RxPlus } from "react-icons/rx";
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
            <DialogTrigger className="flex align-middle border-b-orange-50">
                <RxPlus />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <AddTask />
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}
