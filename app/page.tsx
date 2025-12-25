import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Internships from "@/components/Internships";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="space-y-40 px-4 md:px-4">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Internships/>
      <Projects />
      <Contact />
      <Footer/>
    </main>
  );
}
