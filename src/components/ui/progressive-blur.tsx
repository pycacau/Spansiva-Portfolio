"use client";

import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  blurIntensity?: number;
  direction: "left" | "right";
}

export function ProgressiveBlur({
  className,
  blurIntensity = 1,
  direction,
}: ProgressiveBlurProps) {
  const gradientDirection = direction === "left" 
    ? "to right" 
    : "to left";

  return (
    <div
      className={cn("pointer-events-none absolute top-0 h-full", className)}
      style={{
        background: `linear-gradient(${gradientDirection}, 
          rgba(0, 0, 0, ${blurIntensity}) 0%, 
          rgba(0, 0, 0, ${blurIntensity * 0.8}) 20%, 
          rgba(0, 0, 0, ${blurIntensity * 0.6}) 40%, 
          rgba(0, 0, 0, ${blurIntensity * 0.4}) 60%, 
          rgba(0, 0, 0, ${blurIntensity * 0.2}) 80%, 
          transparent 100%
        )`,
        backdropFilter: `blur(${blurIntensity * 2}px)`,
      }}
    />
  );
}
