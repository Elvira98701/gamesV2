import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Container } from "./container";
import { BentoTilt } from "./bento-tilt";
import { BentoCard } from "./bento-card";
import { Logo } from "../ui";

gsap.registerPlugin(ScrollTrigger);

export const Features: React.FC = () => {
  useGSAP(() => {
    gsap.to(document.body, {
      backgroundColor: "#0C0A09",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#features",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <section id="features">
      <Container>
        <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh] text-background">
          <BentoCard
            src="/images/gallery/1.jpg"
            title="Text"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 rounded-xl text-background">
            <BentoCard
              src="/images/gallery/2.avif"
              title="Zigma"
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 rounded-xl ">
            <BentoCard
              src="/images/gallery/3.jpg"
              title="Nexus"
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 rounded-xl ">
            <BentoCard
              src="/images/gallery/4.avif"
              title="Azul"
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="rounded-xl ">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h3 className="max-w-64 text-black">More games here.</h3>
              <Logo className="absolute right-5 bottom-5 w-16 h-16" />
            </div>
          </BentoTilt>

          <BentoTilt className="rounded-xl">
            <video
              src="video/video.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </Container>
    </section>
  );
};
