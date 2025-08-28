import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyOrpeaks from "@/components/WhyOrpeaks";
import LaunchStrip from "@/components/LaunchStrip";
import FeatureTiles from "@/components/FeatureTiles";
import CommerceShowcase from "@/components/CommerceShowcase";
import SolutionHeader from "@/components/SolutionHeader";
import DeepDives from "@/components/DeepDives";
import MenaFocus from "@/components/MenaFocus";
import Testimonial from "@/components/Testimonial";
import FinalCta from "@/components/FinalCta";
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
        <WhyOrpeaks />
        <LaunchStrip />
        <FeatureTiles />
        <CommerceShowcase />
        <SolutionHeader />
        <DeepDives />
        <MenaFocus />
        <Testimonial />
        <FinalCta />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
