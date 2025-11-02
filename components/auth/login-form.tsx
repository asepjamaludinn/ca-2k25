"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { AuthFormField } from "./auth-form-field";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    // TODO: Tambahkan logika autentikasi yang sebenarnya
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <AuthFormField
        label="Username"
        id="username"
        type="text"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <AuthFormField
        label="Password"
        id="password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full border-2 border-[#B3005E] bg-[#B3005E] text-white px-8 py-3 font-pixel text-base hover:bg-[#FF1493] transition duration-300 mt-8"
      >
        Log In
      </button>

      {/* Links */}
      <div className="space-y-2 text-center pt-2">
        <p className="text-white text-sm font-orbitron">
          Belum daftar?{" "}
          <Link
            href="/daftar"
            className="text-[#FF1493] hover:text-white transition duration-300 font-bold"
          >
            Daftar
          </Link>
        </p>
        <Link
          href="/"
          className="block text-[#B3005E] hover:text-[#FF1493] transition duration-300 font-orbitron text-sm"
        >
          Back to Home
        </Link>
      </div>
    </form>
  );
}
