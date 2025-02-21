import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Game } from "@/types/types";

gsap.registerPlugin(ScrollTrigger);

interface GameDetailsProps {
  released: string;
  rating: number;
  platforms: Game["platforms"];
  playtime: number;
  image: string | null;
}

export const GameDetails: React.FC<GameDetailsProps> = ({
  released,
  rating,
  platforms,
  playtime,
  image,
}) => {
  const platformsRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
    if (!platformsRef.current) return;

    gsap.set(itemsRef.current, { x: 100, opacity: 0 });

    ScrollTrigger.create({
      trigger: platformsRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(itemsRef.current, {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
          duration: 0.1 * itemsRef.current.length,
        });
      },
    });
  }, []);

  return (
    <section className="py-16 lg:py-28" id="details">
      <Container>
        <h2 className="text-center">
          Game <br /> details
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-start gap-10 max-w-screen-xl mx-auto my-10">
          <div className="flex-1">
            <div className="relative bg-foreground text-background min-h-80 p-5 rounded-xl overflow-hidden border border-zinc-800 mb-10">
              <h3 className="text-xl">
                Released:{" "}
                <span className="text-3xl text-violet-300">{released}</span>
              </h3>
              {playtime > 0 && (
                <h3 className="text-xl">
                  Playtime:{" "}
                  <span className="text-3xl text-violet-300">
                    {playtime} hours
                  </span>
                </h3>
              )}
              <video
                src="/video/card-1.webm"
                loop
                muted
                autoPlay
                playsInline
                className="size-full object-cover object-center absolute top-0 left-0"
              />
            </div>
            <div>
              <h3 className="text-right">
                Rating{" "}
                <span
                  className={cn("rating", {
                    "text-red-600": rating >= 0 && rating < 2,
                    "text-orange-600": rating >= 2 && rating < 3,
                    "text-primary": rating >= 3 && rating < 4,
                    "text-green-600": rating >= 4 && rating < 5,
                  })}
                >
                  {rating}
                </span>
              </h3>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-xl max-w-96 mb-10" ref={platformsRef}>
              <h3 className="text-xl">Platforms:</h3>
              <ul>
                {platforms.map((platform, index) => (
                  <li
                    className="middle-text transition-colors"
                    key={platform.platform.id}
                    ref={(el) => (itemsRef.current[index] = el)}
                  >
                    {platform.platform.name}
                  </li>
                ))}
              </ul>
            </div>
            {image && (
              <div
                className="min-h-96 bg-cover bg-center rounded-xl "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
