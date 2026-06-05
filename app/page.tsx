import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/Education";
import Certification from "@/components/Certification";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-slate-100">
      <Hero />
      <About />
      <Experience />
      <section className="px-4 py-16 md:py-24" aria-label="Education and certification">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300 sm:text-sm">
              Credentials
            </p>
            <h2 className="text-2xl font-black text-white sm:text-3xl md:text-5xl">
              Education and certification.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Education />
            <Certification />
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
