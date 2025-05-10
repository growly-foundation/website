"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { MENU_LINKS } from "@/components/menu-links";
import { MobileMenu } from "@/components/mobile-menu";
import ThemeSwitcher from "@/components/theme-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <section className="fixed inset-x-0 top-0 z-40 py-4 px-5">
      <div className="flex w-full items-center justify-center text-center py-4">
        <nav className="hidden rounded-[120px] w-full px-5 py-3 bg-gradient-to-tr dark:from-[#171717] dark:to-[#0E0E0E] from-[#f8f9fa] to-[#e9ecef] justify-between lg:flex">
          <div className="flex items-center gap-x-9">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/mascot.svg"}
                className="hidden md:block w-[120px] h-[40px]"
                width={120}
                height={40}
                alt="Growly Foundation logo desktop"
              />
              <Image
                src={"/mascot.svg"}
                className="block md:hidden mx-1 w-[30px] h-[30px]"
                height={30}
                width={30}
                alt="Growly Foundation logo mobile"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <NavigationMenu
              style={
                {
                  ["--radius"]: "1rem",
                } as React.CSSProperties
              }
            >
              <NavigationMenuList>
                {MENU_LINKS.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      active={pathname.startsWith(item.href || "")}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "rounded-xl text-[15px] font-normal data-[active]:bg-accent bg-transparent text-foreground"
                      )}
                    >
                      <Link
                        href={item.href || "#"}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-2">
            <div className="mr-2">
              <ThemeSwitcher />
            </div>
            {/* <Button
              variant="secondary"
              className="px-[22px] md:px-[44px] py-[24px] font-extrabold text-lg transition-all duration-300"
              asChild
            >
              <Link href="/#cta">Contact Us</Link>
            </Button> */}
          </div>
        </nav>
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
