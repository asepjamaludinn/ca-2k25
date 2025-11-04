"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import TextPressure from "../TextPressure";
import { THEME } from "@/lib/theme";
import { motion, Variants } from "framer-motion";

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

interface AnimatedTextProps {
  text: string;
  className: string;
}

function AnimatedText({ text, className }: AnimatedTextProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

interface FeatureBoxProps {
  title: string;
  description: string;
  delay: number;
}

function FeatureBox({ title, description, delay }: FeatureBoxProps) {
  return (
    <AnimatedElement delay={delay}>
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 h-full">
        <div
          className="absolute left-0 top-0 h-full w-px"
          style={{
            background: `linear-gradient(to bottom, ${THEME.colors.primary} 0%, transparent 100%)`,
          }}
        />
        <div className="text-center md:text-left">
          <h4 className="font-pixel text-base text-white mb-2 tracking-wide">
            {title}
          </h4>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </AnimatedElement>
  );
}

export default function AboutSection() {
  const arcadeWelcomeText =
    "Welcome to the Cyber Academy, where learning transforms into an extraordinary adventure! Here, innovation isn't just a feature, it's the game engine. Teamwork is at the heart of every 'co-op mission' we do, and every new member helps build our vibrant world of knowledge. This is your chance to level up your skills, discover hidden 'easter eggs' in technology, and forge endless possibilities. Are you ready to press start and achieve a new high score?";

  return (
    <section
      id="about"
      className="min-h-screen bg-black pt-32 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <AnimatedElement delay={0}>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
              <div
                className="w-1 h-6"
                style={{
                  background: `linear-gradient(to bottom, ${THEME.colors.primary}, ${THEME.colors.accent})`,
                }}
              />
              <span
                className="text-sm font-pixel text-gray-400 tracking-widest"
                style={{ letterSpacing: "0.2em" }}
              >
                ABOUT US
              </span>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={100}>
            <div className="relative w-full mb-16">
              <TextPressure
                text="Cyber Academy"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#FFFFFF"
                strokeColor={THEME.colors.primary}
                minFontSize={48}
              />
            </div>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left">
            <AnimatedElement delay={200}>
              <h3
                className="text-2xl font-pixel tracking-wider"
                style={{ color: THEME.colors.primary }}
              >
                YOUR QUEST BEGINS
              </h3>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <AnimatedText
                text={arcadeWelcomeText}
                className="text-base text-gray-300 max-w-xl leading-relaxed tracking-wide font-sans"
              />
            </AnimatedElement>
          </div>

          <div className="flex flex-col gap-6">
            <FeatureBox
              title="INNOVATION ENGINE"
              description="We don't just follow trends. You'll build the 'game engine' for what's next."
              delay={500}
            />
            <FeatureBox
              title="CO-OP MISSIONS"
              description="Teamwork is our core loop. Grow together in a vibrant, high-score community."
              delay={600}
            />
            <FeatureBox
              title="LEVEL UP YOUR SKILLS"
              description="This isn't just a journey; it's a skill tree. Unlock your full potential."
              delay={700}
            />
          </div>
        </div>

        <AnimatedElement delay={900}>
          <div className="group relative p-10 md:p-16 rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.02] via-white/[0.01] to-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-white/30 hover:bg-white/[0.04]">
            <div
              className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl -z-10"
              style={{
                background: `radial-gradient(${THEME.colors.accent} 0%, transparent 70%)`,
                opacity: 0.15,
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl -z-10"
              style={{
                background: `radial-gradient(${THEME.colors.primary} 0%, transparent 70%)`,
                opacity: 0.15,
              }}
            />

            <div className="text-center">
              <h3
                className="text-base md:text-lg font-pixel text-white mb-6 tracking-widest uppercase"
                style={{ letterSpacing: "0.15em" }}
              >
                Begin Your Journey
              </h3>
              <p className="text-base text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed font-sans">
                Join industry leaders and aspiring professionals in our
                transformative programs designed for the modern era.
              </p>
              <button
                className="relative px-8 py-3 font-pixel rounded-lg overflow-hidden
                           transition-all duration-300 ease-out 
                           uppercase text-xs tracking-widest text-black
                           transform-gpu 
                           hover:scale-105 
                           hover:shadow-[0_0_30px_#00D9FF50,inset_0_0_20px_#FFFFFF20]
                           active:scale-95"
                style={{
                  background: `linear-gradient(135deg, #00D9FF, ${THEME.colors.primary})`,
                  letterSpacing: "0.15em",
                }}
              >
                <span className="relative z-10">Explore Programs</span>
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}