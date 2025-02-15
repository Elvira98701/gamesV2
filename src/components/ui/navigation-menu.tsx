import React from "react";
import { IPageItem } from "@/types/types";
import { ButtonLink } from "./button-link";

interface Props {
  className?: string;
  pagesList: IPageItem[];
}

export const NavigationMenu: React.FC<Props> = ({ className, pagesList }) => {
  return (
    <nav className={className}>
      <ul className="flex justify-center items-center gap-4">
        {pagesList.map((page) => (
          <li key={page.id}>
            <ButtonLink href={page.href} variant="secondary">
              {page.title}
            </ButtonLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
