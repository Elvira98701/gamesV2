import React from "react";
import { Dialog } from "../ui";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Filters } from "./filters";
import { SlidersHorizontal } from "lucide-react";

export const FilterDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-muted text-foreground transition inline-flex items-center font-bold uppercase rounded-lg px-4 py-2 text-sm">
        <SlidersHorizontal size={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-normal">Filters</DialogTitle>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto">
          <Filters />
        </div>
      </DialogContent>
    </Dialog>
  );
};
