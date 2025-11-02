"use client";

import Image from "next/image";

export default function Background() {
  return (
    <>
      {/* Grid Background */}
      <Image
        src="/images/grid.svg"
        alt="Grid Background"
        fill
        priority
        className="object-cover opacity-40 pointer-events-none select-none"
      />

      {/* Gradient Atas */}
      <div className="absolute top-0 left-0 w-screen h-32 bg-gradient-to-b from-[#B3005E] via-[#4D0040] to-[#000000] z-0 pointer-events-none" />

      {/* Gradient Bawah */}
      <div className="absolute bottom-0 left-0 w-screen h-32 bg-gradient-to-t from-[#B3005E] via-[#4D0040] to-[#000000] z-0 pointer-events-none" />
    </>
  );
}
