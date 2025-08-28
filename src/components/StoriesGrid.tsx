const StoriesGrid = () => {
  const stories = [
    {
      category: "Composable",
      title: "GoDaddy chose ORPEAKS for their multi-tenant Ecommerce solution for small businesses",
      excerpt: "ORPEAKS powers multi-tenant storefronts with robust features and integrations.",
      href: "#"
    },
    {
      category: "DTC", 
      title: "A top NFL team uses ORPEAKS for their fan merchandise online store",
      excerpt: "Wishlist, shoppable gift guides, customized jersey builder, and more.",
      href: "#"
    },
    {
      category: "B2B",
      title: "B2B product sample ordering enabled with ORPEAKS + ERP integration", 
      excerpt: "Cart and checkout embedded with ERP sync and existing user accounts.",
      href: "#"
    },
    {
      category: "MENA",
      title: "Regional retailer scales across 12 MENA countries with ORPEAKS",
      excerpt: "Multi-currency, multi-language storefront with local payment methods.",
      href: "#"
    },
    {
      category: "Marketplace",
      title: "Fashion marketplace connects 500+ brands across the Middle East",
      excerpt: "Vendor onboarding, commission management, and unified customer experience.",
      href: "#"
    },
    {
      category: "Wholesale",
      title: "Electronics distributor digitalizes B2B sales with custom pricing",
      excerpt: "Customer-specific pricing, bulk orders, and automated reordering system.",
      href: "#"
    }
  ];

  return (
    <section id="stories" className="py-24 bg-background">
      <div className="container-orpeaks">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            ORPEAKS success stories
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <article key={index} className="card-hover bg-card/60 border border-border rounded-lg overflow-hidden backdrop-blur-sm">
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">{story.category}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {story.category}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                  <a href={story.href} className="hover:text-primary transition-colors">
                    {story.title}
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {story.excerpt}
                </p>
                <a 
                  href={story.href}
                  className="inline-flex items-center text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                >
                  Read story
                  <svg className="w-4 h-4 ms-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesGrid;