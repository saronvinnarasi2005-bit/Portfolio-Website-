import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Achievements } from "@/components/portfolio/achievements";
import { Certificates } from "@/components/portfolio/certificates";
import { DesignLab } from "@/components/portfolio/design-lab";
import { Contact, Footer } from "@/components/portfolio/contact";

const title = "Saron Vinnarasi V — UI/UX & Web Design Portfolio";
const description =
  "Interactive portfolio of Saron Vinnarasi V, MCA student and UI/UX enthusiast — projects, internships, skills, certifications and achievements.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <DesignLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
