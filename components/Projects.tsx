"use client";
import Image from "next/image";

const projects = [
  {
    title: "Secure Portfolio Platform",
    desc: "Portfolio site with authentication and security best practices.",
    img: "/images/Project/portfolio.png",
  },
  {
    title: "Full-Stack E-Commerce App",
    desc: "React, Node.js, and database integration for online shopping.",
    img: "/images/Project/ecommerce.png",
  },
  {
    title: "ML Prediction System",
    desc: "Predictive model for data classification and analysis.",
    img: "/images/Project/ml.png",
  },
  {
    title: "Network Vulnerability Scanner",
    desc: "Detects common vulnerabilities in enterprise networks.",
    img: "/images/Project/network.png",
  },
  // {
  //   title: "Ethical Hacking Lab",
  //   desc: "Hands-on penetration testing and security assessment.",
  //   img: "/images/hackinglab.png",
  // },
];

export default function Projects() {
  return (
    <section  id="projects">
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 text-center"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={160}
                className="rounded-md"
              />
            </div>
            <h3 className="text-xl font-medium text-slate-100">{project.title}</h3>
            <p className="text-slate-400 mt-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
