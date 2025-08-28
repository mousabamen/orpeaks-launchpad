const FeatureTiles = () => {
  const baseUrl = "https://raw.githubusercontent.com/mousabamen/orpeaks-launchpad/refs/heads/main/imagea/";
  const tiles = [
    {
      title: "New Admin Dashboard Experience",
      text: "A redesigned dashboard for faster, smarter day-to-day management. Your team will love it!",
      image: "admin-dashboard.avif",
    },
    {
      title: "A No-code Customizable Storefront",
      text: "Mobile-first, built for content & conversion. Drag & drop sections – no developers needed.",
      image: "nocode-storefront.avif",
    },
    {
      title: "Integrations with Stripe, Stripe Connect, and Klaviyo",
      text: "No-code integrations to manage payments, marketing automations, and analytics at scale.",
      image: "api-integrations.avif",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-orpeaks">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiles.map((tile, index) => (
            <div key={index} className="text-center">
              <div className="card-hover bg-card border border-border rounded-xl p-6 mb-6">
                <img
                  src={`${baseUrl}${tile.image}`}
                  alt=""
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{tile.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tile.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
