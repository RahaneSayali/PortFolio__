import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import SystemDesign from "@/components/SystemDesign";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Leadership />
      <Projects />
      <SystemDesign />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
