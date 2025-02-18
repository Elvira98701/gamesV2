import {
  BentoTilt,
  Contact,
  Container,
  FavouritesList,
} from "@/components/shared";
import { Logo } from "@/components/ui";
import { pageConfig } from "@/utils/pages.config";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { Link } from "react-router-dom";

export const Favourites: React.FC = () => {
  useGSAP(() => {
    gsap.to(".animated-word", {
      opacity: 1,
      transform: "translate(0, 0)",
      ease: "power2.inOut",
      stagger: 0.04,
    });
  });

  return (
    <main className="bg-foreground">
      <section className="pb-4 pt-7 lg:py-7 overflow-hidden">
        <Container className="h-[50vh] flex justify-center gap-4 sm:gap-5">
          <BentoTilt className="rounded-xl flex-1">
            <div className="flex size-full flex-col justify-center bg-violet-300 p-5">
              <Link to={pageConfig.games}>
                <h3 className="max-w-64 text-foreground">More games here.</h3>
              </Link>
              <Logo className="absolute right-5 bottom-5 w-16 h-16" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 rounded-xl flex-1 bg-[url(/images/gallery/4.avif)] bg-cover bg-center flex flex-col justify-end items-end p-5">
            <h3 className="text-background">
              {"Favourites".split("").map((word, idx) => (
                <span
                  key={idx}
                  className="animated-word inline-block"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              ))}
            </h3>
          </BentoTilt>
        </Container>
      </section>
      <FavouritesList />
      <Contact />
    </main>
  );
};
