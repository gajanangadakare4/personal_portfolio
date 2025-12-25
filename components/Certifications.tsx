"use client";
import Image from "next/image";

const certifications = [
  {
    title: "AWS Cloud Solutions Architect",
     img: "/images/aws.png",
  },
  
  {
    title: "Full Stack Developer",
     img: "/images/fullstack_developer.png",
  },
  {
    title: "Certified Ethical Hacker - CEH",
     img: "/images/ethical_hacker.png",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
     img: "/images/ai_ml.png",
  },

  {
    title: "Google Cybersecuirty",
     img: "/images/google_cybersecuirty.png",
  },

  {
    title: "Certified Information System Security Professional (CISSP)",
    img: "/images/cissp.png",
  },
  
  
];

export default function Certifications() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8 text-center">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="  p-6 rounded-xl   cursor-pointer transition-transform duration-300 hover:scale-105 text-center"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={cert.img}
                alt={cert.title}
                width={300}
                height={300}
                className="rounded-xl"
                 
              />
            </div>
            <h3 className="text-lg font-medium text-slate-100">{cert.title}</h3>
            {/* <p className="text-slate-400 mt-2">{cert.desc}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
