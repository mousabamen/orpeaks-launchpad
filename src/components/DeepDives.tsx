const DeepDives = () => {
  const baseUrl = "https://raw.githubusercontent.com/mousabamen/orpeaks-launchpad/refs/heads/main/imagea/";
  const features = [
    {
      title: "Storefront customization",
      text: "Easily customize your homepage, product listings and product detail pages. Use the default storefront or connect your own next.js frontend application.",
      align: "left",
      image: "storefront.avif",
    },
    {
      title: "Multi-region & Multi-store",
      text: "Manage unlimited products and variants individually or in bulk. Categorize, label, add custom attributes. Generate gift cards or discounts with a robust promo rule engine",
      align: "right",
      image: "multi-region.avif",
    },
    {
      title: "Inventory management",
      text: "Manage stock levels across sales channels and locations. Track stock movements, receive stock, make transfers. Make products available or discontinued on a given date.",
      align: "left",
      image: "inventory.avif",
    },
    {
      title: "Cart & Checkout",
      text: "Customize checkout to reflect your business logic. Style it to be on-brand. Manage shipping and taxes calculations. Enable fast checkout with Apple Pay or Google Pay.",
      align: "right",
      image: "cart-checkout.avif",
    },
    {
      title: "Payments & Refunds",
      text: "Capture payments with cards, Apple Pay, Google Pay, BNPL, local bank transfers and redirects, on terms. Use one or multiple payment processors. Automate refunds.",
      align: "left",
      image: "payments.avif",
    },
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
              <div className="flex-1 lg:max-w-lg">
                <div className="card-hover bg-card border border-border rounded-xl p-6">
                  <img
                    src={`${baseUrl}${feature.image}`}
                    alt=""
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 lg:max-w-lg">
                <h3 className="text-3xl font-bold text-foreground mb-6">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepDives;
