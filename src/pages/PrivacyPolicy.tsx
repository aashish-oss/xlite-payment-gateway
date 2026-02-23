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
            Mudramarvel Pvt. Ltd. (“Xpaylite”, “we”, “us”, “our”) is committed to protecting your personal data and privacy. This Privacy Policy describes how we collect, use, store, share, and safeguard your information when you use our platform, which includes:
            <br />
            
            <div>
              <div>
                <a href="https://www.xpaylite.com" className="text-primary hover:underline">www.xpaylite.com</a>.
              </div>
              <div>
               Merchat Portal: <a href="https://merchant.xpaylite.com" className="text-primary hover:underline">Merchant Portal</a>.
              </div>
              <div>Mobile Applications: Xpaylite App, </div>
            </div>
            <div>
              <br />
              By accessing or using the Xpaylite platform or availing any of our services, you hereby <b> expressly and unequivocally agree</b> to the terms outlined in this Privacy Policy. The platform and the services offered are intended solely for use and delivery <b>within the territory of India, and are not designed or authorized for access or use outside India.</b>
<br />
              The collection, use, storage, processing, retrieval, transfer, or disclosure of your personal information shall be governed strictly in accordance with this Policy and shall comply with all relevant laws in force, including but not limited to the <b>Digital Personal Data Protection Act, 2023 (“DPDP Act”), the Information Technology Act, 2000 (“IT Act”)</b>, and the rules framed thereunder, as amended from time to time. Further, our data handling practices conform to the applicable directions, circulars, regulations, guidelines, and frameworks issued by regulatory authorities such as the Reserve Bank of India (“RBI”), and any other competent regulators or bodies in India, along with any other applicable laws, rules or enactments of the Parliament or Government of India (collectively referred to as “Applicable Laws”).
<br />
              <b>All terms and conditions, and policies governing the use</b> of the  Xpaylite platform (as defined in the Terms & Conditions and other applicable company policies) are <b>incorporated herein by reference</b> and form an integral part of this Privacy Policy. You are strongly advised to carefully read and understand this Policy to comprehend how your personal information will be handled.
<br />
              Your continued use of the platform or any of our services shall be deemed to signify that you have read, understood, and accepted this Policy. By accessing or using the  Xpaylite  platform or entering into any partnership or engagement with us, you <b> explicitly provide your informed consent for the collection, processing, use, storage, transfer, disclosure, and management of your personal information </b>in accordance with this Policy.
<br />
              If you do not agree with any part of this Policy or the data handling practices mentioned herein, you are requested to refrain from accessing or using the platform or our services, and from providing any personal data to us.
            </div>
            <br />
            <div><b>Your Representations and Warranties</b></div>
            <br />
            By accessing or using the platform and by submitting your information to us, you hereby declare, represent, and warrant the following:
<br />
            Accuracy and Legitimacy of Information
            The personal data and sensitive personal data that you provide to us is accurate, authentic, complete, and up to date. You have full authority, rights, and all necessary consents required under law to provide such information to  Xpaylite  .
<br />
            Lawful Submission and Processing
            The submission of your information to us and our consequent collection, storage, usage, access, processing, and transfer of the same will not violate any applicable laws, binding agreements, charter documents, judicial or regulatory orders, or decrees.
<br />
            Obligation to Maintain Updated Information
            You shall ensure, at all times, that the information provided by you remains correct, accurate, and up to date. You shall notify us immediately of any changes or updates to such information.
<br />
            Storage of Information
            Your personal data will primarily be stored in <b>electronic/digital format</b>; however, in certain cases, we may store physical copies of relevant documents (e.g., KYC). We may engage third-party service providers for the purpose of storage and/or processing of your data. You acknowledge and understand that such third parties may maintain their own data protection and security protocols, and we shall take reasonable steps to ensure that such third parties comply with the Applicable Laws to safeguard your personal information.
<br />
            Eligibility to Use the Platform
            The platform and services are <b>not intended for persons under the age of 18 years</b>, or for individuals who have previously been suspended or removed from using the platform by us. By continuing to use the platform or our services, you represent and warrant that you are <b>at least 18 years of age</b>, and are not currently suspended, blocked, or otherwise ineligible to use the platform or services for any reason.
<br />
            Capacity to Contract and Lawful Identity
            You confirm that you have the legal right, authority, and capacity to enter into this agreement and to comply with all the terms and conditions outlined in this Privacy Policy. You further agree that you shall not impersonate any person or entity, nor misrepresent your age, identity, or affiliation with any person or organization. You shall not unlawfully access, attempt to access, or misappropriate any personal data of others.
