import {
  LayoutDashboard,
  MonitorCog,
  Boxes,
  Store,
  ShoppingCart,
  CreditCard,
  RotateCcw,
  Mail,
  Link as LinkIcon,
} from "lucide-react";

const FeatureTiles = () => {
  const tiles = [
    {
      title: "Admin Dashboard",
      text: "Manage your operations with an intuitive, real-time dashboard.",
      icon: LayoutDashboard,
    },
    {
      title: "No-code Storefront Customization",
      text: "Design your storefront with drag-and-drop simplicity—no coding required.",
      icon: MonitorCog,
    },
    {
      title: "Inventory Management",
      text: "Track stock levels and organize products effortlessly across locations.",
      icon: Boxes,
    },
    {
      title: "Multi-Store Support",
      text: "Run multiple storefronts from a single account with centralized control.",
      icon: Store,
    },
    {
      title: "Checkout System",
      text: "Streamlined checkout optimized for conversions on any device.",
      icon: ShoppingCart,
    },
    {
      title: "Payment Integrations",
      text: "Accept payments with ease through built-in gateways and providers.",
      icon: CreditCard,
    },
    {
      title: "Refunds and Order Management",
      text: "Process returns and manage orders with clear, simple workflows.",
      icon: RotateCcw,
    },
    {
      title: "Email Marketing",
      text: "Engage customers and automate campaigns with powerful email tools.",
      icon: Mail,
    },
    {
      title: "API Integrations",
      text: "Connect your tech stack through flexible, well-documented APIs.",
      icon: LinkIcon,
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container-orpeaks">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiles.map(({ title, text, icon: Icon }, index) => (
            <div key={index} className="text-center">
              <div className="card-hover bg-card/60 border border-border rounded-xl p-8 mb-6 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
