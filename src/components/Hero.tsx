import { useEffect, useState } from 'react';

const phrases = [
  'big thing',
  'one to watch',
  'category creator',
  'unicorn startup',
  'household name',
  'global empire',
  'solo flier',
  'store they line up for',
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const phrase = phrases[index];

  return (
    <section
      className="relative grid grid-cols-1 pb-0 text-foreground pt-40 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://cdn.shopify.com/b/shopify-brochure2-assets/7ecd57f2fa3d7b997d29181a62c954ee.png?originalWidth=1920&originalHeight=1080')",
      }}
    >
      <video
        aria-label="Footage of merchants making sales, managing their business, and celebrating their success."
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero-dark-b9aa9e3025eea3a701d59a04b1ed47ce6738c8b67cdd192d08bc7569b0ce3f4b.mp4"
      />
      <div className="container relative z-10 flex flex-col justify-end gap-6 sm:min-h-[60vh] lg:min-h-[80vh] pt-32 pb-20">
        <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
          Be the next{' '}
          <span key={phrase} className="block sm:inline hero-word animate-in">
            {phrase}
          </span>
        </h1>
        <p className="max-w-md sm:max-w-sm text-lg text-foreground/80">
          Dream big, build fast, and grow far on ORPEAKS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#start" className="btn-primary text-center w-full sm:w-auto">
            Start for free
          </a>
          <button
            type="button"
            className="btn-outline w-full sm:w-auto"
          >
            Why we build ORPEAKS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

