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
            backgroundSize: ["400% 400%", "250% 250%", "400% 400%"], // Adjust background size for pulsating effect
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
                            duration: 0.5, // Adjust duration for slower animation
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] opacity-50 ",
                    "bg-gradient-to-r from-red-600 via-red-0 to-red-0",
                    "filter blur-xl" // Reduce the shadow
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 0.5, // Adjust duration for slower animation
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1]",
                    "bg-gradient-to-r from-red-5 via-red-0 to-red-600",
                    "filter blur-xl" // Reduce the shadow
                )}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
