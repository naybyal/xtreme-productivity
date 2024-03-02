import NewTask from "@/components/NewTask";
import {Calendar} from "@/components/ui/calendar";

export default function Home() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
      <>
          <NewTask />
          <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
          />
      </>
  );
}
