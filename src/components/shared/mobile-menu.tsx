import { useState } from "react";

import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from "@/components/ui";
import { IPageItem } from "@/types/types";

interface MobileMenuProps {
  className?: string;
  pagesList: IPageItem[];
}

export const MobileMenu = ({ className, pagesList }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className="flex justify-center items-center"
          title="Open menu"
          aria-label="Open menu"
        >
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-2xl">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {pagesList.map((page) => (
            <DropdownMenuItem key={page.id}>
              <Link to={page.href} onClick={() => setOpen(false)}>
                {page.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
