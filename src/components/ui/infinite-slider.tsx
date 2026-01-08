"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useMeasure, useInView } from "react-use-measure";
import { useEffect, useRef, useState } from "react";

interface InfiniteSliderProps {
  children: React.ReactNode[];
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 24,
  speed = 30,
  speedOnHover = 0,
  reverse = false,
  className = "",
}: InfiniteSliderProps) {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const controls = useAnimation();
  const isInView = useInView(ref);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalWidth = width * 2 + gap * children.length;

  useEffect(() => {
    if (!isInView) return;

    const finalPosition = reverse ? -width : width;
    const currentSpeed = isHovered ? speedOnHover : speed;
    const duration = (totalWidth / 100) * currentSpeed;

    controls.start({
      x: finalPosition,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [controls, width, totalWidth, reverse, speed, speedOnHover, isInView, isHovered]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={ref}
        className="flex"
        style={{
          gap: `${gap}px`,
          x: xTranslation,
        }}
        animate={controls}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
