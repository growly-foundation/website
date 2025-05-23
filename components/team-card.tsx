"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { getIconPath } from "@/lib/utils/icon-utils";

type Member = {
  name: string;
  description: string;
  twitter: string;
  github?: string;
  linkedin?: string;
  url?: string;
  image: string;
};

export default function TeamCard({ member }: { member: Member }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center bg-muted rounded-2xl shadow-md p-6 mx-2 my-4 w-70 max-w-sm transition-transform hover:scale-105">
      <div className="relative w-[120px] h-[120px] mb-4 overflow-hidden rounded-full">
        <Image
          src={member.image}
          height={160}
          width={160}
          alt={member.name}
          className="absolute object-cover border-2 shadow-lg scale-140 hover:scale-170 transition-transform duration-500 origin-bottom"
        />
      </div>
      <div className="flex flex-col items-center mb-2">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <h4 className="text-sm text-muted-foreground text-center">
          {member.description}
        </h4>
      </div>
      <div className="flex flex-row items-center gap-3 mt-2">
        <Link href={member.twitter} target="_blank">
          <Image
            src={getIconPath("Twitter", theme)}
            height={24}
            width={24}
            alt={"Twitter logo"}
          />
        </Link>
        {member.github && (
          <Link href={member.github} target="_blank">
            <Image
              src={getIconPath("Github", theme)}
              height={20}
              width={20}
              alt={"GitHub logo"}
            />
          </Link>
        )}
        {member.linkedin && (
          <Link href={member.linkedin} target="_blank">
            <Image
              src={getIconPath("Linkedin", theme)}
              height={20}
              width={20}
              alt={"LinkedIn logo"}
            />
          </Link>
        )}
        {member.url && (
          <Link href={member.url} target="_blank">
            <Image
              src={getIconPath("Website", theme)}
              height={22}
              width={22}
              alt={"Personal website logo"}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
