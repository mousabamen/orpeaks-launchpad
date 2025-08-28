const CommerceShowcase = () => {
  const features = [
    {
      title: "All-in-one commerce tools",
      text: "Manage products, payments, and marketing from a single dashboard—just like hosted platforms such as Shopify.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v4H3zM3 9h18v12H3z" />
        </svg>
      ),
    },
    {
      title: "Open-source flexibility",
      text: "Customize every part of your store with an open architecture inspired by frameworks like Spree Commerce.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      title: "Built to scale",
      text: "From first sale to global brand, our infrastructure grows with you.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-orpeaks-section-bg">
      <div className="container-orpeaks text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Built for modern commerce</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          We combine the best of hosted platforms with the flexibility of open-source solutions so you can build the store you imagine.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 bg-card/60 border border-border rounded-xl backdrop-blur-sm">
              <div className="mb-4 text-primary flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommerceShowcase;
