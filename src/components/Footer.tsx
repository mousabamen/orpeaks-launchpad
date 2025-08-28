const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orpeaks-section-bg border-t border-border">
      <div className="container-orpeaks py-8 text-center space-y-2">
        <div className="text-2xl font-bold text-foreground">ORPEAKS</div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} ORPEAKS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
