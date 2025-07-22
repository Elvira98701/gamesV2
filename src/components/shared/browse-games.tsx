import { Container } from "@/components/shared";

export const BrowseGames = () => {
  return (
    <section aria-labelledby="browse-title">
      <Container className="flex items-center justify-center text-center">
        <h2 className="max-w-screen-lg" id="browse-title">
          It's{" "}
          <span className="animated-span inline-block h-8 w-8 md:h-16 md:w-16 bg-foreground rounded-lg">
            <img
              src="/images/1.avif"
              alt=""
              className="animated-img rounded-lg"
              loading="lazy"
            />
          </span>{" "}
          easy and fast to find the right game, read{" "}
          <span className="animated-span inline-block h-8 w-8 md:h-16 md:w-16 bg-foreground rounded-lg">
            <img
              src="/images/2.avif"
              alt=""
              className="animated-img rounded-lg"
              loading="lazy"
            />
          </span>{" "}
          the description and see the{" "}
          <span className="animated-span inline-block h-8 w-8 md:h-16 md:w-16 bg-foreground rounded-lg">
            <img
              src="/images/3.avif"
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
