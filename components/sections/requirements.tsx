// components/sections/requirements.tsx
"use client";

import type React from "react";
import { useState } from "react";

import { REQUIREMENTS_DATA } from "@/lib/requirements-data";
import { THEME } from "@/lib/theme";

import AnimatedElement from "../ui/about/AnimatedElement";
import RequirementCodeItem from "../ui/requirements/RequirementCodeItem";
import AnimatedTextReveal from "../ui/AnimatedTextReveal";

export default function RequirementsSection() {

  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(0);

  const handleItemSelect = (index: number) => {
    setActiveItemIndex(activeItemIndex === index ? null : index);
  };

  const animationDelayBase = 0.5;

  return (
    <>
      <section
        className="min-h-screen bg-black py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        id="requirements"
      >


        <div className="scanline-overlay absolute inset-0 z-10 pointer-events-none" />

        <div
          className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ backgroundColor: `${THEME.colors.primary}10` }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ backgroundColor: `${THEME.colors.accent}10` }}
        />

        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <AnimatedElement delay={0} className="mb-16 text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 md:justify-start justify-center">
              <div
                className="w-1 h-10 bg-linear-to-b from-primary to-accent"
                style={{
                  background: `linear-gradient(to bottom, ${THEME.colors.primary}, ${THEME.colors.accent})`,
                }}
              />
              <span
                className="text-xs font-pixel tracking-widest uppercase font-bold text-primary"
                style={{ letterSpacing: "0.3em", color: THEME.colors.primary }}
              >
                Requirements
              </span>
            </div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-pixel tracking-tight uppercase leading-tight mb-6"
              style={{
                color: THEME.colors.white,
                WebkitTextStroke: `1px ${THEME.colors.primary}`,
                letterSpacing: "0.05em",
              }}
            >
              <AnimatedTextReveal
                text="Are You Ready?"
                delay={animationDelayBase}
                wordByWord
                className="block"
              />
            </h2>

            <p className="text-gray-300 font-pixel text-sm md:text-base max-w-2xl md:max-w-none mx-auto md:mx-0 text-center md:text-left">
              <AnimatedTextReveal
                text="Here's what we look for in our new recruits."
                delay={animationDelayBase + 0.5}
                duration={0.015}
                className="block"
              />
            </p>
          </AnimatedElement>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {REQUIREMENTS_DATA.map((item, index) => (
              <RequirementCodeItem
                key={item.title}
                index={index}
                title={item.title}
                description={item.description}
                isActive={activeItemIndex === index}
                onSelect={handleItemSelect}
                animationDelay={animationDelayBase + 1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scanline-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(255, 255, 255, 0.02) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          background-size: 100% 4px;
          animation: scanline-anim 10s linear infinite;
        }

        @keyframes scanline-anim {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 200px;
          }
        }
      `}</style>
    </>
  );
}