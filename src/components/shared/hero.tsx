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

    gsap.to(".animated-word", {
      opacity: 1,
      transform: "translate(0, 0)",
      ease: "power2.inOut",
      stagger: 0.04,
    });
  });

  return (
    <section className="relative h-screen w-full p-4 lg:p-7 overflow-x-hidden rounded-2xl">
      <div
        className="relative z-10 h-full w-full overflow-hidden rounded-3xl bg-foreground will-change-auto"
        id="video-frame"
      >
        <div className="absolute left-0 top-0 w-full h-2/3 lg:size-full overflow-hidden">
          <video
            src="/video/video1.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="object-cover object-right-bottom size-full"
          />
        </div>
        <div className="absolute bottom-10 md:bottom-14 xl:bottom-1/2 xl:translate-y-1/2 left-0 w-full">
          <Container className="text-background xl:text-foreground">
            <h1>
              {"GameFinder".split("").map((word, idx) => (
                <span
                  key={idx}
                  className="animated-word inline-block"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              ))}
            </h1>
            <p className="max-w-screen-md py-4 text-sm sm:text-base">
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
              className="bg-purple-300 text-foreground lg:bg-foreground lg:text-background"
            >
              Show all
            </ButtonLink>
            <div className="hidden lg:flex items-center gap-6 mt-8">
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
