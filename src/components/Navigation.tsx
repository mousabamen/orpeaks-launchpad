import StartTrialModal from "./StartTrialModal";

const Navigation = () => {
  return (
    <header id="Navigation" className="bg-white/80 backdrop-blur border-b border-border">
      <div className="container-orpeaks flex items-center justify-between py-4">
        <a href="/" className="text-xl font-bold text-foreground">
          ORPEAKS
        </a>
        <div className="flex items-center gap-6">
          <a
            href="mailto:contact@orpeaks.com"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </a>
          <StartTrialModal className="btn-primary text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
