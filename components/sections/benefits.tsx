"use client";

import type React from "react";
import { BENEFITS_DATA } from "@/lib/benefits-data";
import { THEME } from "@/lib/theme";

import AnimatedElement from "../ui/about/AnimatedElement";
import BenefitCard from "../ui/benefits/BenefitCard";

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
            <div className="w-1 h-10 bg-gradient-to-b from-[#00D9FF] via-[#B3005E] to-[#B3005E]" />
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
              color: THEME.colors.white,
              WebkitTextStroke: `1px ${THEME.colors.primary}`,
              letterSpacing: "0.05em",
            }}
          >
            Unlock Your Potential
          </h2>

          <p className="text-gray-300 font-pixel text-sm md:text-base max-w-2xl md:max-w-none mx-auto md:mx-0 text-center md:text-left">
            Access exclusive benefits designed to accelerate your cybersecurity
            career growth
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {BENEFITS_DATA.map((item, index) => (
            <BenefitCard
              key={item.title || index}
              title={item.title || "Benefit"}
              description={item.description || "No description."}
              accentColor={item.color || THEME.colors.primary}
              className="col-span-1"
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}