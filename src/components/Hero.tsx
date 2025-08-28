import React from "react";

const logos = [
  "https://spreecommerce.org/wp-content/uploads/2024/07/kfc.svg",
  "https://spreecommerce.org/wp-content/uploads/2024/07/meundies.svg",
  "https://spreecommerce.org/wp-content/uploads/2024/07/bonobos.svg",
  "https://spreecommerce.org/wp-content/uploads/2024/07/godaddy.svg",
  "https://spreecommerce.org/wp-content/uploads/2024/07/goop.svg",
  "https://spreecommerce.org/wp-content/uploads/2024/07/huckberry.svg",
];

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-background to-orpeaks-section-bg overflow-hidden">
      <div className="container-orpeaks flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <p className="text-sm font-medium text-primary mb-3">Spree commerce</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Spree is an open-source eCommerce framework giving you full control and customizability
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Community Edition is free. <a href="https://spreecommerce.org/pricing/" className="text-primary underline">Enterprise Edition</a> comes with more features, more security, more integrations. Go live faster and get all the latest improvements first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/get-started/" className="btn-primary inline-flex items-center justify-center min-w-[180px]">
              Get started
            </a>
            <a href="https://demo.spreecommerce.org/" className="btn-outline inline-flex items-center justify-center min-w-[180px]">
              See demo
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://spreecommerce.org/wp-content/themes/spree/images/home-visual.webp" alt="" className="w-full h-auto" />
        </div>
      </div>

      <div className="mt-20">
        <p className="text-center text-sm uppercase tracking-wide text-muted-foreground mb-8">
          used by over 5K businesses worldwide
        </p>
        <div className="overflow-hidden">
          <div className="flex items-center gap-14 animate-marquee">
            {logos.map((src, i) => (
              <img key={i} src={src} alt="" className="h-10 w-auto" />
            ))}
            {logos.map((src, i) => (
              <img key={`clone-${i}`} src={src} alt="" className="h-10 w-auto" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
