import React from "react";
import { Button } from "../ui";
import { Ellipsis } from "lucide-react";

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  return (
    <div className={className}>
      <Button variant="secondary" size="icon" type="button" title="Open menu">
        <Ellipsis />
      </Button>
    </div>
  );
};
