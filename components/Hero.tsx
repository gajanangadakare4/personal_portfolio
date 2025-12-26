"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full max-w-7xl min-h-[85vh] flex items-center justify-center overflow-hidden rounded-3xl"
      style={{
        backgroundImage: "url('/images/profile_1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          Gajanan Gadakare
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-zinc-300 leading-relaxed"
        >
          Hands-on Full-Stack Developer with experience building scalable web
          applications. Strong foundation in modern frontend and backend
          technologies. Actively expanding expertise in Cybersecurity and AI/ML.
          Passionate about leveraging cloud computing for secure, high-performance
          solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg text-zinc-300"
        >
          Successfully graduated from Manipal University Jaipur.
        </motion.p>
      </div>
    </section>
  );
}
