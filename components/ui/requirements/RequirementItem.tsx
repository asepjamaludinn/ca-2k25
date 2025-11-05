"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { THEME } from "@/lib/theme";

interface RequirementItemProps {
  index: number;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}
const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
    marginTop: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
  visible: {
    opacity: 1,
    maxHeight: "500px", 
    marginTop: "1.5rem",
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
    },
  },
};

export default function RequirementItem({
  index,
  title,
  description,
  isOpen,
  onToggle,
}: RequirementItemProps) {
  return (
    <motion.div
      layout
      className="border border-white/10 rounded-lg overflow-hidden"
      animate={{
        borderColor: isOpen ? THEME.colors.primary : "rgba(255, 255, 255, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="
          flex justify-between items-center w-full p-6
          text-left group cursor-pointer
        "
      >
        <div className="flex items-center gap-4">
          <span
            className="text-sm font-pixel transition-colors"
            style={{
              color: isOpen ? THEME.colors.primary : THEME.colors.gray[400],
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg md:text-xl font-pixel text-white tracking-wide">
            {title}
          </h3>
        </div>

        <motion.div
          className="relative w-5 h-5 shrink-0" 
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="absolute left-0 top-1/2 w-full h-0.5 bg-white -translate-y-1/2" />
          <span className="absolute left-1/2 top-0 w-0.5 h-full bg-white -translate-x-1/2" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="px-6 pb-6"
            style={{ overflow: "hidden" }}
          >
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}