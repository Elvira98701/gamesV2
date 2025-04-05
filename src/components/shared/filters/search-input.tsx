import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useClickAway, useDebounce } from "react-use";
import { Link } from "react-router-dom";
import { Frown, Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  selectSearchValue,
  setSearchValue,
} from "@/features/filter/filterSlice";
import { Input } from "@/components/ui";
import { useGetSearchQuery } from "@/features/games/gamesApi";
import { Game } from "@/types/types";

interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { data, isLoading, isSuccess, isError } =
    useGetSearchQuery(searchValue);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        dispatch(setSearchValue(inputValue));
      } catch (error) {
        console.warn(error);
      }
    },
    250,
    [inputValue]
  );

  let content: ReactNode;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const games: Game[] = (data && data.results) || [];
    content =
      games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <Link
                className="py-2 pl-3 w-full flex items-center gap-2 hover:bg-primary transition-colors rounded-2xl"
                to={`/game/${game.id}`}
              >
                <img
                  className="w-8 h-8 object-cover rounded-lg"
                  src={game.background_image}
                  alt=""
                />
                {game.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="flex gap-2 items-center">
          <Frown /> No games found.
        </p>
      );
  } else if (isError) {
    content = <p>Search error</p>;
  }

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-30" />
      )}
      <div className={cn("relative", className)}>
        <form className="relative z-30" ref={ref} role="search">
          <Search
            className="absolute top-1/2 translate-y-[-50%] left-2 text-zinc-400"
            size={18}
          />
          <Input
            className="pl-8 bg-background rounded-2xl"
            type="search"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onFocus={() => setFocused(true)}
            placeholder="Search for games..."
          />
        </form>

        <div
          className={cn(
            "absolute w-full bg-background rounded-2xl p-1 sm:p-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {content}
        </div>
      </div>
    </>
  );
};
