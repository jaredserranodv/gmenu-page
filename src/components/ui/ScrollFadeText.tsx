"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

export type ScrollFadeTextProps<T extends React.ElementType = "p"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  /**
   * Scroll offset configuration passed to `useScroll`.
   * Defaults to fading as the element scrolls out of the viewport.
   */
  offset?: NonNullable<Parameters<typeof useScroll>[0]>["offset"];
  /**
   * Input range (scroll progress) where fading happens.
   */
  fadeRange?: [number, number];
  /**
   * Opacity output range.
   */
  opacityRange?: [number, number];
  /**
   * Optional parallax translateY (in px). Set to 0 to disable.
   */
  parallaxY?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function ScrollFadeText<T extends React.ElementType = "p">({
  as,
  children,
  className,
  offset = ["start start", "end start"],
  fadeRange = [0, 0.8],
  opacityRange = [1, 0],
  parallaxY = -16,
  ...rest
}: ScrollFadeTextProps<T>) {
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as unknown as React.RefObject<HTMLElement>,
    offset,
  });

  const opacity = useTransform(
    scrollYProgress,
    [fadeRange[0], fadeRange[1]],
    [opacityRange[0], opacityRange[1]],
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxY]);

  const Component = (as ?? "p") as React.ElementType;
  const MotionComponent = React.useMemo(() => motion(Component), [Component]);

  return (
    <MotionComponent
      ref={ref as unknown as React.Ref<HTMLElement>}
      style={{ opacity, y, willChange: "transform, opacity" }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
