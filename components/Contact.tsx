"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      type: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      type: "Phone",
      value: "+123 456 7890",
      href: "tel:+1234567890",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://www.linkedin.com/in/yourprofile",
      icon: <FaLinkedin />,
    },
    {
      type: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      icon: <FaGithub />,
    },
    {
      type: "Twitter",
      value: "@yourhandle",
      href: "https://twitter.com/yourhandle",
      icon: <FaTwitter />,
    },
  ];

  return (
    <section className="pb-32">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Contact Me
      </h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((item) => (
          <motion.a
            key={item.type}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-purple-900 p-6 rounded-xl shadow-lg flex items-center space-x-4 transition-transform duration-300"
          >
            {item.icon && (
              <span className="text-2xl text-blue-400">{item.icon}</span>
            )}
            <div>
              <h3 className="text-lg font-medium text-slate-100">{item.type}</h3>
              <p className="text-slate-400 mt-1">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
