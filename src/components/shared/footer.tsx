import { Link } from "react-router-dom";

import { Container } from "@/components/shared";
import { Logo } from "@/components/ui";
import { pageConfig } from "@/constants";

export const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-4 lg:pt-28 lg:pb-8 text-base lg:text-xl text-center md:text-left">
      <Container>
        <div className="flex flex-col items-center md:flex-row md:items-start justify-between gap-5 mb-16 lg:mb-28">
          <Logo className="w-20 h-20 lg:w-28 lg:h-28" />
          <div>
            <h3 className="footer-title mb-3">Explore</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to={pageConfig.home} className="hover-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={pageConfig.favourites} className="hover-link">
                  Favourites
                </Link>
              </li>
              <li>
                <Link to={pageConfig.games} className="hover-link">
                  Games
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title mb-3">Follow us</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-link"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://web.telegram.org/a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-link"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-link"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title mb-3">Contact us</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="mailto:support@gamesearch.app" className="hover-link">
                  support@gamesearch.app
                </a>
              </li>
              <li>
                <a href="mailto:info@gamesearch.app" className="hover-link">
                  info@gamesearch.app
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title mb-3">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="hover-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
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
