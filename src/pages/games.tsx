import React from "react";
import { Outlet } from "react-router-dom";

import { Container, Filters, SearchInput, Sort } from "@/components/shared";

export const Games: React.FC = () => {
  return (
    <main className="py-32 min-h-screen">
      <Container className="flex gap-4">
        <Filters className="max-w-72 w-full rounded-2xl border p-4" />
        <section className="">
          <header className="w-full rounded-2xl border mb-4 p-4 flex justify-between items-center">
            <SearchInput className="max-w-80" />
            <Sort />
          </header>
          <Outlet />
        </section>
      </Container>
    </main>
  );
};
