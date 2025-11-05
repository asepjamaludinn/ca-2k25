// components/ui/requirements/RequirementCodeItem.tsx
"use client";

// Impor 'Variants' untuk memperbaiki error TypeScript
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { THEME } from "@/lib/theme";
import AnimatedTextReveal from "../AnimatedTextReveal";

interface RequirementCodeItemProps {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
  onSelect: (index: number) => void;
  animationDelay: number;
}

// --- PERBAIKAN ANIMASI & TIPE DATA ---
// Kita gunakan 'maxHeight' untuk animasi yang mulus
const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    maxHeight: 0, // Ganti 'height' menjadi 'maxHeight'
    marginTop: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1], // Easing untuk 'exit' (menutup)
    },
  },
  visible: {
    opacity: 1,
    maxHeight: "200px", // Set 'maxHeight' ke nilai yang besar (cukup untuk deskripsi)
    marginTop: "1rem", // Beri jarak dari judul
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1], // Easing 'easeInOut' kustom (memperbaiki error TS)
    },
  },
};
// --- AKHIR PERBAIKAN ---

export default function RequirementCodeItem({
  index,
  title,
  description,
  isActive,
  onSelect,
  animationDelay,
}: RequirementCodeItemProps) {
  // Kita hapus 'titleVariants' yang tidak terpakai (penyebab ESLint error)
  // 'AnimatedTextReveal' sudah menangani animasi judul.

  return (
    <>
      <motion.div
        layout
        className={`
          relative overflow-hidden cursor-pointer rounded-lg
          transition-all duration-300 ease-in-out group
          border-l-4
          ${
            isActive
              ? "bg-gradient-to-r from-primary/10 to-primary/5 shadow-lg" // Style aktif
              : "border-white/10 hover:bg-white/5 hover:border-primary/50" // Style non-aktif
          }
        `}
        style={{
          borderColor: isActive ? THEME.colors.primary : "rgba(255,255,255,0.1)",
          boxShadow: isActive ? `0 0 25px ${THEME.colors.primary}30` : "none",
        }}
        onClick={() => onSelect(index)}
      >
        {/* Baris Utama / Judul Item */}
        <motion.div
          className="flex items-center gap-4 p-4 md:p-5"
          animate={{
            backgroundColor: isActive
              ? THEME.colors.primary + "1A"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="font-mono text-sm shrink-0 transition-colors"
            style={{
              color: isActive ? THEME.colors.accent : THEME.colors.gray[500],
            }}
          >
            {String(index + 1).padStart(2, "0")}.
          </span>
          

          <div className="glitch-wrapper relative">
            <h3
              className="font-pixel text-lg md:text-xl tracking-wide glitch-text"
              data-text={title}
              style={{
                color: isActive ? THEME.colors.white : THEME.colors.gray[200],
              }}
            >
              <AnimatedTextReveal
                text={title}
                delay={animationDelay}
                duration={0.03}
                className="inline-block"
              />
            </h3>
          </div>

        </motion.div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="description-content"
              variants={descriptionVariants} 
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="px-4 pb-4 md:px-5 md:pb-5 border-t border-white/5"
              style={{
                overflow: "hidden", // Penting agar maxHeight berfungsi
                borderTopColor: THEME.colors.primary + "30",
              }}
            >
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .glitch-wrapper:hover .glitch-text::before,
        .glitch-wrapper:hover .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          overflow: hidden;
        }

        .glitch-wrapper:hover .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 ${THEME.colors.primary};
          clip: rect(auto, auto, auto, auto);
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }

        .glitch-wrapper:hover .glitch-text::after {
          left: -2px;
          text-shadow: 2px 0 ${THEME.colors.accent};
          clip: rect(auto, auto, auto, auto);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
          0%, 100% { clip-path: inset(0 0 95% 0); }
          25% { clip-path: inset(20% 0 30% 0); }
          50% { clip-path: inset(80% 0 5% 0); }
          75% { clip-path: inset(40% 0 45% 0); }
        }

        @keyframes glitch-anim-2 {
          0%, 100% { clip-path: inset(90% 0 1% 0); }
          25% { clip-path: inset(30% 0 60% 0); }
          50% { clip-path: inset(10% 0 80% 0); }
          75% { clip-path: inset(60% 0 20% 0); }
        }
      `}</style>
    </>
  );
}