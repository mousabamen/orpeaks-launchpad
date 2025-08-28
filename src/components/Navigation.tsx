import ContactForm from './ContactForm';

const Navigation = () => {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <header id="Navigation" className="site-header alignfull">
      <div className="nav-inner">
        <a className="brand" href="/">
          ORPEAKS
        </a>
        <nav className="primary-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <ContactForm />
          <a href="#login">Log in</a>
          <a href="#start" className="btn blue">
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;