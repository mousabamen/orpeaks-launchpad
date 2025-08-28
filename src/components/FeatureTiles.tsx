const FeatureTiles = () => {
  const tiles = [
    {
      title: "New Admin Dashboard Experience",
      text: "A redesigned dashboard for faster, smarter day-to-day management. Your team will love it!",
      icon: "dashboard"
    },
    {
      title: "A No-code Customizable Storefront", 
      text: "Mobile-first, built for content & conversion. Drag & drop sections – no developers needed.",
      icon: "storefront"
    },
    {
      title: "Integrations with Stripe, Stripe Connect, and Klaviyo",
      text: "No-code integrations to manage payments, marketing automations, and analytics at scale.",
      icon: "integrations"
    }
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'dashboard':
        return (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'storefront':
        return (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'integrations':
        return (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container-orpeaks">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiles.map((tile, index) => (
            <div key={index} className="text-center">
              {/* Image placeholder with icon */}
              <div className="card-hover bg-card/60 border border-border rounded-xl p-8 mb-6 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-primary">
                    {getIcon(tile.icon)}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {tile.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tile.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;