"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useVelocity, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const contentRef = useRef<HTMLDivElement>(null);
    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 0.8], [50, svgHeight + 4500]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - 2000]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    return (
        <motion.div ref={ref} className={cn("relative", className)}>
            <div className="absolute left-8 md:-left-20">
                <svg
                    viewBox={`0 0 20 ${svgHeight}`}
                    width="20"
                    height={svgHeight}
                    className=" ml-4 block"
                    aria-hidden="true"
                >
                    <motion.path
                        d={`M 1 0V -39 l 18 25 V ${svgHeight * 0.9} l -18 24V ${svgHeight}`}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="1.25"
                        className="motion-reduce:hidden"
                        transition={{ duration: 10 }}
                    ></motion.path>
                    <defs>
                        <motion.linearGradient
                            id="gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            x2="0"
                            y1={y1}
                            y2={y2}
                        >
                            <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                            <stop stopColor="#18CCFC"></stop>
                            <stop offset="0.325" stopColor="#6344F5"></stop>
                            <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                        </motion.linearGradient>
                    </defs>
                </svg>
            </div>
            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
};