import ContactForm from "./ContactForm";
import FreeTrialModal from "./FreeTrialModal";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-orpeaks">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-foreground">
              ORPEAKS
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <ContactForm />
            <FreeTrialModal />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ContactForm />
            <FreeTrialModal />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
