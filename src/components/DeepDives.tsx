const DeepDives = () => {
  const features = [
    {
      title: "Storefront customization",
      text: "Easily customize your homepage, product listings and product detail pages. Use the default storefront or connect your own next.js frontend application.",
      align: "left"
    },
    {
      title: "Multi-region & Multi-store", 
      text: "Manage unlimited products and variants individually or in bulk. Categorize, label, add custom attributes. Generate gift cards or discounts with a robust promo rule engine",
      align: "right"
    },
    {
      title: "Inventory management",
      text: "Manage stock levels across sales channels and locations. Track stock movements, receive stock, make transfers. Make products available or discontinued on a given date.",
      align: "left"
    },
    {
      title: "Cart & Checkout",
      text: "Customize checkout to reflect your business logic. Style it to be on-brand. Manage shipping and taxes calculations. Enable fast checkout with Apple Pay or Google Pay.",
      align: "right"
    },
    {
      title: "Payments & Refunds",
      text: "Capture payments with cards, Apple Pay, Google Pay, BNPL, local bank transfers and redirects, on terms. Use one or multiple payment processors. Automate refunds.",
      align: "left"
    },
    {
      title: "Order & Return management",
      text: "Manage orders via admin dashboard or rely on automated order processing. Use order splitting by vendor in a dropshipping model. Support partial or full returns and exchanges.",
      align: "right"
    },
    {
      title: "Order Fulfillment",
      text: "Manage shipping across regions and warehouses. Use any shipping provider or aggregator. Track shippments in real time with email notifications for customers.",
      align: "left"
    },
    {
      title: "Emails & Marketing Automations",
      text: "Customize on-brand email notifications for customers around any order-related events. Automate post-purchase upselling, eg. abandoned cart emails or other scenarios.",
      align: "right"
    },
    {
      title: "API & Integrations",
      text: "Connect ORPEAKS to any custom user interface eg. a Next.js storefront or a mobile app. Integrate ORPEAKS with any system using APIs or webhooks, eg. WMS, ERP, CRM.",
      align: "left"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container-orpeaks">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                feature.align === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image placeholder */}
              <div className="flex-1 lg:max-w-lg">
                <div className="card-hover bg-card/60 border border-border rounded-xl p-8 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 lg:max-w-lg">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepDives;