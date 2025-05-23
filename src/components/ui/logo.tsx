import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={cn("", className)} aria-label="Home" title="Home">
      <svg
        className="size-full"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M7.93,11.24a.58.58,0,0,0-.8-.11.68.68,0,0,0-.17.21l-4.9,9.81a.59.59,0,0,0,.26.79.43.43,0,0,0,.27.06H9.41a.59.59,0,0,0,.53-.32c1.47-3.05.56-7.68-2-10.44m3.6-8.93a13,13,0,0,0-.76,12.78l3.29,6.59a.6.6,0,0,0,.53.32h6.82a.58.58,0,0,0,.59-.59h0a.4.4,0,0,0-.06-.26S12.76,2.77,12.5,2.31a.52.52,0,0,0-.72-.25A.51.51,0,0,0,11.53,2.31Z" />
      </svg>
    </Link>
  );
};
