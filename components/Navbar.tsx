"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl text-white"
        >
          Gajanan Gadakare
        </motion.div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 text-zinc-300 text-xl">
          <Link href="#hero" className="hover:text-white transition">About</Link>
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="#certifications" className="hover:text-white transition">Certifications</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#contact" className="hover:text-white transition">Connect</Link>
        </nav>

        {/* Download Resume */}
        <motion.a
          href="/resume/Gajanan_Gadakare_Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          className="bg-purple-900 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          Get My Resume
        </motion.a>
      </div>
    </header>
  );
}
