import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Filters, SearchInput, Sort } from "@/components/shared";

export const Games: React.FC = () => {
  return (
    <main className="pt-32 pb-16 lg:pb-28 min-h-screen">
      <Container className="flex gap-4">
        <Filters className="hidden md:block max-w-64 w-full rounded-2xl border p-4" />
        <section className="flex-1">
          <header className="w-full rounded-2xl border mb-4 p-4 flex justify-between items-center gap-2">
            <SearchInput className="max-w-80" />
            <Sort />
          </header>
          <Outlet />
        </section>
      </Container>
    </main>
  );
};
