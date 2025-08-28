import StartTrialModal from "./StartTrialModal";

const FinalCta = () => {
  return (
    <section id="start" className="py-24 bg-orpeaks-section-bg/40">
      <div className="container-orpeaks">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Ready to start your business journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of entrepreneurs who have chosen ORPEAKS to power their online stores.
          </p>
          <StartTrialModal
            triggerText="Get Started Today"
            className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
