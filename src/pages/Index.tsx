import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta tags handled in index.html */}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ORPEAKS",
            "url": "https://orpeaks.com",
            "description": "All-in-one platform to launch and scale your store across the MENA region—payments, analytics, and growth tools included.",
            "sameAs": [
              "https://twitter.com/orpeaks",
              "https://linkedin.com/company/orpeaks"
            ]
          })
        }}
      />
      
      <Navigation />
      
      <main>
        <Hero />
        <Features />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
