import React, { lazy, Suspense, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Container } from "./container";
import { BentoTilt } from "./bento-tilt";
import { BentoCard } from "./bento-card";
import { Logo } from "../ui";
import { Link } from "react-router-dom";
import { pageConfig } from "@/utils/pages.config";

gsap.registerPlugin(ScrollTrigger);
const LazyVideo = lazy(() => import("./lazy-video"));

export const Features: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useGSAP(() => {
    gsap.to(document.body, {
      backgroundColor: "#0C0A09",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#features",
        start: "top center",
        end: "center center",
        scrub: true,
        onEnter: () => setLoaded(true),
      },
    });
  });

  return (
    <section id="features">
      <h2 className="visually-hidden">Features</h2>
      <Container>
        <BentoTilt className="relative mb-4 md:mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh] text-background">
          <BentoCard
            src="/images/gallery/1.avif"
            title="Detailed filtering"
            description="Sort the games by rating, popularity and other parameters."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-4 md:gap-7">
          <BentoTilt className="row-span-1 md:col-span-1 md:row-span-2 rounded-xl text-background">
            <BentoCard
              src="/images/gallery/2.avif"
              title="Reviews"
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="row-span-1 md:col-span-1 ms-0 rounded-xl text-background md:text-foreground">
            <BentoCard
              src="/images/gallery/3.avif"
              title="Favourites"
              description="Save the best games and come back to them at any time."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="md:col-span-1 me-0 rounded-xl ">
            <BentoCard
              src="/images/gallery/4.avif"
              title="Search"
              description="Find games by name, genre, platform, or release year."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="rounded-xl">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <Link to={pageConfig.games}>
                <h3 className="max-w-64 text-foreground">More games here.</h3>
              </Link>
              <Logo className="absolute right-5 bottom-5 w-16 h-16" />
            </div>
          </BentoTilt>

          {loaded ? (
            <Suspense fallback={<p>Loading...</p>}>
              <LazyVideo />
            </Suspense>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Container>
    </section>
  );
};
