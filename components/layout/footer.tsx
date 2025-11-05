// components/layout/Footer.tsx
"use client";

import Image from "next/image"; // <-- 'Image' (I besar)
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    // 'bg-black' di sini sudah membuat background hitam solid
    <footer className="bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* === Bagian Atas Footer === */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Sisi Kiri: Logo dan Alamat */}
          <div className="flex-1">
            <Link href="/" aria-label="Home">
              <Image
                src="/images/logocps.png" // Path dari folder public
                alt="Cyber Physical System Laboratory Logo"
                width={200}
                height={40}
                className="h-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Telkom University Landmark Tower (13.12)
              <br />
              Bandung, Jawa Barat
            </p>
          </div>

          {/* Sisi Kanan: Contact Us */}
          <div className="flex-1 md:flex-none">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="flex items-center gap-5">
              <a
                href="httpsOfInstagram" // GANTI LINK
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="httpsOfLinkedIn" // GANTI LINK
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:email@example.com" // GANTI EMAIL
                aria-label="Email"
                className="transition-colors hover:text-white"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* === Garis Pemisah === */}
        <hr className="border-white/10 my-12" />
        
        {/* === Bagian Bawah Footer === */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Cyber Physical System
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}