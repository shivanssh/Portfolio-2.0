import Link from "next/link";
import {
  About,
  Contact,
  Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from "../components";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-grey-500 scrollbar-thumb-[#F7AB0A]/40"
    >
      <Header />
      <main>
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        {/* Contact me */}
        <section id="contact" className="snap-end">
          <Contact />
        </section>
      </main>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img src="computer.jpg" alt="no alt" className="h-7 w-7 rounded-full opacity-60 hover:opacity-100 " />
          </div>
        </footer>
      </Link>
    </div>
  );
}
