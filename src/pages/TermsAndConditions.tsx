import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const TermsAndConditions = () => (
  <>
    <section className="bg-hero py-20">
      <div className="container text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
          <FileText className="h-12 w-12 text-primary-foreground/80" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Terms and Conditions
        </motion.h1>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Last updated: February 2025. Please read these terms carefully before using our services.
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
          <h2 className="font-display text-xl font-semibold text-foreground">1. Acceptance of Term
            s<\\\\/h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">Mudramarvel Pvt Ltd. (“Xpaylite”, “we”, “us”, “our”) is committed to protecting your personal data and privacy. This Privacy Policy describes how we collect, use, store, share, and safeguard your information when you use our platform, which includes:

Website: xpaylite.com
Merchant Portal: merchant.xpaylite.com
Mobile Applications:  Xpaylite   App, BizGrow App, BizForce App
By accessing or using the  Xpaylite  platform or availing any of our services, you hereby expressly and unequivocally agree to the terms outlined in this Privacy Policy. The platform and the services offered are intended solely for use and delivery within the territory of India, and are not designed or authorized for access or use outside India.

The collection, use, storage, processing, retrieval, transfer, or disclosure of your personal information shall be governed strictly in accordance with this Policy and shall comply with all relevant laws in force, including but not limited to the Digital Personal Data Protection Act, 2023 (“DPDP Act”), the Information Technology Act, 2000 (“IT Act”), and the rules framed thereunder, as amended from time to time. Further, our data handling practices conform to the applicable directions, circulars, regulations, guidelines, and frameworks issued by regulatory authorities such as the Reserve Bank of India (“RBI”), and any other competent regulators or bodies in India, along with any other applicable laws, rules or enactments of the Parliament or Government of India (collectively referred to as “Applicable Laws”).

All terms and conditions, and policies governing the use of the  Xpaylite  platform (as defined in the Terms & Conditions and other applicable company policies) are incorporated herein by reference and form an integral part of this Privacy Policy. You are strongly advised to carefully read and understand this Policy to comprehend how your personal information will be handled.

Your continued use of the platform or any of our services shall be deemed to signify that you have read, understood, and accepted this Policy. By accessing or using the  Xpaylite   platform or entering into any partnership or engagement with us, you explicitly provide your informed consent for the collection, processing, use, storage, transfer, disclosure, and management of your personal information in accordance with this Policy.

If you do not agree with any part of this Policy or the data handling practices mentioned herein, you are requested to refrain from accessing or using the platform or our services, and from providing any personal data to us.

Your Representations and Warranties
By accessing or using the platform and by submitting your information to us, you hereby declare, represent, and warrant the following:

Accuracy and Legitimacy of Information
The personal data and sensitive personal data that you provide to us is accurate, authentic, complete, and up to date. You have full authority, rights, and all necessary consents required under law to provide such information to  Xpaylite  .

Lawful Submission and Processing
The submission of your information to us and our consequent collection, storage, usage, access, processing, and transfer of the same will not violate any applicable laws, binding agreements, charter documents, judicial or regulatory orders, or decrees.

Obligation to Maintain Updated Information
You shall ensure, at all times, that the information provided by you remains correct, accurate, and up to date. You shall notify us immediately of any changes or updates to such information.

Storage of Information
Your personal data will primarily be stored in electronic/digital format; however, in certain cases, we may store physical copies of relevant documents (e.g., KYC). We may engage third-party service providers for the purpose of storage and/or processing of your data. You acknowledge and understand that such third parties may maintain their own data protection and security protocols, and we shall take reasonable steps to ensure that such third parties comply with the Applicable Laws to safeguard your personal information.

Eligibility to Use the Platform
The platform and services are not intended for persons under the age of 18 years, or for individuals who have previously been suspended or removed from using the platform by us. By continuing to use the platform or our services, you represent and warrant that you are at least 18 years of age, and are not currently suspended, blocked, or otherwise ineligible to use the platform or services for any reason.

Capacity to Contract and Lawful Identity
You confirm that you have the legal right, authority, and capacity to enter into this agreement and to comply with all the terms and conditions outlined in this Privacy Policy. You further agree that you shall not impersonate any person or entity, nor misrepresent your age, identity, or affiliation with any person or organization. You shall not unlawfully access, attempt to access, or misappropriate any personal data of others.

Note: “Personal Information” shall include both “personal data” and “sensitive personal data or information” as defined under the Applicable Laws and as submitted by you to us during the course of accessing, registering on, or using the  Xpaylite  platform and services.
          </p>
            By accessing or using the Xlite payment gateway, APIs, merchant dashboard, or any related service

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">2. Eligibility</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You must be at least 18 years of age and have the legal authority to enter into this agreement. Businesses must be duly registered and compliant with applicable Indian laws. We reserve the right to verify your identity, KYC, and business credentials before or during the use of our Services.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">3. Use of Services</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You agree to use our Services only for lawful purposes and in accordance with these Terms, RBI guidelines, and all applicable laws. You must not use the Services for any fraudulent, illegal, or prohibited activity, including money laundering, chargeback abuse, or violation of card network or UPI rules.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">4. Account and API Access</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials and API keys. You must notify us immediately of any unauthorized access. We may suspend or terminate your account or API access if we suspect misuse, non-compliance, or for operational or regulatory reasons.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">5. Fees and Settlements</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Fees for our Services are as per the commercial agreement or pricing communicated to you. Settlement timelines and payouts are subject to our settlement policy and banking partner terms. We may deduct applicable taxes, chargebacks, refunds, and penalties from your settlements as per our policies.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">6. Intellectual Property</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            All intellectual property rights in our Services, including but not limited to software, APIs, documentation, logos, and trademarks, remain with Xlite or our licensors. You are granted a limited, non-exclusive license to use our Services in accordance with these Terms. You may not reverse-engineer, copy, or resell our technology without written permission.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            To the maximum extent permitted by law, Xlite shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Services. Our total liability shall not exceed the fees paid by you to us in the twelve (12) months preceding the claim. We do not guarantee uninterrupted or error-free service.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">8. Indemnification</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            You agree to indemnify and hold harmless Xlite, its affiliates, and their officers, directors, and employees from any claims, damages, or expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">9. Modifications</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We may modify these Terms at any time. We will notify you of material changes via email or through the merchant dashboard. Continued use of the Services after the effective date of changes constitutes acceptance. If you do not agree, you must discontinue use and close your account.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">10. Governing Law and Disputes</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at Noida/Greater Noida, Uttar Pradesh. For any queries, contact us at{" "}
            <a href="mailto:xlitewalletindia@gmail.com" className="text-primary hover:underline">xlitewalletindia@gmail.com</a> or at our registered address: Xlite Payments Pvt. Ltd., T3 A-611, 6th floor NX-one, Greater Noida, Noida, Uttar Pradesh 201306, India.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default TermsAndConditions;
