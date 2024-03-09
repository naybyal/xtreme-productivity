import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export default function BackgroundGradient({
                                               children,
                                               className,
                                               containerClassName,
                                               animate = true,
                                           }) {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        },
    };

    return (
        <div className={cn("relative p-[4px] group", containerClassName)}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100",
                    "bg-gradient-to-r from-red-600 via-red-550 to-red-600",
                    "filter blur-sm" // Reduce the shadow
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1]",
                    "bg-gradient-to-r from-red-600 via-red-550 to-red-600",
                    "filter blur-md" // Reduce the shadow
                )}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
