const DeepDives = () => {
  const features = [
    {
      title: "Storefront customization",
      text: "Easily customize your homepage, product listings and product detail pages. Use the default storefront or connect your own next.js frontend application.",
      align: "left",
      image: { file: "home-storefront-1024x632.avif", width: 1024, height: 632 }
    },
    {
      title: "Multi-region & Multi-store",
      text: "Manage unlimited products and variants individually or in bulk. Categorize, label, add custom attributes. Generate gift cards or discounts with a robust promo rule engine",
      align: "right",
      image: { file: "home-multi-region-1024x431.avif", width: 1024, height: 431 }
    },
    {
      title: "Inventory management",
      text: "Manage stock levels across sales channels and locations. Track stock movements, receive stock, make transfers. Make products available or discontinued on a given date.",
      align: "left",
      image: { file: "home-inventory-management-1024x431.avif", width: 1024, height: 431 }
    },
    {
      title: "Cart & Checkout",
      text: "Customize checkout to reflect your business logic. Style it to be on-brand. Manage shipping and taxes calculations. Enable fast checkout with Apple Pay or Google Pay.",
      align: "right",
      image: { file: "home-cart-checkout-1024x431.avif", width: 1024, height: 431 }
    },
    {
      title: "Payments & Refunds",
      text: "Capture payments with cards, Apple Pay, Google Pay, BNPL, local bank transfers and redirects, on terms. Use one or multiple payment processors. Automate refunds.",
      align: "left",
      image: { file: "home-payments-1024x632.avif", width: 1024, height: 632 }
    },
    {
      title: "Order & Return management",
      text: "Manage orders via admin dashboard or rely on automated order processing. Use order splitting by vendor in a dropshipping model. Support partial or full returns and exchanges.",
      align: "right",
      image: { file: "home-order-return-1024x431.avif", width: 1024, height: 431 }
    },
    {
      title: "Order Fulfillment",
      text: "Manage shipping across regions and warehouses. Use any shipping provider or aggregator. Track shippments in real time with email notifications for customers.",
      align: "left",
      image: { file: "home-order-fulfillment-1024x630.avif", width: 1024, height: 630 }
    },
    {
      title: "Emails & Marketing Automations",
      text: "Customize on-brand email notifications for customers around any order-related events. Automate post-purchase upselling, eg. abandoned cart emails or other scenarios.",
      align: "right",
      image: { file: "home-emails-1024x431.avif", width: 1024, height: 431 }
    },
    {
      title: "API & Integrations",
      text: "Connect ORPEAKS to any custom user interface eg. a Next.js storefront or a mobile app. Integrate ORPEAKS with any system using APIs or webhooks, eg. WMS, ERP, CRM.",
      align: "left",
      image: { file: "home-api-1024x431.avif", width: 1024, height: 431 }
    }
  ];

  return (
    <>
      {features.map((feature, index) => (
        <section
          key={index}
          className="photo-with-text-wrap is-style-with-bck alignwide text-align-left"
        >
          <div className={`photo-with-text ${feature.align === 'right' ? 'right-photo' : 'left-photo'}`}> 
            <div className="desc">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
            <div className="photo">
              <img
                decoding="async"
                loading="lazy"
                src={`https://raw.githubusercontent.com/mousabamen/orpeaks-launchpad/refs/heads/main/imagea/${feature.image.file}`}
                alt=""
                width={feature.image.width}
                height={feature.image.height}
              />
            </div>
            <div className="anim-image">
              {/* Lottie animation placeholder */}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default DeepDives;
