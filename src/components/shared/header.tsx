import { MobileMenu } from "@/components/shared";
import { Logo, NavigationMenu } from "@/components/ui";
import { navItems } from "@/constants";

export const Header = () => {
  return (
    <div className="fixed top-2 left-0 w-screen px-4 z-50 h-16 transition-all duration-700">
      <header className="flex justify-center w-full">
        <div className="flex size-full items-center justify-between max-w-7xl p-6 min-h-20 bg-foreground text-background rounded-full border border-zinc-600">
          <Logo />
          <MobileMenu className="md:hidden" pagesList={navItems} />
          <NavigationMenu className="hidden md:block" pagesList={navItems} />
        </div>
      </header>
    </div>
  );
};
