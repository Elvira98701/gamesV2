import { cn } from "@/lib/utils";

interface TermsProps {
  className?: string;
}

export const Terms = ({ className }: TermsProps) => {
  return (
    <div className={cn("", className)}>
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
  );
};
