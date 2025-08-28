import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StartTrialModalProps {
  triggerText?: string;
  className?: string;
}

const StartTrialModal = ({ triggerText = "Start Free Trial", className = "" }: StartTrialModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className={className}>{triggerText}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-foreground">
            We're opening soon! Leave your contact info and we’ll notify you when we launch.
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="trial-name" className="text-foreground">Name</Label>
            <Input id="trial-name" required className="bg-background border-border text-foreground" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="trial-email" className="text-foreground">Email</Label>
            <Input id="trial-email" type="email" required className="bg-background border-border text-foreground" placeholder="you@email.com" />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StartTrialModal;
