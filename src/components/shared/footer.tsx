import React from "react";
import { Container } from "./container";
import { Logo } from "../ui";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary pt-28 pb-8">
      <Container>
        <div className="flex justify-between mb-28">
          <Logo className="w-28 h-28" />
          <div>
            <h3 className="text-4xl mb-3">Explore</h3>
            <ul className="text-xl flex flex-col gap-2">
              <li>Home</li>
              <li>Favourites</li>
              <li>Games</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl mb-3">Follow us</h3>
            <ul className="text-xl flex flex-col gap-2">
              <li>Discord</li>
              <li>Telegram</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl mb-3">Follow us</h3>
            <ul className="text-xl flex flex-col gap-2">
              <li>Discord</li>
              <li>Telegram</li>
            </ul>
          </div>
          <div>
            <h3 className="text-4xl mb-3">Follow us</h3>
            <ul className="text-xl flex flex-col gap-2">
              <li>Discord</li>
            </ul>
          </div>
        </div>
        <small className="uppercase">
          ©GameFinder 2025. All rights reserved
        </small>
      </Container>
    </footer>
  );
};
