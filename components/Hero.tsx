"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/images/profile_1.png"
            alt="Gajanan M Gadakare"
            width={400}
            height={300}
            className="rounded-3xl shadow-xl "
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl lg:text-5.9xl font-bold leading-tight"
          >
            Gajanan Gadakare
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-zinc-400 max-w-xl"
          >
            Hands-on Full-Stack Developer with experience building scalable web
            applications. Strong foundation in modern frontend and backend
            technologies. Actively expanding expertise in Cybersecurity and
            AI/ML. Passionate about leveraging cloud computing for secure,
            high-performance solutions.
          </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-zinc-400 max-w-xl"
          >
            Successfully Graduated From Manipal University Jaipur...
          </motion.p>
        </div>
      </div>
    </section>
  );
}
