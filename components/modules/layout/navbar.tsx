"use client";
import { Menu, MoonIcon, SunIcon, X, ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuItems = [
  { name: "Our Story", href: "#our-story" },
  { name: "RSVP", href: "#rsvp" },
  { name: "Gift Registry", href: "#gift-the-couple" },
  { name: "Gallery", href: "#gallery" },
  { name: "Event Details", href: "#event-details" },
];

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={`bg-transparent fixed z-20 w-full transition-all duration-300 ${
          isScrolled ? "backdrop-blur-3xl bg-background/80 shadow-lg" : ""
        }`}
      >
        <div className="m-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                {/* <Logo /> */}
                <Image
                  src="/images/wedding_ring.png"
                  alt="Auxano 2025 Logo"
                  width={40}
                  height={40}
                />
                <h3 className="text-2xl font-bold">Auxano 2025</h3>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:pr-4">
                <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm lg:items-center">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                  {/* <li>
                    <Button
                      variant={"ghost"}
                      size="icon"
                      onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                      }
                    >
                      {theme === "light" ? (
                        <MoonIcon size={16} aria-hidden="true" />
                      ) : (
                        <SunIcon size={16} aria-hidden="true" />
                      )}
                    </Button>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        } bg-linear-to-br from-pink-500 to-purple-500 hover:shadow-pink-500/50 hover:scale-110`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
      </button>
    </header>
  );
};

export default Navbar;
