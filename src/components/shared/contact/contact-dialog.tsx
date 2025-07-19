import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

import { ContactForm } from "./contact-form";

export const ContactDialog = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Dialog>
      <DialogTrigger className="bg-primary text-foreground inline-flex items-center font-bold uppercase rounded-3xl h-9 px-4 py-2 text-sm transition active:translate-y-1 hover-hover:bg-violet-300">
        Contact us
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-normal">
            Make our service better
          </DialogTitle>
          <DialogDescription>
            Do you have any questions, suggestions, or ideas to improve the
            service? We are always in touch!
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <p>Thanks for the feedback!</p>
        ) : (
          <ContactForm setIsSuccess={setIsSuccess} />
        )}
      </DialogContent>
    </Dialog>
  );
};
