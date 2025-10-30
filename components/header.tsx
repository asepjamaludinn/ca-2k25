import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-[#B3005E] via-[#4D0040] to-[#000000] px-8 py-6 flex justify-center">
      <div className="mt-4 max-w-7xl w-full bg-[#FF1493] text-white rounded-lg px-6 py-4 flex items-center justify-between shadow-[0_0_20px_#FF1493]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Cyber Academy Logo"
            width={56}
            height={56}
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 justify-center flex-1">
          <a href="#" className="text-sm hover:opacity-80 transition">
            Home
          </a>
          <a href="#" className="text-sm hover:opacity-80 transition">
            About
          </a>
          <a href="#" className="text-sm hover:opacity-80 transition">
            Benefit
          </a>
          <a href="#" className="text-sm hover:opacity-80 transition">
            Course
          </a>
          <a href="#" className="text-sm hover:opacity-80 transition">
            Requirement
          </a>
          <a href="#" className="text-sm hover:opacity-80 transition">
            Medpart
          </a>
        </nav>

        {/* Login Button */}
        <button className="border-2 border-white bg-transparent text-white px-6 py-2 text-sm hover:bg-white hover:text-[#FF1493] transition">
          Login
        </button>
      </div>
    </header>
  );
}
