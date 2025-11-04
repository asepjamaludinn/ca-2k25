"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { BENEFITS_DATA } from "@/lib/benefits-data";
import { THEME } from "@/lib/theme";
import { motion, Variants } from "framer-motion";

// AnimatedElement (Disederhanakan, hanya untuk fade-in)
interface AnimatedElementProps {
  children: React.ReactNode;
  delay: number;
  className?: string; // Tetap perlu untuk gridSpan
}

function AnimatedElement({ children, delay, className }: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className || ""}`} // Terapkan className di sini
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// === PERBAIKAN UTAMA DI SINI ===
interface BenefitCardProps {
  title: string;
  description: string;
  accentColor: string;
  gridSpan: string;
  delay: number;
}

function BenefitCard({
  title,
  description,
  accentColor,
  gridSpan,
  delay,
}: BenefitCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // 1. AnimatedElement membungkus semuanya, dan mengambil gridSpan
    <AnimatedElement delay={delay} className={gridSpan}>
      {/* 2. Div ini HANYA untuk perspective dan cursor */}
      <div
        className="relative h-full min-h-[240px] cursor-pointer"
        style={{ perspective: "1000px" }}
      >
        {/* 3. motion.div MENERIMA onClick dan melakukan animasi */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          onClick={() => setIsFlipped(!isFlipped)} // <-- onClick DIPINDAH KE SINI
        >
          {/* SISI DEPAN KARTU */}
          <div
            className="absolute inset-0 w-full h-full rounded-lg border border-white/10 bg-linear-to-br from-white/2 to-white/1 backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-500"
            style={{
              backfaceVisibility: "hidden",
              boxShadow: isFlipped
                ? `0 0 40px ${accentColor}40, inset 0 0 40px ${accentColor}20`
                : `0 0 20px ${accentColor}10`,
            }}
          >
            <div className="flex items-start justify-between">
              <div
                className="text-3xl md:text-4xl transition-all duration-500"
                style={{ color: accentColor, opacity: 0.7 }}
              >
                ◆
              </div>
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 8px ${accentColor}`,
                }}
              />
            </div>
            <h3
              className="text-lg font-pixel tracking-widest uppercase shrink-0"
              style={{
                color: "#FFFFFF",
                letterSpacing: "0.1em",
              }}
            >
              {title}
            </h3>
          </div>

          {/* SISI BELAKANG KARTU */}
          <div
            className="absolute inset-0 w-full h-full rounded-lg border border-white/30 bg-linear-to-br from-white/5 to-white/3 backdrop-blur-sm p-6 flex flex-col justify-between"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: `0 0 40px ${accentColor}40, inset 0 0 40px ${accentColor}20`,
            }}
          >
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              {description}
            </p>
            <div className="mt-8 flex gap-2">
              {[
                ...Array(
                  title === "Poin TAK" || title === "Portfolio" ? 4 : 3
                ),
              ].map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 transition-all duration-500 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${accentColor}, transparent)`,
                    opacity: 1,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedElement>
  );
}

export default function BenefitsSection() {
  return (
    <section
      className="min-h-screen bg-black py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="benefits"
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(179, 0, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(179, 0, 94, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="absolute top-32 -left-40 w-80 h-80 bg-[#B3005E]/8 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#00D9FF]/8 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedElement delay={0} className="mb-20 text-center md:text-left">
          <div className="flex items-center gap-3 mb-6 md:justify-start justify-center">
            <div className="w-1 h-10 bg-linear-to-b from-[#00D9FF] via-[#B3005E] to-[#B3005E]" />
            <span
              className="text-xs font-pixel text-[#B3005E] tracking-widest uppercase font-bold"
              style={{ letterSpacing: "0.3em" }}
            >
              Premium Benefits
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-pixel tracking-tight uppercase leading-tight mb-6"
            style={{
              background:
                "linear-gradient(135deg, #B3005E, #FF006E, #00D9FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.05em",
            }}
          >
            Unlock Your Potential
          </h2>

          <p className="text-gray-300 font-sans text-sm md:text-base max-w-2xl md:max-w-none mx-auto md:mx-0 text-center md:text-left">
            Access exclusive benefits designed to accelerate your
            cybersecurity career growth
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {BENEFITS_DATA.map((item, index) => (
            <BenefitCard
              key={item.title || index}
              title={item.title || "Benefit"}
              description={item.description || "No description."}
              accentColor={item.color || THEME.colors.primary}
              gridSpan="col-span-1"
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}