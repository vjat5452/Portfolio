"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

export function SpotlightCard({
  className,
  children,
  spotlightColor = "rgba(124, 92, 255, 0.18)",
  ...props
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState({ x: -200, y: -200 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-[#131313] to-[#0d0d0d] transition-colors duration-300 hover:border-[#2e2e2e]",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 50%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
