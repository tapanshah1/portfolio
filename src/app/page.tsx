import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Architecture from "@/components/Architecture";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#090a0f]">
      <Navbar />
      <Hero />
      <Experience />
      <Architecture />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
