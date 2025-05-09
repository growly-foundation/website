import Hero from "@/components/hero";
import Team from "@/components/team";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <Hero />
      <Features />
      <Team />
    </div>
  );
}
