import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const initialTasks = [
    {
        id: 1,
        task: "Algorithm Analysis and Design Revision",
        status: "Complete",
        date: "Today",
    },
    {
        id: 2,
        task: "Xtreme Productivity PWA",
        status: "Incomplete",
        date: "Today",
    }
];

export default function TaskTable() {
    const [tasks, setTasks] = useState(initialTasks);

    const toggleStatus = (taskId) => {
        setTasks(prevTasks => prevTasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    status: task.status === "Complete" ? "Incomplete" : "Complete"
                };
            }
            return task;
        }));
    };

    return (
        <Table>
            <TableCaption>Recent tasks.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>TBC</TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task) => (
                    <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.date}</TableCell>
                        <TableCell className={task.status === 'Complete' ? 'completed-task' : ''}>{task.task}</TableCell>
                        <TableCell className="text-right">
                            <DropdownMenu>
                                <DropdownMenuTrigger>{task.status === 'Complete' ? 'Completed' : 'In progress'}</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => toggleStatus(task.id)}>
                                        {task.status === 'Complete' ? 'Mark as Incomplete' : 'Mark as Complete'}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
