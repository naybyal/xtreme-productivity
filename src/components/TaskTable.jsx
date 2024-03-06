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
                    <TableHead>Date</TableHead>
                    <TableHead className='text-center'>Task</TableHead>
                    <TableHead className='text-right'>Status</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task) => (
                    <TableRow key={task.task}>
                        <TableCell className="font-medium">{task.date}</TableCell>
                        <TableCell>{task.task}</TableCell>
                        <TableCell className="text-right">{task.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

