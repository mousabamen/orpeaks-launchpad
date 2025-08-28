const UseCaseGrid = () => {
  const useCases = [
    {
      title: "B2B eCommerce",
      text: "Sell high-value items or wholesale in a custom purchasing flow with customer segmentation, RFQs, order and payment adjustments and post-purchase support.",
      href: "#"
    },
    {
      title: "Marketplace",
      text: "Onboard vendors to sync their products. Merchendise your marketplace with product categorization, unified filters, product labels. Split multi-vendor orders for dropshipping.",
      href: "#"
    },
    {
      title: "Wholesale",
      text: "Sell wholesale with customer segmentation, price lists, volume pricing, re-ordering, and quick-order forms. Offer RFQs for custom orders and flexible payment options.",
      href: "#"
    },
    {
      title: "Multi-store",
      text: "Enable your multiple brands, customers or resellers to run separate stores with centralized or separate product catalogs. Manage all stores from your admin panel.",
      href: "#"
    },
    {
      title: "Multi-region",
      text: "Sell in multiple regions or countries, in any language, any currency, any payment method or shipping provider. Manage all shopping experiences in one admin panel.",
      href: "#"
    },
    {
      title: "Composable eCommerce",
      text: "Connect ORPEAKS to your existing ecosystem in an API-first mode to power custom shopping experiences in concert with your WMS, ERP, CRM or any other system or app.",
      href: "#"
    }
  ];

  return (
    <section className="py-24 bg-orpeaks-section-bg/20">
      <div className="container-orpeaks">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            This is what you can build with ORPEAKS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <a
              key={index}
              href={useCase.href}
              className="card-hover bg-card/60 border border-border rounded-lg p-6 backdrop-blur-sm block group"
              style={{ background: 'var(--card-gradient)' }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.text}
              </p>
              <div className="mt-4 flex items-center text-primary">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 ms-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;