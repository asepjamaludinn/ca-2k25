// components/ui/AnimatedTextReveal.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextRevealProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  wordByWord?: boolean;
}

export default function AnimatedTextReveal({
  text,
  delay = 0,
  duration = 0.05,
  className = "",
  wordByWord = false,
}: AnimatedTextRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: wordByWord ? 0.08 : duration,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const splitContent = wordByWord ? text.split(" ") : Array.from(text);

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {splitContent.map((item, i) => (
        <React.Fragment key={i}>
          <motion.span
            className="inline-block"
            variants={itemVariants}
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
          {wordByWord && i < splitContent.length - 1 && "\u00A0"}
        </React.Fragment>
      ))}
    </motion.span>
  );
}