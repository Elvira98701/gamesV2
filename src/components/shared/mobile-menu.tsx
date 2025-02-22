import React from "react";
import { Link } from "react-router-dom";
import { DropdownMenu } from "@/components/ui";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IPageItem } from "@/types/types";

interface MobileMenuProps {
  className?: string;
  pagesList: IPageItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  className,
  pagesList,
}) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center">
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-2xl">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {pagesList.map((page) => (
            <DropdownMenuItem key={page.id}>
              <Link to={page.href}>{page.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
