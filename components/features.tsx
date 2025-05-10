import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart2, Briefcase, Users } from "lucide-react";

const FEATURES = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary mb-2" />,
    title: "Project Management",
    description: "Organize tasks, set deadlines, and track progress with ease.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary mb-2" />,
    title: "Collaboration",
    description:
      "Work together in real time, share files, and communicate seamlessly.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary mb-2" />,
    title: "Analytics",
    description:
      "Gain insights into your team's productivity and project health.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-12 w-full max-w-6xl mx-auto"
    >
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h2 className="text-2xl font-semibold mb-2">Our Product</h2>
        <p className="text-muted-foreground mb-4">
          SaaSify offers a suite of tools to streamline your workflow: project
          management, real-time collaboration, and insightful analytics—all in
          one place.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="bg-background rounded-xl shadow p-6 flex flex-col items-center text-center h-full"
            >
              <CardHeader className="flex flex-col items-center pb-2">
                {feature.icon}
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
