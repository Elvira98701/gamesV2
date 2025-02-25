import React from "react";
import { Pagination } from "@/components/ui";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  selectCurrentPage,
  setCurrentPage,
} from "@/features/filter/filterSlice";

interface GamesPaginationProps {
  count: number;
  setSearchParams: (params: URLSearchParams) => void;
}

export const GamesPagination: React.FC<GamesPaginationProps> = ({ count }) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = Math.min(Math.ceil(count / 12), 100);

  const goToPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 2) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              className="text-xs md:text-sm"
              href="#"
              isActive={i === currentPage}
              onClick={(e) => {
                e.preventDefault();
                goToPage(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (i === 2 || i === totalPages - 1) {
        pages.push(
          <PaginationItem key={`ellipsis-${i}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) goToPage(currentPage - 1);
            }}
            className="h-9 w-9"
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) goToPage(currentPage + 1);
            }}
            className="h-9 w-9"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
