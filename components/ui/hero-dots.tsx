"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroDots = ({
    children,
    className,
    showGradient = true,
    containerClassName,
    dots,
}: {
    children: React.ReactNode;
    className?: string;
    showGradient?: boolean;
    containerClassName?: string;
    dots: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div
            className={cn(
                "relative flex items-center rounded-xl justify-center w-full group bg-black",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className={`absolute inset-0 bg-${dots}-neutral-300 dark:bg-${dots}-neutral-800 rounded-xl pointer-events-none`} />
            <motion.div
                className={`pointer-events-none bg-${dots}-indigo-500 dark:bg-${dots}-indigo-500 rounded-xl absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100`}
                style={{
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />
            {showGradient && (
                <div className="absolute inset-0 h-full w-full pointer-events-none rounded-xl bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent,white)]" />
            )}
            <div className={cn("z-20 rounded-xl", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pb-1  px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};