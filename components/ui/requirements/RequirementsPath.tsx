"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { THEME } from "@/lib/theme";

function PathCircle({
  circleProgress,
  index,
  position,
}: {
  circleProgress: MotionValue<number>;
  index: number;
  position: number;
}) {
  const isActive = useTransform(circleProgress, (latest) => latest >= index);
  const opacity = useTransform(isActive, (active) => (active ? 1 : 0.3));
  const scale = useTransform(isActive, (active) => (active ? 1.2 : 0.8));

  return (
    <motion.circle
      cx="50"
      cy={position}
      r="0.8"
      fill={THEME.colors.primary}
      stroke="#111827"
      strokeWidth="0.15"
      style={{
        opacity,
        scale,
      }}
    />
  );
}

interface RequirementsPathProps {
  numSteps: number;
  scrollYProgress: MotionValue<number>;
}

export default function RequirementsPath({
  numSteps,
  scrollYProgress,
}: RequirementsPathProps) {
  const pathLength = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0.2, 1]);
  const circleProgress = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    [0, numSteps - 1]
  );

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 50 0 V 100"
        stroke="#ffffff"
        strokeWidth="0.1"
        opacity="0.1"
        fill="none"
      />

      <motion.path
        d="M 50 0 V 100"
        stroke={THEME.colors.primary}
        strokeWidth="0.2"
        fill="none"
        strokeDasharray="0 1"
        style={{
          pathLength,
          opacity: pathOpacity,
        }}
      />
      {Array.from({ length: numSteps }).map((_, i) => {
        const circlePosition = (i / (numSteps - 1)) * 100;
        return (
          <PathCircle
            key={i}
            circleProgress={circleProgress}
            index={i}
            position={circlePosition}
          />
        );
      })}
    </svg>
  );
}