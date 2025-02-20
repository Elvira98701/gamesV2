import React from "react";
import { Outlet } from "react-router-dom";

import {
  Container,
  FilterDialog,
  Filters,
  SearchInput,
  Sort,
} from "@/components/shared";
import { useMedia } from "react-use";

export const Games: React.FC = () => {
  const isWide = useMedia("(min-width: 768px)");

  return (
    <main className="pt-32 pb-16 lg:pb-28 min-h-screen">
      <Container className="flex gap-4">
        {isWide && (
          <Filters className="hidden md:block max-w-64 w-full rounded-2xl border p-4" />
        )}
        <section className="flex-1">
          <header className="w-full rounded-2xl border mb-4 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <SearchInput className="max-w-80" />
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
