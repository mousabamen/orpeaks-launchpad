import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const wordsRef = useRef<HTMLDivElement>(null);
  const partnerLogos = ["KFC", "GoDaddy", "Bonobos", "Bookshop", "Huckberry", "Paneco"];

  useEffect(() => {
    const words = wordsRef.current?.querySelectorAll('.hero-word');
    if (!words) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      words.forEach(word => word.classList.add('animate-in'));
      return;
    }

    // Stagger the animation
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add('animate-in');
      }, index * 200);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-orpeaks-section-bg"
        style={{ background: 'var(--hero-gradient)' }}
      />
      
      <div className="relative z-10 container-orpeaks text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated headline */}
          <h1 className="mb-6 font-light tracking-wide">
            <div className="text-5xl sm:text-6xl lg:text-7xl text-foreground mb-2">
              Be the next
            </div>
            <div ref={wordsRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary">
              <span className="hero-word inline-block me-4">big</span>
              <span className="hero-word inline-block">thing</span>
            </div>
          </h1>

          {/* Supporting paragraph */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            ORPEAKS gives you everything you need to start and grow your online business in the MENA region.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#start"
              className="btn-primary inline-flex items-center justify-center min-w-[180px]"
            >
              Start for Free
            </a>
            <a
              href="#features"
              className="btn-outline inline-flex items-center justify-center min-w-[180px]"
            >
              Explore Features
            </a>
          </div>

          {/* Partner logos */}
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading brands</p>
            <div className="marquee">
              <div className="marquee-content">
                {partnerLogos.concat(partnerLogos).map((logo, index) => (
                  <div
                    key={index}
                    className="text-muted-foreground/70 font-semibold text-xl whitespace-nowrap mx-6"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Release badge */}
      <div className="absolute top-8 right-8 text-right">
        <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3">
          <p className="text-xs uppercase text-primary mb-1">ORPEAKS</p>
          <p className="text-sm font-semibold leading-snug text-foreground">
            The Biggest
            <br />
            Release Ever
          </p>
          <a href="#" className="mt-2 inline-block text-primary">
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--orpeaks-accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
};

export default Hero;