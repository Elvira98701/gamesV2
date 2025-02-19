import React from "react";
import { Dialog } from "../ui";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface GameDialogProps {
  description: string;
}

export const GameDialog: React.FC<GameDialogProps> = ({ description }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-foreground text-background hover:bg-primary hover:text-foreground transition inline-flex items-center font-bold uppercase rounded-3xl h-9 px-4 py-2 text-sm">
        Read more
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-normal">About</DialogTitle>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto p-2">
          <p>{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
