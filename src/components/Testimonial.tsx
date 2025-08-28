const Testimonial = () => {
  const kpis = [
    "5,000+ active stores — Powered by ORPEAKS in the MENA region",
    "99.9% uptime — Reliable hosting for your business", 
    "0% transaction fees — On ORPEAKS payment processing"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-orpeaks">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl sm:text-3xl font-light text-foreground mb-8 leading-relaxed">
              "ORPEAKS has given us the platform we needed to expand our business across the MENA region with ease."
            </blockquote>
            <footer className="text-muted-foreground">
              <cite className="not-italic">
                <div className="font-semibold text-foreground">Ahmed Al-Mansoori</div>
                <div className="text-sm">Founder, Desert Designs</div>
              </cite>
            </footer>
          </div>
          
          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  {kpi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;