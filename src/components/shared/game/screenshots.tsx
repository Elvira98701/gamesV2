import { useEffect, useState } from "react";

import { Loader } from "lucide-react";

import { Container } from "@/components/shared";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { useGetScreenshotsByIdQuery } from "@/features/games/gamesApi";
import { cn } from "@/lib/utils";
import { Screenshot } from "@/types/types";

interface ScreenshotsProps {
  className?: string;
  id: number;
}

export const Screenshots = ({ className, id }: ScreenshotsProps) => {
  const { data, isLoading, error } = useGetScreenshotsByIdQuery(id);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!data || error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-foreground text-background">
        <p>Failed to load game. Please try again later.</p>
      </div>
    );

  const screenshots: Screenshot[] = (data && data.results) || [];

  return (
    <section className={cn("pt-16 lg:pt-28", className)}>
      <Container>
        <h2 className="text-center mb-5 lg:mb-10">Screenshots</h2>
        <Carousel setApi={setApi} className="w-full max-w-screen-xl mx-auto">
          <CarouselContent>
            {isLoading ? (
              <CarouselItem>
                <div className="p-1 h-[500px] sm:h-[700px] flex items-center justify-center">
                  <Loader className="animate-spin" />
                </div>
              </CarouselItem>
            ) : (
              screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id}>
                  <div className="p-1 h-[500px] sm:h-[700px]">
                    <img
                      className="rounded-3xl size-full object-cover"
                      src={screenshot.image}
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="left-5" />
          <CarouselNext className="right-5" />
        </Carousel>
        <div className="py-2 text-center text-md text-zinc-400">
          {current} / {count}
        </div>
      </Container>
    </section>
  );
};
