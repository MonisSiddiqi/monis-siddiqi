import { AboutMeSection } from "./_components/about-me-section";
import { ServicesSection } from "./_components/experience-section";
import { HeroSection } from "./_components/hero-section";
import { ProjectsSection } from "./_components/projects-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
