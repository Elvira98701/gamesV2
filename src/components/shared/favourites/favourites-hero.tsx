import { Link } from "react-router-dom";

import { Container, BentoTilt, AnimatedTitle } from "@/components/shared";
import { Logo } from "@/components/ui";
import { pageConfig } from "@/constants";

export const FavouritesHero = () => {
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
            <AnimatedTitle title="Favourites" />
          </h1>
        </BentoTilt>
      </Container>
    </section>
  );
};
