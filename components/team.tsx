"use client";

import { MEMBERS } from "@/lib/constants";
import TeamCard from "./team-card";

export default function Team() {
  return (
    <section
      id="team"
      className="px-4 md:px-6 py-20 md:py-28 flex flex-col items-center"
    >
      <div className="flex flex-col gap-y-4 w-full max-w-5xl">
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl">
            We are onchain builders and entrepreneurs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          {MEMBERS.slice(0, 3).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
