import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
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
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="flex justify-center items-center">
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
