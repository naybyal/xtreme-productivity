import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";


const tasks = [
    {
        task: "Algorithm Analysis and Design Revision",
        status: "Complete",
        date: "Today",
    },
    {
        task: "Xtreme Productivity PWA",
        status: "Incomplete",
        date: "Today",
    }
]

export default function TaskTable() {
    return (
        <Table>
            <TableCaption>Recent tasks.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Task</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task) => (
                    <TableRow key={task.task}>
                        <TableCell className="font-medium">{task.task}</TableCell>
                        <TableCell>{task.status}</TableCell>
                        <TableCell className="text-right">{task.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

