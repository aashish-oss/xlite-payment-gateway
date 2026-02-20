import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Smartphone, CreditCard, Wallet, ArrowRight, RefreshCcw, Globe, CalendarCheck, Zap, Send, Plane, Bus, Hotel, Building2, IdCard, ShoppingCart, Code2, Users, Monitor, Package, Train, MapPin, Palette, Megaphone, UtilityPole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s*[&–—]\s*/g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const services = [
  { icon: Smartphone, title: "UPI Payment API", desc: "Accept payments via all UPI apps — Google Pay, PhonePe, Paytm, and more. Instant settlement with real-time notifications.", color: "text-primary" },
  { icon: CreditCard, title: "Credit & Debit Cards", desc: "Accept Visa, Mastercard, RuPay, and Amex with tokenized card storage and 3D Secure authentication.", color: "text-accent" },
  { icon: ShoppingCart, title: "Collections API", desc: "Unified API for accepting payments via UPI, cards, wallets, and netbanking with instant settlement.", color: "text-primary" },
  { icon: Plane, title: "Verification API", desc: "Instant mobile number and email verification with OTP, ensuring secure transactions and user authentication.", color: "text-accent" },
  { icon : Bus, title: "Travel API", desc: "Book flights, trains, and buses with real-time availability, pricing, and secure payment processing.", color: "text-primary" },
  { icon: ArrowRight, title: "Payout API", desc: "Send payouts to bank accounts, UPI IDs, or wallets instantly. Automate vendor payments and refunds.", color: "text-primary" },
  { icon: Zap, title: "Recharge & Bill Payment API", desc: "Mobile recharge, DTH, electricity, gas, water, and broadband bill payments via a single API integration.", color: "text-primary" },
  { icon: Send, title: "DMT API", desc: "Domestic Money Transfer API enabling instant fund transfers to any bank account across India via IMPS/NEFT.", color: "text-accent" },
  { icon: Globe, title: "AEPS API", desc: "Aadhaar Enabled Payment System API for cash withdrawal, balance enquiry, and mini statement using biometrics.", color: "text-primary" },
  { icon: IdCard, title: "PAN Card API", desc: "Instant PAN card verification, UTI/NSDL PAN application, and correction services through a simple API.", color: "text-accent" },
  { icon: Building2, title: "Account Opening API", desc: "Instant bank account opening with KYC verification, e-signature, and seamless integration for your customers.", color: "text-primary" },
  { icon: Package, title: "CMS & Dashboard", desc: "Comprehensive dashboard for transaction monitoring, settlement tracking, and detailed analytics with exportable reports.", color: "text-accent" },
];

const softwareServices = [
  { icon: CreditCard, title: "Payment Solution – White Label", desc: "Fully branded payment gateway solution with your logo, domain, and customizable checkout experience.", color: "text-primary" },
  { icon: Building2, title: "B2B Software", desc: "Enterprise-grade B2B platform with multi-level user management, commission structures, and reporting dashboards.", color: "text-accent" },
  { icon: ShoppingCart, title: "E-Commerce Software", desc: "Complete e-commerce solution with product management, cart, payments, order tracking, and inventory system.", color: "text-primary" },
  { icon: Code2, title: "Web Development", desc: "Custom website and web application development with modern tech stack, responsive design, and SEO optimization.", color: "text-accent" },
  { icon: Users, title: "Reseller Software", desc: "Multi-tier reseller platform with automated commission distribution, downline management, and white-label portal.", color: "text-primary" },
  { icon: Code2, title: "Software Development", desc: "End-to-end software development — from requirement analysis and design to development, testing, and deployment.", color: "text-accent" },
  { icon: Monitor, title: "Custom Web Development", desc: "Tailored web applications and portals built with scalable architecture, APIs, and modern frameworks.", color: "text-primary" },
  { icon: Palette, title: "Web Design", desc: "User-centric web design with responsive layouts, UI/UX best practices, and conversion-focused interfaces.", color: "text-accent" },
  { icon: Palette, title: "Logo & Graphic Designing", desc: "Brand identity, logos, brochures, social media creatives, and print-ready graphic design solutions.", color: "text-primary" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, SEM, social media marketing, content marketing, and analytics to grow your online presence.", color: "text-accent" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android with smooth UX and backend integration.", color: "text-primary" },
  { icon: Smartphone, title: "Android App Development", desc: "Custom Android applications — from concept to Play Store launch, with material design and best practices.", color: "text-accent" },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.pathname, location.hash]);

  return (
  <>
    <section className="bg-hero py-20">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Our Services
        </motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          A complete payment stack for every business need — from collections to payouts.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className=" container">
        <SectionHeading badge="Products" title="Payment & APIs Solution" description="Integrate any payment method with our simple, well-documented REST APIs." />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div key={s.title} id={toSlug(s.title)} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="flex gap-5 rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg scroll-mt-24"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className={`h-6 w-6 ${s.color}`} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>



        <SectionHeading badge="Software" title="Software & IT Solutions" description="White-label platforms, B2B tools, and custom development for your business." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {softwareServices.map((s, i) => (
            <motion.div key={s.title} id={toSlug(s.title)} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="flex gap-5 rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg scroll-mt-24"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className={`h-6 w-6 ${s.color}`} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/developers">View API Documentation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </>
  );
};

export default Services;
