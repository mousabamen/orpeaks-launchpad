import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
          Contact Us
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              name="name"
              required
              className="bg-background border-border text-foreground"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-background border-border text-foreground"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              className="bg-background border-border text-foreground resize-none"
              placeholder="Your message..."
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;