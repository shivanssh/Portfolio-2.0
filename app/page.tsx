import { Header, Hero } from "../components";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="span-center">
        <Hero />
      </section>
    </div>
  );
}
