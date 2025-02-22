import React from "react";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
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
  { id: 1, name: "-added", title: "Popularity" },
  { id: 2, name: "name", title: "Name" },
  { id: 3, name: "-rating", title: "Rating" },
];

export const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector(selectOrder);

  const handleChangeOrder = (value: string) => {
    dispatch(setOrder(value));
  };

  return (
    <Select value={order} onValueChange={handleChangeOrder}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by:" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sorting</SelectLabel>
          {sortList.map(({ id, name, title }) => (
            <SelectItem key={id} value={name}>
              {title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
