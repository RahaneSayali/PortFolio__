import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import WhyHireMe from "@/components/WhyHireMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Testimonials from "@/components/Testimonials";
import Leadership from "@/components/Leadership";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <WhyHireMe />
      <Skills />
      <Experience />
      <Projects />
      <GitHubStats />
      <Testimonials />
      <Leadership />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}
