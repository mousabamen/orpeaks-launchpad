const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "Templates"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Contact"],
    },
    {
      title: "Resources",
      links: ["Docs", "Guides", "Community", "Support"],
    },
  ];

  return (
    <footer className="bg-orpeaks-section-bg border-t border-border">
      <div className="container-orpeaks py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-foreground mb-4">
              ORPEAKS
            </div>
            <p className="text-sm text-muted-foreground">
              Commerce platform for the MENA region.
            </p>
          </div>
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ORPEAKS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;