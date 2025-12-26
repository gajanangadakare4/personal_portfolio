"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const contacts = [
  {
    type: "Email",
    value: "gajanangadakare4@gmail.com",
    href: "mailto:gajanangadakare4@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    type: "Phone",
    value: "+91 9980150841",
    href: "tel:+919980150841",
    icon: <FaPhoneAlt />,
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/gajanan-gadakare",
    href: "https://www.linkedin.com/in/gajanan-gadakare",
    icon: <FaLinkedin />,
  },
  {
    type: "GitHub",
    value: "github.com/gajanangadakare",
    href: "https://github.com/gajanangadakare",
    icon: <FaGithub />,
  },
];

export default function Contact() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="contact" className="pb-32">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Connect With Me
      </h2>

      {/* Flip Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contacts.map((item, index) => (
          <div key={item.type} className="perspective">
            <motion.div
              onClick={() =>
                setFlipped(flipped === index ? null : index)
              }
              animate={{
                rotateY: flipped === index ? 180 : 0,
              }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="relative h-40 w-full cursor-pointer transform-style-preserve-3d"
            >
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center rounded-xl border border-purple-800/40 bg-black/40">
                <div className="text-3xl text-purple-400 mb-2">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-slate-100">
                  {item.type}
                </h3>
                <span className="text-xs text-zinc-400 mt-1 md:hidden">
                  Tap to view
                </span>
              </div>

              {/* Back Side */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center rounded-xl bg-purple-900/30 border border-purple-700 text-center px-4"
              >
                <p className="text-sm text-slate-200 break-all">
                  {item.value}
                </p>
                <span className="mt-2 text-xs text-purple-400">
                  Open
                </span>
              </a>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Warrior Quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center text-lg md:text-xl text-zinc-300 font-medium italic"
      >
        “Code is my weapon,I fight bugs, break limits, and build systems that endure
        on the battlefield of problems.”
      </motion.p>
    </section>
  );
}
