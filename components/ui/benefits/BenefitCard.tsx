"use client";

import type React from "react";
// Impor komponen animasi terpusat kita
import AnimatedElement from "../about/AnimatedElement";

interface BenefitCardProps {
  title: string;
  description: string;
  accentColor: string;
  className?: string;
  delay: number;
}

export default function BenefitCard({
  title,
  description,
  accentColor,
  className,
  delay,
}: BenefitCardProps) {
  return (
    <AnimatedElement delay={delay} className={className}>
      {/* 'group' di sini memungkinkan kita mengontrol elemen anak saat hover 
      */}
      <div
        className="
          group relative h-full rounded-lg border border-white/10
          bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm
          p-6 flex flex-col justify-between overflow-hidden
          transition-all duration-300 ease-out
          
          /* Efek Shadow/Glow Awal */
          shadow-[0_0_20px_var(--shadow-color-light)]
          
          /* Efek saat Hover */
          hover:-translate-y-2
          hover:shadow-[0_0_40px_var(--shadow-color-heavy)]
          hover:border-white/20
        "
        style={
          {
            "--accent-color": accentColor,
            "--shadow-color-light": `${accentColor}10`,
            "--shadow-color-heavy": `${accentColor}40`,
          } as React.CSSProperties
        }
      >
        {/* === BAGIAN ATAS (SELALU TERLIHAT) === */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3
              className="text-lg font-pixel tracking-widest uppercase text-white pr-4"
              style={{ letterSpacing: "0.1em" }}
            >
              {title}
            </h3>
            <div
              className="text-3xl transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
              style={{ color: "var(--accent-color)" }}
            >
              ◆
            </div>
          </div>
        </div>

        {/* === BAGIAN BAWAH (MUNCUL SAAT HOVER) === */}
        <div
          className="
            transition-all duration-500 ease-out
            overflow-hidden 
            
            /* Sembunyikan konten secara default */
            opacity-0 max-h-0 
            
            /* Tampilkan konten saat 'group' (kartu) di-hover */
            group-hover:opacity-100 group-hover:max-h-40
          "
        >
          <p className="text-sm text-gray-300 leading-relaxed font-sans mt-2">
            {description}
          </p>
          
          {/* Garis Aksen Bawah */}
          <div className="mt-4 h-1 w-1/3 rounded-full bg-[var(--accent-color)]" />
        </div>
      </div>
    </AnimatedElement>
  );
}