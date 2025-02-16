import React from "react";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface SearchInputProps {
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Search
        className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500"
        size={18}
      />
      <Input type="search" className="pl-8" />
    </div>
  );
};
