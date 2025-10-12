import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Layout,
  Layers,
  Settings,
  ShoppingCart,
  Server,
  CheckCircle2,
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import storefrontThumb from "@/assets/storefront-thumb.jpg";
import b2bCommerce from "@/assets/b2b-commerce.jpg";
import marketplace from "@/assets/marketplace.jpg";
import wholesale from "@/assets/wholesale.jpg";
import multiStore from "@/assets/multi-store.jpg";
import multiRegion from "@/assets/multi-region.jpg";
import composable from "@/assets/composable.jpg";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadMessage, setLeadMessage] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [submissionMsg, setSubmissionMsg] = useState("");
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const closeLeadForm = () => {
    setShowLeadForm(false);
    setLeadSubmitted(false);
    setSubmissionMsg("");
    setLeadName("");
    setLeadEmail("");
    setLeadPhone("");
    setLeadMessage("");
  };

  useEffect(() => {
    if (showLeadForm) {
      nameInputRef.current?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeLeadForm();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [showLeadForm]);

  const features = [
    {
      icon: <Layout className="h-6 w-6" aria-hidden />,
      title: "Visual storefront builder",
      desc: "Drag, drop and publish pages without code — then hand off to devs when you need something custom.",
    },
    {
      icon: <Settings className="h-6 w-6" aria-hidden />,
      title: "Faster back‑office",
      desc: "Manage orders, products, promos and more with a streamlined admin.",
    },
    {
      icon: <Server className="h-6 w-6" aria-hidden />,
      title: "Headless & API‑first core",
      desc: "Typed REST APIs & webhooks to connect any frontend, app, WMS, ERP, CRM or data pipeline.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" aria-hidden />,
      title: "Checkout your way (and theirs)",
      desc: "Customize UX, payments, shipping and taxes. Support Apple Pay / Google Pay and more.",
    },
    {
      icon: <Layers className="h-6 w-6" aria-hidden />,
      title: "Multi‑store & multi‑catalog",
      desc: "Regions, stores, warehouses, catalogs and price lists — all in one place.",
    },
    {
      icon: <Globe2 className="h-6 w-6" aria-hidden />,
      title: "Global‑ready",
      desc: "Multi‑currency, multi‑language and local payment methods out of the box.",
    },
  ];

  const useCases = [
    {
      title: "B2B eCommerce",
      desc: "Account pricing, quotes (RFQ), purchase flows and post‑purchase support.",
      img: b2bCommerce,
    },
    {
      title: "Marketplace",
      desc: "Onboard vendors, sync catalogs, split orders and route shipments for dropship.",
      img: marketplace,
    },
    {
      title: "Wholesale",
      desc: "Volume pricing, quick order forms and reordering for repeat buyers.",
      img: wholesale,
    },
    {
      title: "Multi‑store",
      desc: "Run separate brands or resellers from a centralized admin.",
      img: multiStore,
    },
    {
      title: "Multi‑region",
      desc: "Serve localized catalogs, pricing and checkout across countries.",
      img: multiRegion,
    },
    {
      title: "Composable",
      desc: "Bring your own CMS, CDP, search and analytics into a modular stack.",
      img: composable,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-primary text-primary-foreground px-3 py-2 rounded-lg"
      >
        Skip to content
      </a>

      {/* Top banner */}
      <div className="w-full bg-[image:var(--gradient-brand)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-white">
          <span className="font-medium">New release:</span> Orpeaks 1.0 is here — faster admin, sections‑based pages, and easier integrations.
          <a
            href="#release"
            className="inline-flex items-center font-semibold underline underline-offset-4 ml-1 hover:opacity-80 transition-opacity"
          >
            Learn more <ChevronRight className="ml-0.5 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-border bg-background/70">
        <nav
          aria-label="Primary"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center" aria-label="Orpeaks logo">
              <svg viewBox="0 0 430 430" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <g>
                  <path d="M375.55,154.94c-21.53,31.28-62.32,81.9-85.82,109.47-.08.1-.18.19-.28.27-32.53,26.4-79.07,27.63-112.8,2.57-3.85-2.86-7.02-6.2-10.67-9.16-.89-.72-2.19-.56-2.89.34l-45.37,58.78s-32.03,38.96-46.47,56.52c-1.28,1.56-3.77.2-3.14-1.72,5.2-15.9,13.08-48.46,4.89-82.48-.12-.49.03-1.22.33-1.62l89.46-117.87c.35-.45.88-.72,1.45-.72h0c.51.25.94.47,1.45.72l38.94,50.99c.08.1.16.2.26.28,15.2,14.07,38.9,13.83,53.62-.77l.13-.14c14.04-15.93,15.31-16.53,27.91-33.64" />
                  <path d="M359.36,177.37l9.52-12.96s29.46-38.67,42.74-56.09c1.18-1.55-.7-3.48-2.37-2.44-13.87,8.61-42.91,23.72-77.09,24.55-.49.01-1.15.32-1.45.7l-44.93,56.69" />
                </g>
              </svg>
            </div>
            <span className="font-semibold tracking-tight">Orpeaks</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              data-testid="open-lead-form"
              onClick={() => setShowLeadForm(true)}
              className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-opacity"
            >
              Get started <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main id="main">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-subtle)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl/tight font-bold tracking-tight"
                >
                  The commerce platform that grows with your brand
                </motion.h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Launch fast on a flexible core, then tailor storefronts, catalogs, checkout and integrations as you scale — with Orpeaks.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => setShowLeadForm(true)}
                    className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-opacity"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-8 text-sm text-muted-foreground">No credit card required • Free trial • Cloud or self‑hosted</div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:justify-self-end"
              >
                <div className="relative rounded-2xl border border-border bg-card p-3 shadow-lg">
                  <img
                    src={dashboardPreview}
                    alt="Dashboard preview showing order management and analytics"
                    className="rounded-xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -left-6 hidden sm:block w-40 rounded-xl border border-border bg-card p-2 shadow-md">
                    <img
                      src={storefrontThumb}
                      alt="Mobile storefront preview"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brands / social proof */}
        <section className="py-12 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground">Trusted by teams worldwide</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 rounded bg-muted" aria-hidden />
              ))}
            </div>
          </div>
        </section>

        {/* Release section */}
        <section id="release" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold tracking-tight">Orpeaks 1.0 — our biggest release yet</h2>
              <p className="mt-4 text-muted-foreground">
                From no‑code pages to enterprise‑grade integrations — everything your team needs to build, launch and scale.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#platform" className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-4 py-2 font-semibold shadow-sm hover:opacity-90 transition-opacity">
                  Learn more
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "New dashboard", desc: "Redesigned for speed and clarity across orders, products and promos." },
                  { title: "No‑code pages", desc: "Drag & drop sections for landing pages, product listings and detail views." },
                  { title: "Payments & refunds", desc: "Cards, wallets, BNPL and bank redirects — plus automated refunds." },
                  { title: "Integrations", desc: "Connect marketing, analytics and ops via APIs & webhooks." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform / Features grid */}
        <section id="platform" className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">Commerce platform for modern brands</h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              Mix and match capabilities — storefront, inventory, checkout, payments and more — on a flexible API layer.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl bg-card border border-border p-6 shadow-sm">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center" aria-hidden>
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases / Solutions */}
        <section id="solutions" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">What you can build with Orpeaks</h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              From B2B flows to multi‑vendor marketplaces — tailor the experience for your model.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((c) => (
                <article key={c.title} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <img src={c.img} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  <div className="p-6">
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get Orpeaks updates</h2>
              <p className="mt-3 text-muted-foreground">Product news, tips and case studies — no spam, unsubscribe any time.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Thanks! We'll be in touch at ${email}.`);
                setEmail("");
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button type="submit" className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold shadow-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center" aria-label="Orpeaks logo">
                  <svg viewBox="0 0 430 430" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <g>
                      <path d="M375.55,154.94c-21.53,31.28-62.32,81.9-85.82,109.47-.08.1-.18.19-.28.27-32.53,26.4-79.07,27.63-112.8,2.57-3.85-2.86-7.02-6.2-10.67-9.16-.89-.72-2.19-.56-2.89.34l-45.37,58.78s-32.03,38.96-46.47,56.52c-1.28,1.56-3.77.2-3.14-1.72,5.2-15.9,13.08-48.46,4.89-82.48-.12-.49.03-1.22.33-1.62l89.46-117.87c.35-.45.88-.72,1.45-.72h0c.51.25.94.47,1.45.72l38.94,50.99c.08.1.16.2.26.28,15.2,14.07,38.9,13.83,53.62-.77l.13-.14c14.04-15.93,15.31-16.53,27.91-33.64" />
                      <path d="M359.36,177.37l9.52-12.96s29.46-38.67,42.74-56.09c1.18-1.55-.7-3.48-2.37-2.44-13.87,8.61-42.91,23.72-77.09,24.55-.49.01-1.15.32-1.45.7l-44.93,56.69" />
                    </g>
                  </svg>
                </div>
                <span className="font-semibold tracking-tight">Orpeaks</span>
              </div>
              <p className="mt-4 text-muted-foreground max-w-sm">
                Orpeaks is a flexible commerce platform for growing brands. Build quickly, customize deeply and scale confidently.
              </p>
            </div>
            <div className="md:col-span-2">
              <div>
                <h4 className="font-semibold">Company</h4>
                <p className="mt-1 text-muted-foreground">Orpeaks LLC</p>
                <p className="mt-1 text-muted-foreground">info@orpeaks.com</p>
                <p className="mt-1 text-muted-foreground">+12519013185</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Orpeaks. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lead‑capture Modal */}
      {showLeadForm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-form-title"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeLeadForm}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 w-full max-w-lg rounded-2xl bg-card shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h2 id="lead-form-title" className="text-xl font-semibold tracking-tight">Get started with Orpeaks</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tell us a bit about you and we'll reach out.</p>

              {!leadSubmitted ? (
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmissionMsg(
                      `Successful submission! Thanks, ${leadName}. We'll contact you at ${leadEmail}. We will open soon.`
                    );
                    setLeadSubmitted(true);
                  }}
                >
                  <div>
                    <label htmlFor="lead-name" className="block text-sm font-medium">Name</label>
                    <input
                      id="lead-name"
                      ref={nameInputRef}
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-email" className="block text-sm font-medium">Email</label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 focus:outline-none focus:ring-ring focus:ring-2"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-phone" className="block text-sm font-medium">Phone Number</label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-message" className="block text-sm font-medium">Message</label>
                    <textarea
                      id="lead-message"
                      value={leadMessage}
                      onChange={(e) => setLeadMessage(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 min-h-[96px] focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tell us about your project"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeLeadForm}
                      className="inline-flex items-center rounded-xl border border-border px-4 py-2 font-semibold hover:bg-muted transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-4 py-2 font-semibold shadow-sm hover:opacity-90 transition-opacity"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-6">
                  <div className="rounded-xl border border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-700 dark:text-green-400" aria-hidden />
                      <div>
                        <h3 className="font-semibold text-green-800 dark:text-green-300">Successful submission</h3>
                        <p className="mt-1 text-sm text-green-800 dark:text-green-300">{submissionMsg || "Successful submission! We will open soon."}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeLeadForm}
                      className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-4 py-2 font-semibold shadow-sm hover:opacity-90 transition-opacity"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
