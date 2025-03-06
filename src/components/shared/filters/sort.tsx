import React from "react";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { MoveDown, MoveUp } from "lucide-react";
import { selectOrder, setOrder } from "@/features/filter/filterSlice";
import { Select } from "@/components/ui";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortList = [
  { id: 1, name: "-added", title: "Popularity", order: "desc" },
  { id: 2, name: "added", title: "Popularity", order: "asc" },
  { id: 3, name: "-name", title: "Name", order: "desc" },
  { id: 4, name: "name", title: "Name", order: "asc" },
  { id: 5, name: "-rating", title: "Rating", order: "desc" },
  { id: 6, name: "rating", title: "Rating", order: "asc" },
  { id: 7, name: "-released", title: "Released", order: "desc" },
  { id: 8, name: "released", title: "Released", order: "asc" },
];

export const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector(selectOrder);

  const handleChangeOrder = (value: string) => {
    dispatch(setOrder(value));
  };

  return (
    <Select value={order} onValueChange={handleChangeOrder}>
      <SelectTrigger className="w-[180px] rounded-2xl bg-background">
        <SelectValue placeholder="Sort by:" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorting</SelectLabel>
          {sortList.map(({ id, name, title, order }) => (
            <SelectItem key={id} value={name}>
              <span className="flex items-center gap-2">
                <span>{title}</span>{" "}
                {order === "desc" ? (
                  <MoveDown size={12} />
                ) : (
                  <MoveUp size={12} />
                )}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
