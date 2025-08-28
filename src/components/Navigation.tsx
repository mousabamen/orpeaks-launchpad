import ContactForm from './ContactForm';

const Navigation = () => {

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-orpeaks">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-foreground">
              ORPEAKS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ContactForm />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <ContactForm />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;