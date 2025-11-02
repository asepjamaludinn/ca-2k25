"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import MagicBento from "@/components/MagicBento";
import { COURSES_DATA } from "@/lib/courses-data";

interface AnimatedElementProps {
  children: React.ReactNode;
  delay: number;
}

function AnimatedElement({ children, delay }: AnimatedElementProps) {
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
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section
      className="min-h-screen bg-black py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      id="courses"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.004] pointer-events-none">
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

      {/* Animated accent circles */}
      <div className="absolute top-32 -left-40 w-80 h-80 bg-[#00D9FF]/8 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#B3005E]/8 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <AnimatedElement delay={0}>
          <div className="mb-20 text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 md:justify-start justify-center">
              <div className="w-1 h-10 bg-gradient-to-b from-[#00D9FF] via-[#B3005E] to-[#B3005E]" />
              <span
                className="text-xs font-pixel text-[#00D9FF] tracking-widest uppercase font-bold"
                style={{ letterSpacing: "0.3em" }}
              >
                Featured Courses
              </span>
            </div>

            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-pixel tracking-tight uppercase leading-tight mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #00D9FF, #B3005E, #FF006E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
              }}
            >
              Master Tech Skills
            </h2>

            <p className="text-gray-300 font-light text-sm md:text-base max-w-2xl md:max-w-none">
              Comprehensive courses in cybersecurity, web development, AI, and
              IoT designed for ambitious learners
            </p>
          </div>
        </AnimatedElement>

        {/* MagicBento Grid */}
        <div className="flex justify-center mb-24 w-full">
          <div className="w-full max-w-6xl">
            <MagicBento
              items={COURSES_DATA}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              clickEffect={true}
              enableMagnetism={false}
              glowColor="0, 217, 255"
              spotlightRadius={400}
              textAutoHide={false}
              particleCount={12}
              disableAnimations={false}
            />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <AnimatedElement delay={600}>
          <div className="mt-24 text-center">
            <p
              className="text-xs font-pixel text-gray-400 mb-8 tracking-widest uppercase mb-12"
              style={{ letterSpacing: "0.2em" }}
            >
              Level Up Your Skills
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                className="relative px-14 py-4 font-pixel rounded-xl overflow-hidden group/btn transition-all duration-500 uppercase text-xs tracking-widest hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #00D9FF, #B3005E)",
                  color: "#000000",
                  letterSpacing: "0.15em",
                  boxShadow:
                    "0 0 30px #00D9FF60, 0 0 15px #B3005E40, inset 0 0 20px #FFFFFF10",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 50px #00D9FFA0, 0 0 25px #B3005EA0, inset 0 0 30px #FFFFFF30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px #00D9FF60, 0 0 15px #B3005E40, inset 0 0 20px #FFFFFF10`;
                }}
              >
                <span className="relative z-10">Explore Courses</span>
              </button>

              <button
                className="relative px-14 py-4 font-pixel rounded-xl overflow-hidden group/btn transition-all duration-500 uppercase text-xs tracking-widest hover:scale-105 active:scale-95 border border-[#B3005E]/50 hover:border-[#B3005E] text-[#B3005E]"
                style={{
                  boxShadow: "0 0 20px #B3005E30, inset 0 0 20px #B3005E05",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px #B3005E70, inset 0 0 30px #B3005E15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px #B3005E30, inset 0 0 20px #B3005E05`;
                }}
              >
                <span className="relative z-10">View Syllabus</span>
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
