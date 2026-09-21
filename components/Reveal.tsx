"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/components/cn";

type Variant = "up" | "left" | "right" | "scale";

/**
 * Fades and slides an element in when it scrolls into view, and back out
 * when it leaves, in either scroll direction, so scrolling up plays the
 * same motion in reverse instead of leaving already-revealed content static.
 * Gated behind the `.js` class RootShell sets before hydration, so a
 * no-JS visitor gets the content immediately rather than stuck invisible.
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
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
      className={cn("reveal", `reveal-${variant}`, visible && "is-visible", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
