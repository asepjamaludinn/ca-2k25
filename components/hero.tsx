import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-8 py-20 relative overflow-hidden">
      {/* Grid Background */}
      <Image
        src="/images/grid.svg"
        alt="Grid Background"
        fill
        priority
        className="object-cover opacity-40 pointer-events-none select-none"
      />

      {/* Heading */}
      <h1
        className="text-6xl md:text-7xl font-black text-center mb-8 relative z-10"
        style={{
          color: "white",
          WebkitTextStroke: "1px #B3005E",
          letterSpacing: "0.05em",
        }}
      >
        Welcome To
        <br />
        Cyber Academy
      </h1>

      {/* Subtitle */}
      <p className="text-white text-center text-lg md:text-xl mb-12 tracking-wider relative z-10">
        ARE YOU READY?, IT'S TIME TO SET A NEW HIGH SCORE!
      </p>

      {/* Button */}
      <button className="border-2 border-[#B3005E] bg-black text-[#B3005E] px-8 py-3 font-orbitron text-base hover:bg-[#FF1493] hover:text-black transition duration-300 relative z-10">
        Let's Get Started
      </button>

      {/* Gradient Full-Width di bawah */}
      <div className="absolute bottom-0 left-0 w-screen h-32 bg-gradient-to-t from-[#B3005E] via-[#4D0040] to-[#000000] z-0" />
    </section>
  );
}
