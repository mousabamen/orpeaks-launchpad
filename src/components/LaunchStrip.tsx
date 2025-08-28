const LaunchStrip = () => {
  return (
    <section className="py-24 bg-orpeaks-section-bg/40">
      <div className="container-orpeaks">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 lg:max-w-lg">
            <div className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Bigger, Better, More
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              The Biggest Release Ever
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From no-code tools to enterprise-grade integrations — ORPEAKS has everything your 
              team needs to build, launch, and scale eCommerce faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary inline-flex items-center justify-center">
                Learn more
              </a>
              <a href="#" className="btn-outline inline-flex items-center justify-center">
                See demo
              </a>
            </div>
          </div>
          
          {/* Visual placeholder */}
          <div className="flex-1 lg:max-w-lg">
            <div className="relative">
              <div className="bg-card/60 border border-border rounded-xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Product Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchStrip;