import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import {
  CreditCard, Smartphone, Landmark, Wallet, ArrowRight,
  ShieldCheck, BarChart3, RefreshCcw, Users, Zap, Globe,
  CheckCircle2, Clock, TrendingUp
} from "lucide-react";

const paymentMethods = [
  { icon: Smartphone, label: "UPI" },
  { icon: CreditCard, label: "Cards" },
  { icon: Wallet, label: "Wallets" },
];

const features = [
  { icon: BarChart3, title: "Merchant Dashboard", desc: "Monitor every transaction with real-time analytics and detailed reporting." },
  { icon: Clock, title: "Real-time Status", desc: "Instant payment status updates with webhook notifications." },
  { icon: TrendingUp, title: "Smart Settlements", desc: "Fast settlements with automated payout scheduling." },
  { icon: RefreshCcw, title: "Refund Management", desc: "One-click refunds and automated dispute resolution." },
  { icon: Users, title: "Multi-user Access", desc: "Role-based access for your entire team with audit trails." },
  { icon: ShieldCheck, title: "Fraud Detection", desc: "AI-powered fraud prevention with zero false positives." },
];

const stats = [
  { value: "99.99%", label: "Uptime" },
  { value: "50M+", label: "Transactions" },
  { value: "10K+", label: "Merchants" },
  { value: "<200ms", label: "Avg Response" },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden bg-hero py-24 md:py-32">
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            India's Next-Gen Payment Gateway
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">
            Xlite – Smart & Secure Payment Solutions
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80">
            Accept payments via UPI, cards, wallets, and net banking with our reliable, developer-friendly APIs. Built for scale, designed for India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact </Link>
            </Button>
          </div>
        </motion.div>

        {/* Payment method icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-16 flex max-w-lg flex-wrap items-center justify-center gap-6"
        >
          {paymentMethods.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-2 text-primary-foreground/70">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/10">
                <m.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b bg-card py-12">
      <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center">
            <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Features */}
    <section className="py-20">
      <div className="container">
        <SectionHeading badge="Features" title="Everything You Need to Accept Payments" description="From real-time dashboards to fraud detection — Xlite gives you a complete payment infrastructure." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-hero py-20">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Join 10,000+ businesses using Xlite for fast, secure, and reliable payments.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/developers">Explore APIs</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10" asChild>
        
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Trust */}

  </>
);

export default Index;
