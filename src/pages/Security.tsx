import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck, Lock, Eye, Fingerprint, Server, FileCheck } from "lucide-react";

const measures = [
  { icon: ShieldCheck, title: "PCI-DSS Level 1", desc: "We maintain the highest level of PCI-DSS compliance, ensuring all cardholder data is processed, stored, and transmitted securely." },
  { icon: Lock, title: "256-bit Encryption", desc: "All data in transit and at rest is encrypted using AES-256 and TLS 1.3, the same standard used by leading banks." },
  { icon: Eye, title: "AI Fraud Detection", desc: "Our machine learning models analyze every transaction in real-time to detect and prevent fraudulent activity with near-zero false positives." },
  { icon: Fingerprint, title: "Two-Factor Authentication", desc: "Mandatory 2FA for all merchant dashboard access, with support for authenticator apps and SMS verification." },
  { icon: Server, title: "Secure Infrastructure", desc: "Our servers are hosted in Tier-4 data centers across India with redundancy, DDoS protection, and 24/7 monitoring." },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Security = () => (
  <>
    <section className="bg-hero py-20">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Security & Compliance
        </motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Your data security is our top priority. We exceed industry standards to protect every transaction.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <SectionHeading badge="Trust" title="Enterprise-Grade Security" description="We invest heavily in security infrastructure so you can focus on growing your business." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {measures.map((m, i) => (
            <motion.div key={m.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="rounded-xl border bg-card p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <m.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="border-t bg-secondary/50 py-16">
      <div className="container text-center">
        <h3 className="font-display text-xl font-bold">Certifications & Standards</h3>
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-4">
          {["PCI-DSS Level 1", "ISO 27001", "SOC 2 Type II",  "GDPR Ready"].map((c) => (
            <div key={c} className="rounded-lg border bg-card px-6 py-3 font-display text-sm font-semibold">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Security;
