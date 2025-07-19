import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Calendar, Clock4, Grid2x2, Star, Wrench } from "lucide-react";

import { Container } from "@/components/shared";
import { Button } from "@/components/ui";
import { Game, GameDetails as Details } from "@/types/types";

gsap.registerPlugin(ScrollTrigger);

interface GameDetailsProps {
  released: string | null;
  rating: number;
  platforms: Game["platforms"];
  genres: Details["genres"];
  developers: Details["developers"];
  playtime: number;
  image: string | null;
  description: string;
  metacritic: number | null;
}

export const GameDetails = ({
  released,
  rating,
  platforms,
  genres,
  developers,
  playtime,
  image,
  description,
  metacritic,
}: GameDetailsProps) => {
  const platformsRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [isShowMore, setIsShowMore] = useState(false);

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

  const shortDescription = description
    .split(/(?<=[.!?])\s/)
    .slice(0, 3)
    .join(" ");

  return (
    <section className="pt-16 lg:pt-28" id="details">
      <Container>
        <h2 className="text-center">Details</h2>
        <div className="flex flex-col-reverse xl:flex-row items-center gap-5 lg:gap-10 my-10">
          <div className="w-full lg:max-w-4xl">
            <div className="p-5 2xl:p-10 border border-zinc-800 rounded-xl mb-5 lg:mb-10">
              <h3 className="text-xl pb-3">About</h3>
              <p>
                {isShowMore ? description : shortDescription}
                <Button
                  onClick={() => setIsShowMore(!isShowMore)}
                  variant="link"
                  size="sm"
                >
                  {!isShowMore ? "Read more" : "Hide"}
                </Button>
              </p>
            </div>
            {image && (
              <div
                className="min-h-[500px] bg-cover bg-center rounded-xl "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            )}
          </div>
          <div className="flex-1 w-full flex flex-col sm:flex-row justify-center xl:justify-start xl:flex-col gap-5 lg:gap-10">
            <div ref={platformsRef}>
              <h3 className="text-xl pb-3 text-primary">Platforms:</h3>
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
            <div className="rounded-xl p-5 2xl:p-10 border border-zinc-800 grid grid-cols-2 gap-y-12 gap-x-2">
              <div>
                <h3 className="text-xl pb-3 flex items-center gap-2">
                  <Calendar size={18} /> Released:
                </h3>
                <span className="text-zinc-400">
                  {!released ? "-" : released}
                </span>
              </div>
              <div>
                <h3 className="text-xl pb-3 flex items-center gap-2">
                  <Clock4 size={18} /> Playtime:
                </h3>
                <span className="text-zinc-400">{playtime} hours</span>
              </div>
              <div>
                <h3 className="text-xl pb-3 flex items-center gap-2">
                  <Star size={18} /> Rating:
                </h3>
                <span className="text-zinc-400">{rating}</span>
              </div>
              <div>
                <h3 className="text-xl pb-3 flex items-center gap-2">
                  <Brain size={18} /> Metacritic:
                </h3>
                <div className="text-zinc-400">
                  {!metacritic ? "-" : metacritic}
                </div>
              </div>
              <div>
                <h3 className="text-xl pb-3 flex items-center gap-2">
                  <Grid2x2 size={18} /> Genres:
                </h3>
                <div className="text-zinc-400">
                  {genres.map((genre) => genre.name).join(", ")}
                </div>
              </div>
              <div>
                <h3 className="text-xl pb-3 flex items-center gap-2">
                  <Wrench size={18} /> Developer:
                </h3>
                <div className="text-zinc-400">
                  {developers.length > 0
                    ? developers.map((developer) => developer.name).join(", ")
                    : "-"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
