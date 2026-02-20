import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Code2, Terminal, Layers, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const apiFeatures = [
  "RESTful JSON APIs",
  "Webhooks for real-time events",
  "Idempotent requests",
  "Comprehensive error codes",
  "Rate limiting & retry logic",
  "Server-to-server authentication",
];

const steps = [
  { icon: Rocket, title: "1. Sign Up", desc: "Create your Xlite merchant account and get sandbox API keys instantly." },
  { icon: Terminal, title: "2. Integrate", desc: "Use our SDKs (Node.js, Python, PHP, Java) or direct REST APIs to integrate." },
  { icon: Layers, title: "3. Test", desc: "Test payments end-to-end in our sandbox environment with test credentials." },
  { icon: CheckCircle2, title: "4. Go Live", desc: "Switch to production keys after KYC verification and start accepting payments." },
];

const Developers = () => (
  <>
    <section className="bg-hero py-20">
      <div className="container text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Developer Hub
        </motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Build powerful payment experiences with our developer-friendly APIs and SDKs.
        </p>
      </div>
    </section>

    {/* Code preview */}
    <section className="py-20">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading badge="API" title="Simple, Powerful APIs" center={false} description="Get started in minutes with clean REST endpoints and comprehensive documentation." />
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {apiFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="overflow-hidden rounded-xl border bg-navy p-6 font-mono text-sm text-navy-foreground"
        >
          <div className="mb-3 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-accent/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
          </div>
          <pre className="overflow-x-auto">
{`curl -X POST https://api.xlite.in/v1/payments \\
  -H "Authorization: Bearer xlite_sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 50000,
    "currency": "INR",
    "method": "upi",
    "customer": {
      "email": "user@example.com",
      "phone": "+919876543210"
    },
    "callback_url": "https://yoursite.com/callback"
  }'`}
          </pre>
        </motion.div>
      </div>
    </section>

    {/* Integration steps */}
    <section className="border-t bg-secondary/50 py-20">
      <div className="container">
        <SectionHeading badge="Get Started" title="Integration in 4 Simple Steps" />
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} custom={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }} viewport={{ once: true }}
              className="rounded-xl border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Sandbox / Live */}
    <section className="py-20">
      <div className="container grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-8">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">SANDBOX</div>
          <h3 className="font-display text-xl font-bold">Test Environment</h3>
          <p className="mt-2 text-sm text-muted-foreground">Full-featured sandbox with test API keys. Simulate payments, refunds, and settlements without real money.</p>
          <Button className="mt-6" variant="outline" asChild>
            <Link to="/contact">Get Sandbox Keys</Link>
          </Button>
        </div>
        <div className="rounded-xl border bg-card p-8">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">PRODUCTION</div>
          <h3 className="font-display text-xl font-bold">Live Environment</h3>
          <p className="mt-2 text-sm text-muted-foreground">Production-ready APIs with 99.99% uptime SLA. Complete KYC verification required to go live.</p>
          <Button className="mt-6" asChild>
            <Link to="/contact">Go Live <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Developers;
