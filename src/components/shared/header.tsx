import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { Logo, NavigationMenu } from "../ui";
import { IPageItem } from "@/types/types";
import { pageConfig } from "@/utils/pages.config";
import { MobileMenu } from "./mobile-menu";

const navItems: IPageItem[] = [
  {
    id: 1,
    href: pageConfig.favourites,
    title: "Favourites",
  },
  {
    id: 2,
    href: pageConfig.games,
    title: "Games",
  },
];

export const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (!navContainerRef.current) return;
    if (currentScrollY <= 150) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      className="fixed top-2 left-0 w-screen px-4 z-50 h-16 transition-all duration-700"
      ref={navContainerRef}
    >
      <header className="flex justify-center w-full">
        <div className="flex size-full items-center justify-between max-w-7xl p-6 min-h-20 bg-foreground text-background rounded-full border border-zinc-600">
          <Logo />
          <MobileMenu className="md:hidden" pagesList={navItems} />
          <NavigationMenu className="hidden md:block" pagesList={navItems} />
        </div>
      </header>
    </div>
  );
};
