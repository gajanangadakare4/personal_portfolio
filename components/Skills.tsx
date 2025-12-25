"use client";
import Image from "next/image";

const programmingLanguages = [
  { title: "HTML", img: "/images/techs/html.png" },
  { title: "CSS", img: "/images/techs/css.png" },
  { title: "JavaScript", img: "/images/techs/js.png" },
  { title: "Bootstrap", img: "/images/techs/bootstrap.png" },
  { title: "Tailwind", img: "/images/techs/tailwind.png" },
  { title: "C/C++", img: "/images/techs/c.png" },
  { title: "Java", img: "/images/techs/java_1.png" },
  { title: "Python", img: "/images/techs/python_1.png" },
];

const technologies = [
  { title: "ReactJS", img: "/images/techs/reactjs.png" },
  { title: "NodeJS", img: "/images/techs/nodejs.png" },
  { title: "ExpressJS", img: "/images/techs/expressjs.png" },
  { title: "MongoDB", img: "/images/techs/mongodb.png" },
  { title: "PostgreSQL", img: "/images/techs/postgresql_1.png" },
  { title: "MySQL", img: "/images/techs/mysql.png" },
  { title: "AWS Cloud", img: "/images/techs/aws.png" },
  { title: "Linux", img: "/images/techs/linux.png" },
  { title: "Docker", img: "/images/techs/docker.png" },
  { title: "Terraform", img: "/images/techs/terraform.png" },
  { title: "Ansible", img: "/images/techs/ansible.png" },
  { title: "Jenkins", img: "/images/techs/jenkins.png" },
];

const ethicalHackingTools = [
  { title: "Kali Linux", img: "/images/techs/kali_linux.png" },
  { title: "Nmap", img: "/images/techs/nmap.png" },
  { title: "Metasploit", img: "/images/techs/metasploit.png" },
  { title: "Burp Suite", img: "/images/techs/burpsuite.png" },
  { title: "Wireshark", img: "/images/techs/wireshark_1.png" },
  { title: "SQLmap", img: "/images/techs/sqlmap.png" },
];

export default function Skills() {
  const renderCards = (items: { title: string; img: string }[]) => (
    
    <div className="grid md:grid-cols-3 gap-6  ">
      {items.map((skill) => (
        <div
          key={skill.title}
          className="h-64 p-6 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 text-center flex flex-col justify-between"
        >
          {/* Image Container */}
          <div className="flex justify-center items-center h-40">
            <Image
              src={skill.img}
              alt={skill.title}
              width={200}
              height={200}
              className="rounded-xl"
            />
          </div>

          {/* Title at Bottom */}
          <h3 className="text-lg font-medium text-slate-100 mt-4">
            {skill.title}
          </h3>
        </div>
      ))}
    </div>
  );

  return (
    <section  id="skills" className="py-16">
      <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>

      {/* Programming Languages */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Programming Languages
        </h3>
        {renderCards(programmingLanguages)}
      </div>

      {/* Technologies & Tools */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Technologies & Tools
        </h3>
        {renderCards(technologies)}
      </div>

      {/* Ethical Hacking Tools */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Ethical Hacking Tools
        </h3>
        {renderCards(ethicalHackingTools)}
      </div>
    </section>
  );
}
