import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ButtonLink } from "../ui";
import { Container } from "./container";

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  useGSAP(() => {
    gsap.to("#video-frame", {
      scale: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section className="relative h-screen w-full lg:p-7 overflow-x-hidden rounded-2xl">
      <div
        className="relative z-10 h-full w-full overflow-hidden rounded-3xl bg-foreground will-change-auto"
        id="video-frame"
      >
        <div className="absolute left-0 top-0 w-full h-1/2 md:size-full overflow-hidden">
          <video
            src="/video/video1.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="object-cover object-right-bottom size-full"
          />
        </div>
        <div className="absolute top-1/2 md:-translate-y-1/2 left-0 w-full">
          <Container className="text-background lg:text-foreground">
            <h1>GameFinder</h1>
            <p className="max-w-screen-md py-4">
              GameFinder is a convenient service for searching games by genre,
              platform, popularity, and other criteria. Find out information
              about your favorite games, find new projects based on your
              interests, and sort the results by rating and release date. Simple
              navigation, detailed game cards and user-friendly filters will
              make the search for the perfect game fast and enjoyable!
            </p>
            <ButtonLink
              href="/games"
              size="lg"
              className="bg-purple-300 text-foreground md:bg-foreground md:text-background"
            >
              Show all
            </ButtonLink>
            <div className="flex items-center gap-6 mt-8">
              <img src="/images/ps5.svg" alt="ps5" />
              <img src="/images/xbox.svg" alt="xbox" />
              <img src="/images/pc.svg" alt="pc" />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};
