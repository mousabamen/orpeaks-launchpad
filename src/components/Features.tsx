import React from "react";

const features = [
  {
    title: "New Admin Dashboard Experience",
    text: "A redesigned dashboard for faster, smarter day-to-day management. Your team will love it!",
    image: "https://spreecommerce.org/wp-content/uploads/2025/04/new-admin-dashboard.webp",
  },
  {
    title: "A No-code Customizable Storefront",
    text: "Mobile-first, built for content & conversion. Drag & drop sections – no developers needed.",
    image: "https://spreecommerce.org/wp-content/uploads/2025/04/no-code-storefront.webp",
  },
  {
    title: "Integrations with Stripe, Stripe Connect, and Klaviyo",
    text: "No-code integrations to manage payments, marketing automations, and analytics at scale.",
    image: "https://spreecommerce.org/wp-content/uploads/2025/04/stripe-connect-klaviyo.webp",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="container-orpeaks text-center mb-16">
        <p className="text-sm font-medium text-primary mb-2">Bigger, Better, More</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Spree 5: The Biggest Release Ever</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          From no-code tools to enterprise-grade integrations — Spree 5 has everything your team needs to build, launch, and scale eCommerce faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://spreecommerce.org/announcing-spree-5-the-biggest-open-source-release-ever/" className="btn-primary inline-flex items-center justify-center min-w-[180px]">
            Learn more
          </a>
          <a href="https://demo.spreecommerce.org/" className="btn-outline inline-flex items-center justify-center min-w-[180px]">
            See demo
          </a>
        </div>
      </div>

      <div className="container-orpeaks grid gap-8 md:grid-cols-3">
        {features.map(({ title, text, image }, i) => (
          <div key={i} className="text-left">
            <div className="mb-6 overflow-hidden rounded-xl">
              <img src={image} alt="" className="w-full h-auto object-cover" />
            </div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
