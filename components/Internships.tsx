"use client";
import Image from "next/image";

const internships = [
  {
    role: "Frontend Developer - Intern",
    company: "Auroskkill Pvt Ltd",
    duration: "Feb 2025 – Apr 2025",
    desc: "Contributed to the development of responsive and user-friendly web interfaces using React. Collaborated with backend teams to integrate RESTful APIs, followed component-based architecture, and ensured cross-browser compatibility while adhering to modern frontend best practices.",
    img: "/images/internships/auroskkill.png",
  },
  {
    role: "Full Stack Developer - Intern",
    company: "NovaNectar Services Private Limited",
    duration: "May 2025 – Aug 2025",
    desc: "Worked across the full software development life cycle, developing backend services using Node.js and Express, integrating databases, and implementing basic security practices. Gained exposure to secure coding principles, application logic design, and deployment workflows.",
    img: "/images/internships/nova.png",
  },
];

export default function Internships() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Internships
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {internships.map((internship) => (
          <div
            key={internship.role}
            className="p-6 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="mb-4 flex justify-center">
              <Image
                src={internship.img}
                alt={internship.role}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-medium text-slate-100 text-center">
              {internship.role}
            </h3>

            <p className="text-slate-400 text-center mt-1">
              {internship.company}
            </p>

            <p className="text-sm text-slate-500 text-center mt-1">
              {internship.duration}
            </p>

            <p className="text-slate-300 mt-4 text-center">
              {internship.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
