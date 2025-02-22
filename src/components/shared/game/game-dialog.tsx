import React from "react";
import { Dialog } from "@/components/ui";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <DialogDescription>
            Read a detailed description of the game.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto p-2">
          <p>{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