<br />
            Note: “Personal Information” shall include both “personal data” and “sensitive personal data or information” as defined under the Applicable Laws and as submitted by you to us during the course of accessing, registering on, or using the  Xpaylite  platform and services.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">2. What We Collect</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            By accessing or using our platform and services,<b> you voluntarily consent to the collection, access, processing, and recording of the following categories of information</b>, either provided directly by you, submitted through our agents or collected automatically through your interactions with  Xpaylite  :
<br />
            <div>
              <b>
                For KYC, Service Activation, and Delivery
              </b>
            </div>
            <br />
            Personal Identification Details: Full name, email address, contact numbers, residential/business address, date of birth, and identity documents such as Aadhaar card, PAN card, Voter ID, Passport, Driving License, and education-related documents, as applicable. These may be collected directly from you or via authorized field representatives, distributors, or RMs.
            Photographs & Visual KYC: Images or photographs of your identity documents, live photo captures, and video KYC recordings submitted through the platform or captured during field visits for KYC and activation of services.
            Demographic & Financial Data: Information such as your income bracket, business profile, occupation, GST registration details, GST number (or extracted data via PAN/GST lookup), credit history, employment information, business location, and nature of services availed. This may be required for service eligibility or mandated by law.
            Communication Metadata: Mobile number verification, promotional or transactional SMS/app notifications, and any communication exchanged with support or agents during the service lifecycle.
            Transaction & Account Records: Your complete transaction history, virtual account/trade wallet balances, settlement details, reward earnings, and payment records, maintained as required under Applicable Laws (such as FIU-IND, KYC Master Direction, Income Tax Act).
            <div>
              <b>For Fraud Detection & Prevention</b>
            </div>
            We may collect and process the following technical and device-level data for ensuring security, compliance, and fraud control:

            Device Identifiers: IMEI number, device model and make, SIM serial number, OS version, carrier/network details, and other unique identifiers required to authenticate your session and protect against impersonation or misuse.
            Device Permissions & Storage Access: Access to storage (e.g. files, photos, camera) and communication logs (such as SMS) may be requested with your consent to verify specific transactions or authenticate users for secure services.
            Wi‑Fi Details (SSID): Information about your current Wi‑Fi network (e.g. SSID) may be accessed to notify you of unsecured or suspicious networks and enhance transaction safety.
            Location Data: We may collect your precise or approximate location, using GPS, IP address, mobile network triangulation, or Wi‑Fi signals. This helps in geo‑verifying users for onboarding, agent mapping, and location‑based service delivery.
            <div>
              <b>For Feedback, Analytics & Behavioural Use</b>
            </div>
            User Feedback & Survey Responses: Any suggestions, feedback, complaints, reviews, or responses to customer surveys shared by you through our platform or support system.
            User Behavioural Insights: We may conduct behavioural analysis, including usage patterns, service preferences, and engagement metrics, to customize your experience and ensure effective delivery of services, <b>subject to your consent.</b>
            Note: While providing personal information is voluntary, <b>refusing to provide certain data may limit your ability to access or use some services </b>that require mandatory KYC, authentication, or compliance checks.

            You may withdraw your consent for the collection and use of your personal data at any time, as described in <b>Section J (User Rights)</b>. However, certain data may continue to be stored by us for:

            Compliance with legal/regulatory mandates
            KYC and transaction records
            Prevention and investigation of fraud
            Audit and taxation purposes
            Such retention shall be done strictly in accordance with Applicable Laws.</p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">3. What We Do with the Personal Information we gather</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We collect and process your personal data for the following purposes, in accordance with your consent and legal grounds:

            <div>
              <b>Core Operations & Service Delivery</b>
            </div>
            To process your financial and non-financial transactions via AEPS, DMT, MATM, Recharge, Bill Pay, and other services.
            To personalize and administer your user account, dashboards, preferences, and service experience.
            For internal troubleshooting and technical support.
            To process your requests, service activations, upgrades, or verifications.
            To respond to customer support queries or feedback raised through any channel.
            To notify you about important updates related to services, including policy changes, pricing, commissions, settlements, and technical updates.
            <div>
              <b>Regulatory & Legal Compliance</b>
            </div>
            To comply with KYC norms, RBI circulars, NPCI/UIDAI mandates, and financial reporting standards.
            To perform due diligence, background checks, or verification required by partner banks or regulators.
            For conducting internal audits, regulatory filings, financial reporting, and data reconciliations.
            For responding to court orders, government inquiries, or law enforcement requirements.
            <div><b>Risk, Fraud & Security Monitoring</b></div>
            To detect, investigate, and prevent fraudulent, suspicious, or illegal activities.
            To validate user authenticity via biometric, OTP, or multi-factor authentication.
            To analyze usage anomalies and take corrective security measures.
            <div>
              <b>Marketing, Analytics & Customization</b>
            </div>
            To conduct data analytics for service improvement and performance optimization.
            To send you targeted offers, relevant advertisements, referral rewards, and promotional materials (with your consent).
            To share newsletters, surveys, or engagement campaigns.
            To perform search result optimization, in-app promotions, and location-based notifications. </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">4. Collection and Use of <b>Non-Personal Information</b></h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            In addition to <b>Personal Information</b>, we may collect certain Non-Personal Information during your interaction with the  Xpaylite  platform. This refers to information that does not, on its own, identify you personally. It may include:

            Your browser type and version
            Device and hardware details (e.g. type of computer, device model)
            Operating system information
            Technical data related to the means and medium used to access our platform (e.g., internet service provider, network type, IP address)
            This Non-Personal Information may be automatically collected whenever you engage with our services or interact with the platform. It helps us ensure effective delivery of services, maintain security, monitor performance, and improve overall user experience.

            We may use such aggregated, anonymized Non-Personal Information to:

            Understand user preferences and behaviour
            Identify features or content of most interest to users
            Personalize the platform and services accordingly
            In cases where Non-Personal Information is combined with Personal Information, the combined dataset will be treated as Personal Information for as long as the two remain linked.

            <div>
              <b>Sharing of Information with Government Authorities</b>
            </div>
            Xpaylite may disclose your Personal Information to government departments, courts, law enforcement agencies, regulatory bodies, or other statutory authorities when such disclosure is:

            Mandated under Applicable Laws
            Required in connection with an investigation, legal proceeding, or regulatory request
            Necessary to comply with a judicial or administrative order</p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">5. Data Security</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We are committed to safeguarding the confidentiality, integrity, and availability of your Personal Information. To that end, we implement appropriate <b>technical, managerial, and physical security controls</b> in accordance with Applicable Laws.

            These include, but are not limited to:

            Encryption of data in transit and at rest
            Role-based access controls and user authentication mechanisms
            Firewall and intrusion detection systems
            Regular internal audits and external security assessments
            Employee background verification and security training
            Xpaylite maintains a <b>comprehensive information security program and documented information security policies</b> that are commensurate with the nature and sensitivity of the data we collect and the services we provide.

            In the course of providing services, your Personal Information may be accessible to authorized third-party service providers, facilitators, or vendors. All such parties are contractually bound to comply with data protection obligations and must adhere to standards required by Applicable Laws.

            Caution: If you voluntarily disclose Personal Information on public forums or features (e.g., blogs, discussion boards) associated with the platform, that data becomes public. You are solely responsible for the information you share in such spaces.

            While we strive to protect your data,<b> no method of transmission over the Internet or electronic storage is entirely secure.</b>Therefore, we cannot guarantee absolute security. In case of any unauthorized access, breach, or data disclosure, we will promptly inform affected users in accordance with Applicable Laws and will take all reasonable steps to mitigate any harm.</p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">6. Retention and Sharing of Personal Information</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <div>
              <b>Retention</b>
            </div>
            <br />
            Your Personal Information will be retained:
            <br />

            For as long as necessary to fulfill the purposes outlined in this Privacy Policy
            For the duration required under Applicable Laws (e.g. KYC, FIU-IND, RBI guidelines)
            Until such time as your consent is withdrawn, except where retention is legally mandated
            For record keeping, auditing, regulatory compliance, fraud detection, or tax purposes
            If you request deletion of your information, we will securely erase it, subject to legal exceptions as specified in Section 11.
            <br />
            <div><b>Sharing with Third Parties</b></div>
            We may engage <b>authorized third-party service providers</b> to help us operate our business and deliver our services. These entities are granted access to your Personal Information strictly on a need-to-know basis and are permitted to use it solely for the specific purposes authorized by us.
            <br />
            These may include:
            <br />
            Cloud hosting and IT infrastructure providers
            CRM and customer support platforms
            SMS, email, or notification service providers
            Analytics and business intelligence platforms
            Marketing and campaign partners (only with your prior consent)
            Payment processors and gateways
            Verification, KYC, or identity authentication agencies
            You acknowledge that certain partners (e.g., banks, NBFCs, payment aggregators) may have their own privacy policies governing how they use your information. We recommend reviewing those policies directly for clarity on their practices.

            Once you are redirected to a third-party website, app, or service, your data will be governed by the terms and policies of that respective entity.  Xpaylite  shall not be liable for any acts, omissions, or misuse of information occurring on such third-party platforms.
            <br />
            <div><b>Specific Disclosures</b></div>
            <br />
            We may disclose your Personal Information to the following categories of third parties, as required for business or compliance purposes:
            <br />
            Payment Processing Entities: Card issuers, banking partners, UPI service providers, wallet aggregators
            IT and Infrastructure Vendors: For application development, maintenance, hosting, and cybersecurity
            Verification & KYC Partners: For identity authentication, eKYC, video KYC, or GSTIN/PAN validation
            Regulatory Bodies: Government authorities, tax departments, FIU, law enforcement, courts, and auditors
            Sales & Marketing Affiliates: With your consent, for promotions, campaigns, or incentive programs
            Group Companies & Subsidiaries: For internal business operations, restructuring, or service expansion
            Any Other Entities: When such disclosure is expressly authorized by you or necessary under law <a href="mailto:xlitewalletindia@gmail.com" className="text-primary hover:underline">xlitewalletindia@gmail.com</a>.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">7.Third-Party Websites</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Our platform may contain links to external websites, partner services, or advertisements that redirect you to third-party platforms. Please be aware:
            <br />
            We do <b>not control or endorse</b> the content, security, or data handling practices of these external sites
            Such platforms may collect their own data, use cookies, and track your interactions
            You are governed by their <b>respective terms and privacy policies</b>, not ours
            We advise you to read the privacy policies of such websites before sharing any information. </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">8. Changes to This Privacy Policy</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Xpaylite reserves the right to modify, update, or revise this Privacy Policy at its sole discretion. Changes may reflect updates in technology, regulatory developments, or service enhancements.
            <br />
            When updates are made:
            <br />
            Where required, we will notify you via email, SMS, platform notice, or app notification
            Your continued use of the platform constitutes acknowledgment and acceptance of the revised policy
            <br />
            We encourage you to periodically review this page for any updates. </p>
          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">9.  Your Acceptance of These Terms</h2>
          <p className="mt-10 text-sm text-muted-foreground">
            You have read and understood this Privacy Policy
            You <b>explicitly and specifically consent</b> to our collection, use, storage, processing, and sharing of your Personal and Non-Personal Information in accordance with this Policy
            Your consent is given <b>freely, unconditionally, and with full knowledge </b>of the purpose and consequences
            If you do not agree with the terms herein, you must immediately stop using the platform and services
            Continued use of the platform following changes to this Policy constitutes your agreement to be bound by such changes </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">10.  Your Rights</h2>
          <p className="mt-10 text-sm text-muted-foreground">
            As a Data Principal under the Digital Personal Data Protection Act, 2023 and other Applicable Laws, you have the right to <b> access, review, correct, update, withdraw, or restrict the use of your Personal Information </b>stored with us.
            <br />
            You may exercise these rights by submitting a written request to: <a href="mailto:support@xpaylite.com" className="text-primary hover:underline">support@xpaylite.com</a>
            <br />
            Upon receiving your request:
            <br />
            We will review and respond to your request within the timelines prescribed by Applicable Laws (typically within 30 days).
            If you request correction or completion of inaccurate data, we will update our records accordingly.
            If you request withdrawal of consent or deletion of your Personal Information, we will cease further processing of such data for the relevant purposes.
            Please note that:
            <br />
            Withdrawal of consent may result in the discontinuation of certain services that rely on such information.
            Despite such withdrawal or deletion requests, we may retain your Personal Information for the duration required to comply with legal, regulatory, or audit obligations — including but not limited to KYC retention, tax filings, transaction records, fraud detection, and dispute resolution. </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">11.  Your Rights</h2>
          <p className="mt-10 text-sm text-muted-foreground">
            Email:   <a href="mailto:support@xpaylite.com" className="text-primary hover:underline">support@xpaylite.com</a>
            <br />
            Phone: 8077113239
            <br />

            Mudramarvel Pvt. Ltd., Ward No.06, Kunda, Near Sangam Hotel, Partapur, Meerut, Uttar Pradesh (250103)
            <br />
            You may contact us to:
            <br />
            Inquire about how your personal data is being processed
            Request access to or updates of your personal data
            Revoke or withdraw consent previously provided
            Obtain a summary of your Personal Information and related processing activities
            Raise any other concern related to the handling of your data
            We will strive to resolve your request or grievance within 30 (thirty) days from the date of receipt.
            <br />
            Grievance Officer
            Name: Mr. Amit Sharma
            Designation: Head – Operations
            <br />

            Email: <a href="mailto:amit@xpaylite.com" className="text-primary hover:underline">amit@xpaylite.com</a>  (cc: support@xpaylite.com)</p>

          <h2 className="mt-8 font-display text-xl font-semibold text-foreground">12.   Governing Law and Dispute Resolution</h2>
          <p className="mt-10 text-sm text-muted-foreground">
            This Privacy Policy shall be governed by and construed in accordance with the laws of India.
            <br />
            All disputes or claims arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the competent courts at Mumbai, Maharashtra, India.
            <br />
            © Mudramarvel Pvt. Ltd.(Xpaylite)</p>
        </motion.div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
