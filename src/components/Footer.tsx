const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-orpeaks-section-bg border-t border-border">
      <div className="container-orpeaks py-16">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-2">
            ORPEAKS
          </div>
          <p className="text-muted-foreground text-sm">
            © {currentYear} ORPEAKS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;