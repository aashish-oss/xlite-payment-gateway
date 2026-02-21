import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => (
  <>
    <section className="bg-hero py-20">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
          <ShieldCheck className="h-12 w-12 text-primary-foreground/80" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Privacy Policy
        </motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Last updated: February 2025. We respect your privacy and are committed to protecting your personal data.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-slate dark:prose-invert max-w-none"
        >
          <h2 className="font-display text-xl font-semibold text-foreground">1. Introduction</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Xlite Wallet India Pvt. Ltd. ("Xlite", "we", "us") operates this website and related payment gateway services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our APIs, merchant dashboard, and website.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">2. Information We Collect</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We may collect information that you provide directly (e.g., name, email, business details, KYC documents), information collected automatically (e.g., IP address, device type, usage data), and information from third parties (e.g., banks, payment networks) as necessary to provide our services.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We use your information to provide, maintain, and improve our payment gateway services; to process transactions and prevent fraud; to comply with legal and regulatory requirements; to communicate with you; and to personalize your experience. We do not sell your personal data to third parties.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">4. Data Security</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We implement industry-standard security measures including encryption (AES-256, TLS 1.3), access controls, and regular security audits. Your data is stored in secure data centers within India and is processed in accordance with applicable data protection laws.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">5. Data Retention</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We retain your information only for as long as necessary to fulfill the purposes for which it was collected, to comply with legal obligations (e.g., tax, anti-money laundering), and to resolve disputes. Transaction and KYC data may be retained as required by RBI and other regulators.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">6. Your Rights</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You may have the right to access, correct, or delete your personal data, and to object to or restrict certain processing. To exercise these rights or for any privacy-related queries, contact us at{" "}
            <a href="mailto:xlitewalletindia@gmail.com" className="text-primary hover:underline">xlitewalletindia@gmail.com</a>.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">7. Cookies and Tracking</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We use cookies and similar technologies to improve site functionality, analyze usage, and deliver relevant content. You can manage cookie preferences through your browser settings.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>

          <p className="mt-10 text-sm text-muted-foreground">
            For questions about this Privacy Policy, please contact us at Xlite Payments Pvt. Ltd., T3 A-611, 6th floor NX-one, Greater Noida, Noida, Uttar Pradesh 201306, India, or email xlitewalletindia@gmail.com.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
