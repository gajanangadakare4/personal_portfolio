"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="pb-32"  id="contact">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Connect With Me
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contacts.map((item) => (
          <div key={item.type} className="perspective">
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="relative h-40 w-full transform-style-preserve-3d"
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center rounded-xl border border-purple-800/40">
                <div className="text-3xl text-purple-400 mb-2">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-slate-100">
                  {item.type}
                </h3>
              </div>

              {/* Back */}
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
                  Click to open
                </span>
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
