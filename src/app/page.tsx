import DashboardShell from "@/components/layout/DashboardShell";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import WhatIBuild from "@/components/sections/WhatIBuild";
import HowIBuild from "@/components/sections/HowIBuild";
import Approach from "@/components/sections/Approach";
import MoreThanCode from "@/components/sections/MoreThanCode";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <DashboardShell>
      <Hero />
      <Stats />
      <Projects />
      <WhatIBuild />
      <HowIBuild />
      <MoreThanCode />
      <Services />
      <About />
      <Experience />
      <Skills />
      <Approach />
      <Certifications />
      <Contact />
      <Footer />
    </DashboardShell>
  );
}
