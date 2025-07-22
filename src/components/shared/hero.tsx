import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Container, AnimatedTitle } from "@/components/shared";
import { ButtonLink } from "@/components/ui";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useGSAP(() => {
    gsap.to("#video-frame", {
      scale: 0.3,
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
    <section
      className="relative h-lvh w-full lg:p-7 overflow-x-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-b-3xl lg:rounded-3xl bg-foreground will-change-auto"
        id="video-frame"
      >
        <div className="absolute z-10 left-0 top-0 w-full h-2/3 xl:size-full overflow-hidden p-4">
          <video
            poster="/images/poster.jpg"
            loop
            muted
            autoPlay
            playsInline
            className="object-cover object-right-bottom size-full rounded-3xl"
          >
            <source src="/video/video1.webm" type="video/webm" />
            <source src="/video/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute z-20 bottom-10 xl:bottom-1/2 xl:translate-y-1/2 left-0 w-full">
          <Container className="text-background xl:text-foreground lg:pl-10">
            <h1 id="hero-title">
              <AnimatedTitle title="GameFinder" />
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
              className="bg-purple-300 text-foreground xl:bg-foreground xl:text-background"
            >
              Show all
            </ButtonLink>
            <div className="hidden xl:flex items-center gap-6 mt-8">
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
