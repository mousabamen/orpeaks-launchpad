const MenaFocus = () => {
  const bullets = [
    {
      title: "Local payment methods",
      text: "Support for popular regional payment options"
    },
    {
      title: "Arabic-first interface", 
      text: "Fully RTL supported dashboard and storefront"
    },
    {
      title: "Regional compliance",
      text: "Built to meet local business regulations"
    }
  ];

  return (
    <section className="py-24 bg-orpeaks-section-bg/20">
      <div className="container-orpeaks">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Built for the MENA region
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                ORPEAKS puts your store front and center for customers across the Middle East and North Africa, 
                with localized payment methods and Arabic language support.
              </p>
              
              <div className="space-y-6">
                {bullets.map((bullet, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-1 bg-primary rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {bullet.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {bullet.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* MENA Badge */}
            <div className="flex-shrink-0">
              <div className="mena-badge">
                <div className="text-center">
                  <div className="text-xs font-bold text-primary leading-tight">
                    MENA
                    <br />
                    <span className="text-[10px] font-normal">Region Focus</span>
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

export default MenaFocus;