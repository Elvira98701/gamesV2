import { Container } from "@/components/shared";
import { Logo } from "@/components/ui";

import { FooterContacts } from "./footer-contacts";
import { FooterNav } from "./footer-nav";
import { Socials } from "./socials";
import { Terms } from "./terms";

export const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-4 lg:pt-28 lg:pb-8 text-base lg:text-xl text-center md:text-left">
      <Container>
        <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-5 mb-16 lg:mb-28">
          <Logo className="w-20 h-20 lg:w-28 lg:h-28" />
          <FooterNav />
          <Socials />
          <FooterContacts />
          <Terms />
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-1">
          <small className="uppercase text-xs">
            ©GameFinder 2025. All rights reserved
          </small>
          <p>
            Data provided by{" "}
            <a
              href="https://rawg.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              RAWG Video Games Database
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
