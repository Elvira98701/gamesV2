import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Dialog } from "@/components/ui";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Filters } from "./filters";

export const FilterDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-muted text-foreground transition inline-flex items-center font-bold uppercase rounded-lg px-4 py-2 text-sm">
        <SlidersHorizontal size={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-normal">Filters</DialogTitle>
          <DialogDescription>
            Adjust the filters to find games that suit your interests.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto">
          <Filters />
        </div>
      </DialogContent>
    </Dialog>
  );
};
