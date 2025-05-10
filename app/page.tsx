import Hero from "@/components/hero";
import Team from "@/components/team";
import Features from "@/components/features";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <Hero />
      <Features />
      <Projects />
      <Team />
    </div>
  );
}
