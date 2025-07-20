import { Link } from "react-router-dom";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";

interface FooterNavProps {
  className?: string;
}

export const FooterNav = ({ className }: FooterNavProps) => {
  return (
    <div className={cn("", className)}>
      <h3 className="footer-title mb-3">Explore</h3>
      <ul className="flex flex-col gap-2">
        {navItems.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.href} className="hover-link">
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
