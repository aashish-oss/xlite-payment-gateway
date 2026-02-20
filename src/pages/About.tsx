import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, CheckCircle2, Users, ShieldCheck, Zap, Globe, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Lightning Fast", desc: "Sub-200ms API response times with 99.99% uptime guarantee." },
  { icon: ShieldCheck, title: "Bank-Grade Security", desc: "PCI-DSS Level 1 compliant with end-to-end encryption." },
  { icon: Globe, title: "All Payment Modes", desc: "UPI, cards, wallets, net banking, and international payments." },
  { icon: HeartHandshake, title: "Dedicated Support", desc: "24/7 technical support with dedicated account managers." },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <>
    <section className="bg-hero py-20">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          About Xlite
        </motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Empowering businesses across India with smart, secure, and seamless digital payment solutions.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionHeading badge="Our Story" title="Building India's Payment Infrastructure" center={false} />
          <p className="text-muted-foreground">
            Founded with a vision to simplify digital payments for businesses of all sizes, Xlite provides a robust suite of payment APIs that enable seamless transactions across UPI, cards, wallets, and net banking.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our platform processes millions of transactions daily, serving thousands of merchants from startups to enterprises across India. We combine cutting-edge technology with deep financial expertise to deliver payment solutions that are fast, reliable, and secure.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="rounded-xl border bg-card p-6 text-center">
            <Target className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-3 font-display font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">Make digital payments accessible and effortless for every Indian business.</p>
          </div>
          <div className="rounded-xl border bg-card p-6 text-center">
            <Eye className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 font-display font-semibold">Vision</h3>
            <p className="mt-2 text-sm text-muted-foreground">Be the most trusted payment infrastructure powering India's digital economy.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="border-t bg-secondary/50 py-20">
      <div className="container">
        <SectionHeading badge="Why Xlite" title="Why Businesses Choose Us" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div key={r.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="rounded-xl border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
