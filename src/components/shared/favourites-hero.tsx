import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from "./container";
import { BentoTilt } from "./bento-tilt";
import { Link } from "react-router-dom";
import { pageConfig } from "@/utils/pages.config";
import { Logo } from "../ui";

export const FavouritesHero: React.FC = () => {
  useGSAP(() => {
    gsap.to(".animated-word", {
      opacity: 1,
      transform: "translate(0, 0)",
      ease: "power2.inOut",
      stagger: 0.04,
    });
  });

  return (
    <section className="pb-4 pt-7 md:py-7 overflow-hidden">
      <Container className="h-[50vh] flex justify-center gap-4 md:gap-7">
        <BentoTilt className="rounded-xl flex-1">
          <div className="flex size-full flex-col justify-center bg-violet-300 p-5">
            <Link
              to={pageConfig.games}
              className="big-text max-w-64 text-foreground"
            >
              More games here.
            </Link>
            <Logo className="absolute right-5 bottom-5 w-16 h-16" />
          </div>
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 rounded-xl flex-1 bg-[url(/images/gallery/4.avif)] bg-cover bg-center flex flex-col justify-end items-end p-5">
          <h1 className="title-small text-background">
            {"Favourites".split("").map((word, idx) => (
              <span
                key={idx}
                className="animated-word inline-block"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </h1>
        </BentoTilt>
      </Container>
    </section>
  );
};
