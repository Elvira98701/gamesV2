import { cn } from "@/lib/utils";

interface FooterContactsProps {
  className?: string;
}

export const FooterContacts = ({ className }: FooterContactsProps) => {
  return (
    <div className={cn("", className)}>
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
  );
};
