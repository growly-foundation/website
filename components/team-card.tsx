import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
  return (
    <div className="flex flex-col items-center bg-muted rounded-2xl shadow-md p-6 mx-2 my-4 w-70 max-w-sm transition-transform hover:scale-105">
      <Image
        src={member.image}
        height={120}
        width={120}
        alt={member.name}
        className="rounded-full object-cover border-2 border-primary mb-4 shadow-lg w-[120px] h-[120px]"
      />
      <div className="flex flex-col items-center mb-2">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <h4 className="text-sm text-muted-foreground text-center">
          {member.description}
        </h4>
      </div>
      <div className="flex flex-row items-center gap-3 mt-2">
        <Link href={member.twitter} target="_blank">
          <Image
            src={"/icons/twitter.svg"}
            height={24}
            width={24}
            alt={"Twitter logo"}
          />
        </Link>
        {member.github && (
          <Link href={member.github} target="_blank">
            <Image
              src={"/icons/github-white.svg"}
              height={20}
              width={20}
              alt={"GitHub logo"}
            />
          </Link>
        )}
        {member.linkedin && (
          <Link href={member.linkedin} target="_blank">
            <Image
              src={"/icons/linkedin.svg"}
              height={20}
              width={20}
              alt={"LinkedIn logo"}
            />
          </Link>
        )}
        {member.url && (
          <Link href={member.url} target="_blank">
            <Image
              src={"/icons/dribble-green.svg"}
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
