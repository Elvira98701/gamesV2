import { BentoTilt, Container } from "@/components/shared";
import { Logo } from "@/components/ui";
import { useGetGameByIdQuery } from "@/features/games/gamesApi";
import React from "react";
import { useParams } from "react-router-dom";

export const Game: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetGameByIdQuery(Number(id));

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error.toString()}</p>;

  return (
    <main className="bg-foreground text-background">
      <section className="pb-4 pt-7 lg:py-7 overflow-hidden">
        <Container className="h-[50vh] flex justify-center gap-4 sm:gap-5">
          <BentoTilt className="rounded-xl flex-1 border border-zinc-800">
            <div className="flex size-full flex-col justify-center bg-foreground text-background p-5">
              <h1 className="title-small">{data?.name}</h1>
              <Logo className="absolute right-5 bottom-5 w-16 h-16" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 rounded-xl flex-1 bg-cover bg-center flex flex-col justify-end items-end">
            <img
              src={data?.background_image}
              className="object-cover size-full"
            />
          </BentoTilt>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <h2 className="text-center mb-10">
            Game <br /> details
          </h2>
          <div className="flex items-start gap-7 max-w-screen-xl mx-auto">
            <div className="flex-1 relative">
              <div className="bg-foreground text-background min-h-80 p-4 rounded-xl overflow-hidden border border-zinc-800">
                <h3 className="text-2xl">
                  Released <span>{data?.released}</span>
                </h3>
                <video
                  src="/video/card-1.webm"
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="size-full object-cover object-center absolute top-0 left-0"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-violet-300 text-foreground p-4 rounded-xl max-w-96">
                <h3 className="text-2xl">Platforms</h3>
                {data?.platforms.map((platform) => (
                  <p key={platform.platform.id}>{platform.platform.name}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
