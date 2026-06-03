import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Vijay Saharan. Built with Next.js + Framer Motion.
      </footer>
    </main>
  );
}
