import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  resetFilters,
  selectSearchValue,
  setCurrentPage,
  setSearchValue,
} from "@/features/filter/filterSlice";
import { Button, Input } from "@/components/ui";

interface SearchInputProps {
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  const [inputValue, setInputValue] = useState(searchValue);

  const handleSearch = () => {
    dispatch(setSearchValue(inputValue));
    dispatch(setCurrentPage(1));
    dispatch(resetFilters());
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    setInputValue(searchValue);
  }, [searchValue]);

  return (
    <div className={cn("w-full flex gap-1", className)}>
      <Input
        type="search"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for games..."
      />
      <Button className="rounded-lg" variant="secondary" onClick={handleSearch}>
        <Search size={18} />
      </Button>
    </div>
  );
};
