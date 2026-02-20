import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const CONTACT_EMAIL = "xlitewalletindia@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&to=${CONTACT_EMAIL}`;

const Footer = () => (
  <footer className="relative bg-navy overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />
    <div className="container relative py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand + Contact & Address */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2 font-display text-2xl font-bold text-primary">
            <Zap className="h-6 w-6" />
            Xlite
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/80">
            Smart & Secure Payment Solutions for modern businesses across India.
          </p>
          <div className="mt-6 space-y-3">
            <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-navy-foreground/80 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 shrink-0" />
              {CONTACT_EMAIL}
            </a>
            <a href="tel:+918077113239" className="flex items-center gap-2 text-sm text-navy-foreground/80 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 shrink-0" />
              +91 8077113239
            </a>
            <p className="flex items-start gap-2 text-sm text-navy-foreground/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              Xlite Payments Pvt. Ltd., T3 A-611, 6th floor NX-one, Greater Noida, Noida, Uttar Pradesh 201306, India
            </p>
            <p className="text-xs text-navy-foreground/60">Mon–Sat, 9 AM – 7 PM IST</p>
          </div>
        </div>

        {/* Payment APIs & Solutions */}
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
            Payment APIs
          </h4>
          <ul className="space-y-2.5 text-sm text-navy-foreground/80">
            <li><Link to="/services#upi-payment-api" className="hover:text-primary transition-colors">UPI Payment API</Link></li>
            <li><Link to="/services#credit-debit-cards" className="hover:text-primary transition-colors">Credit & Debit Cards</Link></li>
            <li><Link to="/services#collections-api" className="hover:text-primary transition-colors">Collection API</Link></li>
            <li><Link to="/services#verification-api" className="hover:text-primary transition-colors">Verification API</Link></li>
            <li><Link to="/services#travel-api" className="hover:text-primary transition-colors">Travel API</Link></li>
            <li><Link to="/services#payout-api" className="hover:text-primary transition-colors">Payout API</Link></li>
            <li><Link to="/services#recharge-bill-payment-api" className="hover:text-primary transition-colors">Recharge & Bill Payment API</Link></li>
            <li><Link to="/services#dmt-api" className="hover:text-primary transition-colors">DMT API</Link></li>
            <li><Link to="/services#account-opening-api" className="hover:text-primary transition-colors">Account Opening API</Link></li>
            <li><Link to="/services#aeps-api" className="hover:text-primary transition-colors">AEPS API</Link></li>
            <li><Link to="/services#pan-card-api" className="hover:text-primary transition-colors">PAN Card API</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm text-navy-foreground/80">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/security" className="hover:text-primary transition-colors">Security</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Software & IT */}
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
            Software & IT
          </h4>
          <ul className="space-y-2.5 text-sm text-navy-foreground/80">
            <li><Link to="/services#payment-solution-white-label" className="hover:text-primary transition-colors">Payment Solution – White Label</Link></li>
            <li><Link to="/services#b2b-software" className="hover:text-primary transition-colors">B2B Software</Link></li>
            <li><Link to="/services#e-commerce-software" className="hover:text-primary transition-colors">E-Commerce Software</Link></li>
            <li><Link to="/services#web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link to="/services#reseller-software" className="hover:text-primary transition-colors">Reseller Software</Link></li>
            <li><Link to="/services#software-development" className="hover:text-primary transition-colors">Software Development</Link></li>
            <li><Link to="/services#custom-web-development" className="hover:text-primary transition-colors">Custom Web Development</Link></li>
            <li><Link to="/services#web-design" className="hover:text-primary transition-colors">Web Design</Link></li>
            <li><Link to="/services#logo-graphic-designing" className="hover:text-primary transition-colors">Logo & Graphic Designing</Link></li>
            <li><Link to="/services#digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
            <li><Link to="/services#mobile-app-development" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
            <li><Link to="/services#android-app-development" className="hover:text-primary transition-colors">Android App Development</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-navy-foreground/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy-foreground/60">
        <p>© 2025 Xlite Payments Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/security" className="hover:text-primary transition-colors">Security</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
