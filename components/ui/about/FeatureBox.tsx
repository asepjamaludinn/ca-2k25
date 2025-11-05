"use client";

import { THEME } from "@/lib/theme";
import AnimatedElement from "./AnimatedElement";

interface FeatureBoxProps {
  title: string;
  description: string;
  delay: number;
}

export default function FeatureBox({
  title,
  description,
  delay,
}: FeatureBoxProps) {
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