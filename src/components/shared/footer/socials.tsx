import { socialsList } from "@/constants";
import { cn } from "@/lib/utils";

interface SocialsProps {
  className?: string;
}

export const Socials = ({ className }: SocialsProps) => {
  return (
    <div>
      <h3 className="footer-title mb-3">Follow us</h3>
      <ul className={cn("flex flex-col gap-2", className)}>
        {socialsList.map((social) => (
          <li key={social.id}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link"
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
