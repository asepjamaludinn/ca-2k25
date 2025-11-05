"use client";

import type React from "react";

import { THEME } from "@/lib/theme";
import { ABOUT_DATA } from "@/lib/about-data";
import TextPressure from "../TextPressure";
import AnimatedElement from "../ui/about/AnimatedElement";
import AnimatedText from "../ui/about/AnimatedText";
import FeatureBox from "../ui/about/FeatureBox";

export default function AboutSection() {

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
                text={ABOUT_DATA.welcomeText}
                className="text-base text-gray-300 max-w-xl leading-relaxed tracking-wide font-sans"
              />
            </AnimatedElement>
          </div>

          <div className="flex flex-col gap-6">
            {ABOUT_DATA.features.map((feature, index) => (
              <FeatureBox
                key={feature.title}
                title={feature.title}
                description={feature.description}
                delay={500 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}