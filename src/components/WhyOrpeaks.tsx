const WhyOrpeaks = () => {
  const features = [
    {
      title: "Easy store setup",
      text: "No coding required - get your store up and running in minutes."
    },
    {
      title: "Secure hosting & payments", 
      text: "Enterprise-grade security for your store and customer data."
    },
    {
      title: "Real-time dashboard",
      text: "Track sales, customers, and inventory with insightful analytics."
    },
    {
      title: "Growth marketing tools",
      text: "Built-in SEO, email marketing, and social media integration."
    },
    {
      title: "MENA region focus",
      text: "Tailored for the Middle East and North Africa markets."
    },
    {
      title: "24/7 Support",
      text: "Dedicated support team available whenever you need help."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container-orpeaks">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Why ORPEAKS?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ORPEAKS is built for entrepreneurs, creators, and businesses who want simplicity without limits. 
              Our platform combines powerful tools with an easy experience, so you can focus on growing your 
              business—not struggling with tech.
            </p>
          </div>
          
          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-hover bg-card/60 border border-border rounded-lg p-6 backdrop-blur-sm"
                style={{ background: 'var(--card-gradient)' }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOrpeaks;