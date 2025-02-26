import React from "react";
import { Outlet } from "react-router-dom";
import { useMedia } from "react-use";
import {
  Container,
  FilterDialog,
  Filters,
  SearchInput,
  Sort,
} from "@/components/shared";

export const Games: React.FC = () => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <main className="pt-28 md:pt-32 pb-16 min-h-screen">
      <Container className="flex gap-4">
        {isWide && (
          <Filters className="hidden md:block max-w-60 2xl:max-w-64 w-full rounded-2xl border p-4" />
        )}
        <section className="flex-1">
          <div className="mb-5 flex gap-2 md:gap-6 items-center flex-col md:flex-row">
            <h1 className="middle-text">All games</h1>
            <p className="max-w-[700px] text-sm text-center md:text-left">
              Welcome to the catalog of the best video games! Here you will find
              popular and highly appreciated projects from various genres,
              platforms, and developers. Use filters to narrow down the
              selection, add your favorite games to your favorites and enjoy the
              world of virtual adventures.
            </p>
          </div>
          <header className="bg-muted w-full rounded-2xl border mb-4 p-2 sm:p-4 flex flex-col md:flex-row justify-between gap-2 sm:gap-4">
            <SearchInput className="flex-1 max-w-[600px]" />
            <div className="flex gap-1">
              <Sort />
              {!isWide && <FilterDialog />}
            </div>
          </header>
          <Outlet />
        </section>
      </Container>
    </main>
  );
};
