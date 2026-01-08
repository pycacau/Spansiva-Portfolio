"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingShapeProps {
    className?: string;
    delay?: number;
    duration?: number;
}

function FloatingShape({ className, delay = 0, duration = 15 }: FloatingShapeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{
                duration: 2,
                delay,
                ease: "easeOut"
            }}
            className={cn(
                "absolute rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-xl",
                className
            )}
        >
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                }}
                className="w-full h-full"
            />
        </motion.div>
    );
}

interface SectionBackgroundProps {
    variant?: "hero" | "about" | "services" | "portfolio" | "testimonials" | "default";
    className?: string;
}

export function SectionBackground({ variant = "default", className }: SectionBackgroundProps) {
    const shapes = {
        hero: (
            <>
                <FloatingShape delay={0.2} duration={20} className="w-32 h-32 sm:w-48 sm:h-48 top-10 left-10" />
                <FloatingShape delay={0.5} duration={25} className="w-24 h-24 sm:w-36 sm:h-36 top-20 right-20" />
                <FloatingShape delay={0.8} duration={18} className="w-40 h-40 sm:w-56 sm:h-56 bottom-20 left-1/4" />
            </>
        ),
        about: (
            <>
                <FloatingShape delay={0.3} duration={22} className="w-28 h-28 sm:w-40 sm:h-40 top-15 right-15" />
                <FloatingShape delay={0.6} duration={20} className="w-36 h-36 sm:w-48 sm:h-48 bottom-15 left-20" />
                <FloatingShape delay={0.9} duration={25} className="w-20 h-20 sm:w-32 sm:h-32 top-1/2 left-1/3" />
            </>
        ),
        services: (
            <>
                <FloatingShape delay={0.4} duration={18} className="w-32 h-32 sm:w-44 sm:h-44 top-10 left-10" />
                <FloatingShape delay={0.7} duration={23} className="w-24 h-24 sm:w-36 sm:h-36 bottom-10 right-15" />
                <FloatingShape delay={1.0} duration={20} className="w-40 h-40 sm:w-52 sm:h-52 top-1/3 right-1/4" />
            </>
        ),
        portfolio: (
            <>
                <FloatingShape delay={0.2} duration={19} className="w-36 h-36 sm:w-48 sm:h-48 top-20 left-20" />
                <FloatingShape delay={0.5} duration={24} className="w-28 h-28 sm:w-40 sm:h-40 bottom-20 right-25" />
                <FloatingShape delay={0.8} duration={21} className="w-32 h-32 sm:w-44 sm:h-44 top-1/2 left-1/4" />
            </>
        ),
        testimonials: (
            <>
                <FloatingShape delay={0.3} duration={20} className="w-30 h-30 sm:w-42 sm:h-42 top-15 right-20" />
                <FloatingShape delay={0.6} duration={22} className="w-36 h-36 sm:w-48 sm:h-48 bottom-15 left-15" />
                <FloatingShape delay={0.9} duration={18} className="w-24 h-24 sm:w-36 sm:h-36 top-1/3 right-1/3" />
            </>
        )
    };

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {shapes[variant] || shapes.hero}
        </div>
    );
}
