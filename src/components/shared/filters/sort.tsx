import { MoveDown, MoveUp } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { sortList } from "@/constants";
import { selectOrder, setOrder } from "@/features/filter";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { SortOrder } from "@/types/types";

export const Sort = () => {
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
            <SelectItem key={id} value={name} className="cursor-pointer">
              <span className="flex items-center gap-2">
                <span>{title}</span>{" "}
                {order === SortOrder.Desc ? (
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
