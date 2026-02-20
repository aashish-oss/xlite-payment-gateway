import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, AlertCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "xlitewalletindia@gmail.com";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [complaintLoading, setComplaintLoading] = useState(false);
  const [serverOnline, setServerOnline] = useState<boolean | null>(null);

  // Check server status on mount
  useEffect(() => {
    const checkServer = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
        
        const res = await fetch(`${API_URL}/api/health`, {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        
        if (res.ok) {
          const data = await res.json();
          setServerOnline(true);
          if (!data.configured) {
            toast({
              title: "⚠️ Server running but email not configured",
              description: "Please set SMTP_PASSWORD in server/.env file",
              variant: "destructive",
            });
          }
        } else {
          setServerOnline(false);
        }
      } catch (err) {
        setServerOnline(false);
      }
    };
    
    checkServer();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const result = await res.json().catch(() => ({ message: "Server error occurred" }));
        throw new Error(result.message || "Failed to send message");
      }
      
      const result = await res.json();
      toast({
        title: "Message sent!",
        description: "We'll get back to you at " + data.email + " within 24 hours.",
      });
      form.reset();
    } catch (err) {
      let errorMessage = "";
      let errorTitle = "Could not send";
      
      if (err instanceof TypeError && (err.message.includes("fetch") || err.message.includes("Failed"))) {
        errorTitle = "❌ Server Not Running";
        errorMessage = `Server is not running on ${API_URL}. Please start it:\n\n1. Open terminal\n2. Run: npm run server\n\nOr use PowerShell: .\\start-server.ps1`;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage = "Please try again or email " + CONTACT_EMAIL + " directly.";
      }
      
      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleComplaintSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComplaintLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("complaint_name") ?? "").trim(),
      email: String(formData.get("complaint_email") ?? "").trim(),
      phone: String(formData.get("complaint_phone") ?? "").trim(),
      complaint_type: String(formData.get("complaint_type") ?? "").trim(),
      complaint_details: String(formData.get("complaint_details") ?? "").trim(),
    };

    try {
      const res = await fetch(`${API_URL}/api/complaint`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const result = await res.json().catch(() => ({ message: "Server error occurred" }));
        throw new Error(result.message || "Failed to submit complaint");
      }
      
      const result = await res.json();
      toast({
        title: "Complaint submitted",
        description: "We have received your complaint and will address it within 48 hours at " + CONTACT_EMAIL + ".",
      });
      form.reset();
    } catch (err) {
      let errorMessage = "";
      let errorTitle = "Could not submit complaint";
      
      if (err instanceof TypeError && (err.message.includes("fetch") || err.message.includes("Failed"))) {
        errorTitle = "❌ Server Not Running";
        errorMessage = `Server is not running on ${API_URL}. Please start it:\n\n1. Open terminal\n2. Run: npm run server\n\nOr use PowerShell: .\\start-server.ps1`;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage = "Please try again or email " + CONTACT_EMAIL + " directly.";
      }
      
      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setComplaintLoading(false);
    }
  };

  return (
    <>
      <section className="bg-hero py-20">
        <div className="container text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Contact Us
          </motion.h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Have questions? Our team is here to help you get started.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading badge="Reach Out" title="Get in Touch" center={false} />
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">Email</h4>
                  <a href="https://mail.google.com/mail/?view=cm&to=xlitewalletindia@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">
                    xlitewalletindia@gmail.com
                  </a>
                  <p className="text-xs text-muted-foreground">(Queries / Contact form)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">Phone</h4>
                  <a href="tel:+918077113239" className="text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded">
                    +91 8077113239
                  </a>
                  <p className="text-sm text-muted-foreground">Mon–Sat, 9 AM – 7 PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">Office</h4>
                  <p className="text-sm text-muted-foreground">Xlite Payments Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">Add - T3 A-611, 6th floor NX-one , Greater Noida, Noida, Uttar Pradesh ( 201306), India</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border bg-card p-8"
          >
            {serverOnline === false && (
              <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-destructive">Server is not running</p>
                  <p className="text-muted-foreground mt-1">
                    Forms won't work until server starts. Run: <code className="bg-muted px-1 rounded">npm run server</code>
                  </p>
                </div>
              </div>
            )}
            <h3 className="mb-6 font-display text-xl font-bold">Send us a message</h3>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Name</label>
                  <Input name="name" placeholder="Your name" required maxLength={100} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Company</label>
                  <Input name="company" placeholder="Company name" maxLength={100} />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input name="email" type="email" placeholder="you@company.com" required maxLength={255} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Phone</label>
                <Input name="phone" type="tel" placeholder="+91 9876543210" maxLength={15} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <Textarea name="message" placeholder="Tell us about your requirements..." rows={4} required maxLength={1000} />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Complaint form */}
      <section className="py-16 bg-muted/40">
        <div className="container max-w-2xl">
          <SectionHeading badge="Complaints" title="Submit a complaint" center />
          <p className="text-center text-muted-foreground text-sm mt-2 mb-8">
            If you have a grievance, please fill the form below. We will respond within 48 hours.
          </p>
          <motion.form
            onSubmit={handleComplaintSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border bg-card p-8"
          >
            {serverOnline === false && (
              <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-destructive">Server is not running</p>
                  <p className="text-muted-foreground mt-1">
                    Forms won't work until server starts. Run: <code className="bg-muted px-1 rounded">npm run server</code>
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 mb-6 text-amber-600 dark:text-amber-500">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <h3 className="font-display text-lg font-semibold">Complaint form</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Complaint will be sent to {CONTACT_EMAIL}</p>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Name</label>
                  <Input name="complaint_name" placeholder="Your full name" required maxLength={100} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <Input name="complaint_phone" type="tel" placeholder="+91 9876543210" maxLength={15} />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input name="complaint_email" type="email" placeholder="you@example.com" required maxLength={255} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Complaint type</label>
                <select
                  name="complaint_type"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select type</option>
                  <option value="Transaction / Payment">Transaction / Payment</option>
                  <option value="Account / KYC">Account / KYC</option>
                  <option value="API / Technical">API / Technical</option>
                  <option value="Refund / Dispute">Refund / Dispute</option>
                  <option value="Service quality">Service quality</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Complaint details</label>
                <Textarea
                  name="complaint_details"
                  placeholder="Describe your complaint in detail (transaction ID, date, and issue)..."
                  rows={5}
                  required
                  maxLength={2000}
                />
              </div>
              <Button type="submit" variant="secondary" className="w-full" disabled={complaintLoading}>
                {complaintLoading ? "Submitting..." : <>Submit complaint <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
