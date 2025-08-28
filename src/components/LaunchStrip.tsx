const LaunchStrip = () => {
  return (
    <section className="w-full bg-primary/10 border-y border-primary/20">
      <div className="container-orpeaks flex items-center justify-center gap-4 py-2 text-sm">
        <span className="px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">New</span>
        <span className="text-foreground">The Biggest Release Ever</span>
        <a href="#" className="text-primary font-medium hover:underline">
          Read more
        </a>
      </div>
    </section>
  );
};

export default LaunchStrip;
