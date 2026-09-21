"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/components/cn";

type Variant = "up" | "left" | "right" | "scale";

/**
 * Fades and slides an element in when it scrolls into view, and back out
 * when it leaves, in either scroll direction, so scrolling up plays the
 * same motion in reverse instead of leaving already-revealed content static.
 *
 * Nothing is ever hidden before JavaScript runs. Content on screen at load
 * plays a pure CSS entrance from the first paint (see `.reveal` in
 * globals.css), so it never waits for hydration and still counts for LCP.
 * Only once mounted does the observer hide what is off screen, where hiding
 * it is invisible. Without JavaScript everything simply stays visible.
 */
export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let first = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (first) {
          first = false;
          // A sliver peeking in at the bottom edge is already on screen:
          // hiding it now would be a visible flicker.
          const { top, bottom } = entry.boundingClientRect;
          setHidden(top >= window.innerHeight || bottom <= 0);
          return;
        }
        setHidden(!entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={cn("reveal", `reveal-${variant}`, hidden && "reveal-hidden", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
