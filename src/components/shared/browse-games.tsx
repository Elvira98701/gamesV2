import React from "react";
import { Container } from "./container";

export const BrowseGames: React.FC = () => {
  return (
    <section>
      <Container className="flex items-center justify-center text-center">
        <h2 className="max-w-screen-lg">
          It's easy{" "}
          <span className="animated-span inline-block h-8 w-8 md:h-16 md:w-16 bg-foreground rounded-lg">
            <img
              src="/images/1.jpg"
              alt=""
              className="animated-img rounded-lg"
              loading="lazy"
            />
          </span>{" "}
          and fast to find the right game, read{" "}
          <span className="animated-span inline-block h-8 w-8 md:h-16 md:w-16 bg-foreground rounded-lg">
            <img
              src="/images/2.jpg"
              alt=""
              className="animated-img rounded-lg"
              loading="lazy"
            />
          </span>{" "}
          the description and see the{" "}
          <span className="animated-span inline-block h-8 w-8 md:h-16 md:w-16 bg-foreground rounded-lg">
            <img
              src="/images/3.jpg"
              alt=""
              className="animated-img rounded-lg"
              loading="lazy"
            />
          </span>{" "}
          ratings.
        </h2>
      </Container>
    </section>
  );
};
