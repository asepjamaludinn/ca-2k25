// components/ui/requirements/RequirementStepCard.tsx
"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { THEME } from "@/lib/theme";

interface RequirementStepCardProps {
  title: string;
  description: string;
  index: number;
  numSteps: number;
  activeStepIndex: MotionValue<number>;
  alignment: "left" | "right";
}

export default function RequirementStepCard({
  title,
  description,
  index,
  numSteps,
  activeStepIndex,
  alignment,
}: RequirementStepCardProps) {
  // Logika hook ini sudah benar
  const isActive = useTransform(activeStepIndex, (latest) => latest >= index);
  const scale = useTransform(isActive, (active) => (active ? 1.05 : 0.95));
  const opacity = useTransform(isActive, (active) => (active ? 1 : 0.5));
  const borderColor = useTransform(isActive, (active) =>
    active ? THEME.colors.primary : "rgba(255,255,255,0.1)"
  );
  const background = useTransform(isActive, (active) =>
    active
      ? `linear-gradient(to bottom right, ${THEME.colors.primary}10, rgba(255,255,255,0.02))`
      : "rgba(255,255,255,0.02)"
  );
  const boxShadow = useTransform(isActive, (active) =>
    active ? `0 0 40px ${THEME.colors.primary}30` : "none"
  );
  const titleColor = useTransform(isActive, (active) =>
    active ? THEME.colors.white : THEME.colors.white + "80"
  );
  const stepColor = useTransform(isActive, (active) =>
    active ? THEME.colors.primary : THEME.colors.white + "80"
  );
  const descriptionColor = useTransform(isActive, (active) =>
    active ? THEME.colors.white : THEME.colors.gray[400]
  );

  return (
    <motion.div
      className={`
        absolute w-[45%] p-6 rounded-lg border 
        transition-colors duration-300 ease-out
        ${alignment === "left" ? "left-0 text-right" : "right-0 text-left"}
      `}
      style={{
        top: `${(index / (numSteps - 1)) * 100}%`,
        y: "-50%",
        scale,
        opacity,
        borderColor,
        background,
        boxShadow,
        backdropFilter: "blur(5px)",
      }}
    >
      <motion.span
        className="text-xs font-pixel tracking-widest uppercase mb-2 block"
        style={{
          color: stepColor,
          letterSpacing: "0.1em",
        }}
      >
        Step {String(index + 1).padStart(2, "0")}
      </motion.span>
      <motion.h3
        className="text-xl font-pixel tracking-wider uppercase mb-2"
        style={{
          color: titleColor,
        }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-sm font-sans"
        style={{ color: descriptionColor }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}