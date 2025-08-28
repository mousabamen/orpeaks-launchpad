import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const FreeTrialModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Thanks for your interest!",
      description: "We'll notify you as soon as we launch.",
    });
    setIsSubmitting(false);
    setIsOpen(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="btn-primary text-sm font-medium px-4 py-2">
          Start Free Trial
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            We're opening soon!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Leave your contact info and we'll notify you when we launch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="trial-name" className="text-foreground">
              Name
            </Label>
            <Input
              id="trial-name"
              name="name"
              required
              className="bg-background border-border text-foreground"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="trial-email" className="text-foreground">
              Email
            </Label>
            <Input
              id="trial-email"
              name="email"
              type="email"
              required
              className="bg-background border-border text-foreground"
              placeholder="you@example.com"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? "Submitting..." : "Notify Me"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeTrialModal;
