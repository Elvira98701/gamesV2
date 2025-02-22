import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ButtonLink } from "@/components/ui";
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
    <section className="relative h-screen w-full lg:p-7 overflow-x-hidden">
      <div
        className="relative z-10 h-full w-full overflow-hidden rounded-b-3xl lg:rounded-3xl bg-foreground will-change-auto"
        id="video-frame"
      >
        <div className="absolute left-0 top-0 w-full h-2/3 lg:size-full overflow-hidden p-4">
          <video
            src="/video/video1.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="object-cover object-right-bottom size-full rounded-3xl"
          />
        </div>
        <div className="absolute bottom-24 xl:bottom-1/2 xl:translate-y-1/2 left-0 w-full">
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
            <p className="max-w-screen-md pt-2 pb-4 text-sm sm:text-base">
              <b>GameFinder</b> is a convenient service for searching games by
              genre, platform, popularity, and other criteria. Find out
              information about games, find new projects, and sort the results.
              Simple navigation, detailed flashcards and user-friendly filters
              will make the search for the perfect game fast and enjoyable!
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
