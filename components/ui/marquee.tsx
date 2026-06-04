import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function Marquee({
  className,
  children,
  pauseOnHover = true,
  reverse = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group/marquee relative flex w-full overflow-hidden [--gap:2rem] [gap:var(--gap)]",
        className
      )}
      {...props}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center justify-around [gap:var(--gap)] pr-8",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
