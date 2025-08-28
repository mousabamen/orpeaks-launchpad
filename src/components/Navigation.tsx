import ContactForm from './ContactForm';

const Navigation = () => {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ];

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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ContactForm />
            <a
              href="#login"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Log in
            </a>
            <a
              href="#start"
              className="btn-primary text-sm font-medium px-4 py-2"
            >
              Start free trial
            </a>
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