import { useGetScreenshotsByIdQuery } from "@/features/games/gamesApi";
import { Screenshot } from "@/types/types";
import { Loader } from "lucide-react";
import React from "react";
import { Container } from "../container";
import { Carousel } from "@/components/ui";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ScreenshotsProps {
  className?: string;
  id: number;
}

export const Screenshots: React.FC<ScreenshotsProps> = ({ className, id }) => {
  const { data, isLoading, error } = useGetScreenshotsByIdQuery(id);

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-foreground text-background">
        <Loader className="animate-spin" />
      </div>
    );

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
        <h2 className="text-center mb-10">Screenshots</h2>
        <Carousel className="w-full max-w-screen-xl mx-auto">
          <CarouselContent>
            {screenshots.map((screenshot) => (
              <CarouselItem key={screenshot.id}>
                <div className="p-1 h-[500px] sm:h-[700px]">
                  <img
                    className="rounded-3xl size-full object-cover"
                    src={screenshot.image}
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-5" />
          <CarouselNext className="right-5" />
        </Carousel>
      </Container>
    </section>
  );
};
