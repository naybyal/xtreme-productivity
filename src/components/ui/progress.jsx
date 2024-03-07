import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
    const [duration, setDuration] = useState(45); // Default duration is 45 minutes

    const handleDurationChange = (newDuration) => {
        setDuration(newDuration);
    };

    return (
        <div className={cn("relative", className)} {...props}>

            <ProgressPrimitive.Root
                ref={ref}
                className={cn("h-4 overflow-hidden rounded-full bg-secondary m-5", className)}
                {...props}>
                <ProgressPrimitive.Indicator
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: `translateX(-${100 - ((value || 0) / duration) * 100}%)` }}
                />
            </ProgressPrimitive.Root>
        </div>
    );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
