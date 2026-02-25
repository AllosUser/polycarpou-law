import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "en" | "el";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/* ─── Translations ─────────────────────────────────────────── */
const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.cta": "Schedule Consultation",

    // Home Hero
    "home.hero.eyebrow": "Cyprus · Established 2009",
    "home.hero.title": "Strategic Legal",
    "home.hero.titleAccent": "Excellence",
    "home.hero.subtitle": "Boutique legal services in Cyprus delivered with integrity & precision.",
    "home.hero.cta1": "Schedule Consultation",
    "home.hero.cta2": "Explore Services",

    // Trust
    "trust.years": "Years of Experience",
    "trust.cases": "Cases Handled",
    "trust.languages": "Languages Spoken",
    "trust.bar": "Cyprus Bar Association",

    // Services preview
    "services.eyebrow": "What We Do",
    "services.title": "Areas of Practice",
    "services.learnMore": "Learn More",

    // Why choose us
    "why.eyebrow": "Why Polycarpou Law",
    "why.title": "A Firm Built on Trust & Results",
    "why.bullet1.title": "Client-first strategy",
    "why.bullet1.desc": "Every decision we make is guided by your objectives — not billable hours.",
    "why.bullet2.title": "Clear communication",
    "why.bullet2.desc": "No legalese. We translate complex matters into plain language at every step.",
    "why.bullet3.title": "Results-focused",
    "why.bullet3.desc": "We measure success by outcomes, not activity. Your win is our priority.",
    "why.cta": "Our Story",
    "why.quote": "\u201CJustice is the sum of all moral duty.\u201D",
    "why.quoteAuthor": "— William Godwin",

    // Process
    "process.eyebrow": "How We Work",
    "process.title": "Our Process",
    "process.step1.title": "Consultation",
    "process.step1.desc": "A confidential initial meeting to understand your legal needs and assess how we can best assist you.",
    "process.step2.title": "Assessment",
    "process.step2.desc": "Thorough analysis of your case, documents, and objectives to identify the strongest legal strategy.",
    "process.step3.title": "Strategy",
    "process.step3.desc": "A clear, tailored legal plan is developed and presented with transparent timelines and fee structures.",
    "process.step4.title": "Representation",
    "process.step4.desc": "Expert execution of your legal strategy — in the courtroom, at the negotiating table, or in documentation.",

    // CTA banner
    "cta.eyebrow": "Confidential & Professional",
    "cta.title": "Book a confidential consultation today.",
    "cta.desc": "Speak with one of our senior attorneys in complete confidence. No obligation, no commitment.",
    "cta.button": "Schedule Consultation",

    // About page
    "about.header.eyebrow": "Our Firm",
    "about.header.title": "About Polycarpou Law",
    "about.story.eyebrow": "Our Story",
    "about.story.title": "Founded on Principle. Built for Results.",
    "about.story.p1": "Polycarpou Law was established in 2009 by Andreas Polycarpou with a single conviction: that clients deserve boutique-quality legal counsel without the impersonal experience of a large firm.",
    "about.story.p2": "Over 15 years, we have grown from a sole practitioner's office into a team of five dedicated attorneys spanning corporate law, civil litigation, real estate, family law, and contract law.",
    "about.story.p3": "Today, we serve a diverse clientele of Cypriot individuals, international investors, and multinational corporations — all united by their demand for precision, transparency, and results.",
    "about.story.cta": "Meet the Team",
    "about.founder.name": "Andreas Polycarpou",
    "about.founder.role": "Founding Partner · Cyprus Bar #1024",

    "about.mv.eyebrow": "What Drives Us",
    "about.mv.title": "Mission & Vision",
    "about.mission.title": "Our Mission",
    "about.mission.p1": "To provide individuals and businesses in Cyprus with access to the highest calibre legal representation — combining rigorous legal analysis with practical, commercially-minded advice.",
    "about.mission.p2": "We exist to protect what matters most to our clients: their rights, their assets, and their futures.",
    "about.vision.title": "Our Vision",
    "about.vision.p1": "To be recognised as Cyprus's most trusted boutique law firm — distinguished not by size, but by the depth of our expertise and the strength of our client relationships.",
    "about.vision.p2": "We aspire to set the standard for legal excellence on the island and beyond.",

    "about.values.eyebrow": "What We Stand For",
    "about.values.title": "Our Core Values",
    "about.values.cta.title": "Ready to work with us?",
    "about.values.cta.desc": "Get in touch today for a confidential, no-obligation consultation.",
    "about.values.cta.button": "Contact Us",

    // Values
    "value.integrity": "Integrity",
    "value.integrity.desc": "We hold ourselves to the highest ethical standards. Every recommendation we make is guided by honesty, transparency, and a steadfast commitment to doing right by our clients.",
    "value.precision": "Precision",
    "value.precision.desc": "Legal excellence demands meticulous attention to detail. We analyse every fact, review every clause, and anticipate every risk — so nothing is left to chance.",
    "value.commitment": "Client Commitment",
    "value.commitment.desc": "Our clients' goals are our goals. We invest in understanding each client's unique situation and deliver practical, decisive legal counsel tailored to their needs.",

    // Services page
    "svcPage.eyebrow": "What We Offer",
    "svcPage.title": "Our Legal Services",
    "svcPage.desc": "Specialist legal counsel across five core practice areas, delivered by experienced attorneys who understand Cypriot law.",
    "svcPage.practiceArea": "Practice Area",
    "svcPage.enquire": "Enquire Now",
    "svcPage.timeline.eyebrow": "Our Approach",
    "svcPage.timeline.title": "How We Work",
    "svcPage.timeline.step": "Step",
    "svcPage.cta.title": "Not sure which service you need?",
    "svcPage.cta.desc": "Our attorneys will guide you to the right expertise in a free initial consultation.",
    "svcPage.cta.button": "Get Free Advice",

    // Services data
    "svc.corporate.title": "Corporate Law",
    "svc.corporate.short": "Comprehensive legal counsel for businesses of all sizes — from incorporation to complex M&A transactions.",
    "svc.corporate.desc": "We advise local and international corporations on all aspects of business law, including company formation, shareholder agreements, mergers & acquisitions, joint ventures, and corporate governance. Our team brings deep commercial awareness to every engagement.",
    "svc.litigation.title": "Civil Litigation",
    "svc.litigation.short": "Strategic courtroom representation and dispute resolution grounded in rigorous legal analysis.",
    "svc.litigation.desc": "Our litigation team handles complex civil disputes across all levels of the Cypriot court system. We approach every case with a results-driven mindset, combining meticulous preparation with persuasive advocacy to protect our clients' interests.",
    "svc.realestate.title": "Real Estate Law",
    "svc.realestate.short": "End-to-end legal support for property transactions, development projects, and land disputes in Cyprus.",
    "svc.realestate.desc": "From due diligence and title searches to contract negotiation and registration, we guide clients through every stage of real estate transactions. We act for developers, investors, and individual buyers across residential and commercial property markets.",
    "svc.family.title": "Family Law",
    "svc.family.short": "Compassionate, discreet counsel on divorce, custody, and estate matters with sensitivity and professionalism.",
    "svc.family.desc": "We handle sensitive family matters with empathy and discretion. Our family law practice covers divorce proceedings, child custody and maintenance, prenuptial agreements, and inheritance matters — always prioritising the best interests of our clients and their families.",
    "svc.contract.title": "Contract Law",
    "svc.contract.short": "Precision drafting and review of all commercial agreements to minimise risk and protect your interests.",
    "svc.contract.desc": "Sound contracts are the foundation of every successful business relationship. We draft, review, and negotiate a full spectrum of commercial agreements — including supply contracts, service agreements, licensing deals, and NDAs — ensuring clarity, enforceability, and protection.",

    // Services timeline
    "timeline.1.title": "Initial Consultation",
    "timeline.1.desc": "We meet to understand your legal situation, goals, and constraints. All discussions are fully confidential.",
    "timeline.2.title": "Case Assessment",
    "timeline.2.desc": "Our team conducts an in-depth review of all relevant facts, documents, and legal precedents.",
    "timeline.3.title": "Strategy Development",
    "timeline.3.desc": "We present a clear legal strategy, timeline, and transparent fee structure for your approval.",
    "timeline.4.title": "Active Representation",
    "timeline.4.desc": "We execute your legal strategy with precision — in court, at the negotiating table, or in documentation.",
    "timeline.5.title": "Resolution & Follow-up",
    "timeline.5.desc": "We see matters through to a successful conclusion and remain available for ongoing legal support.",

    // Team page
    "team.eyebrow": "The People",
    "team.title": "Our Legal Team",
    "team.desc": "Experienced, multilingual attorneys who bring dedication and precision to every client engagement.",
    "team.join.eyebrow": "Join Us",
    "team.join.title": "We're Always Looking for Exceptional Talent",
    "team.join.desc": "Polycarpou Law offers a collaborative, intellectually stimulating environment for attorneys who are passionate about delivering the best outcomes for their clients.",
    "team.join.cta": "Send Your CV",
    "team.join.b1": "Competitive remuneration packages",
    "team.join.b2": "Mentorship from senior practitioners",
    "team.join.b3": "Diverse, international client base",
    "team.join.b4": "Flexible working arrangements",
    "team.join.b5": "Continuing professional development",
    "team.cta.title": "Ready to speak with our team?",
    "team.cta.button": "Schedule a Consultation",

    // Contact page
    "contact.eyebrow": "Get in Touch",
    "contact.title": "Contact Us",
    "contact.desc": "All enquiries are treated with strict confidentiality. We typically respond within one business day.",
    "contact.office": "Office",
    "contact.firmName": "Polycarpou Law LLC",
    "contact.address.label": "Address",
    "contact.address.value": "28 Arch. Makarios III Avenue\nNicosia 1065, Cyprus",
    "contact.phone.label": "Telephone",
    "contact.email.label": "Email",
    "contact.hours.label": "Office Hours",
    "contact.hours.mf": "Mon – Fri",
    "contact.hours.sat": "Saturday",
    "contact.hours.sun": "Sunday",
    "contact.hours.closed": "Closed",
    "contact.map.city": "Nicosia, Cyprus",
    "contact.map.address": "28 Arch. Makarios III Ave",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone",
    "contact.form.phoneOpt": "(optional)",
    "contact.form.area": "Area of Law",
    "contact.form.areaPlaceholder": "Select a practice area",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.phonePlaceholder": "+357 ...",
    "contact.form.messagePlaceholder": "Briefly describe your legal matter...",
    "contact.form.privacy": "Confidential enquiries only.",
    "contact.form.privacyFull": "All information shared is protected by attorney-client privilege and will not be disclosed to any third party.",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success.title": "Message Received",
    "contact.form.success.desc": "Thank you for reaching out. One of our attorneys will be in contact within one business day. All correspondence is treated in strict confidence.",
    "contact.form.success.again": "Send Another Message",
    "contact.form.error.name": "Please enter your full name.",
    "contact.form.error.email": "Please enter a valid email address.",
    "contact.form.error.message": "Please provide a message (at least 10 characters).",
    "contact.form.optCorporate": "Corporate Law",
    "contact.form.optLitigation": "Civil Litigation",
    "contact.form.optRealEstate": "Real Estate Law",
    "contact.form.optFamily": "Family Law",
    "contact.form.optContract": "Contract Law",
    "contact.form.optOther": "Other / Not Sure",

    // Footer
    "footer.desc": "Boutique legal services in Cyprus delivered with integrity, precision, and a relentless focus on results.",
    "footer.quickLinks": "Quick Links",
    "footer.ourTeam": "Our Team",
    "footer.contact": "Contact",
    "footer.hours": "Office Hours",
    "footer.copyright": "Polycarpou Law LLC. All rights reserved.",
    "footer.regulated": "Member of the Cyprus Bar Association · Regulated by CBA",
    "footer.monFri": "Monday – Friday",
    "footer.sat": "Saturday",
    "footer.sun": "Sunday",
    "footer.closed": "Closed",
  },

  el: {
    // Nav
    "nav.home": "Αρχική",
    "nav.about": "Σχετικά",
    "nav.services": "Υπηρεσίες",
    "nav.team": "Ομάδα",
    "nav.contact": "Επικοινωνία",
    "nav.cta": "Κλείστε Ραντεβού",

    // Home Hero
    "home.hero.eyebrow": "Κύπρος · Ιδρύθηκε 2009",
    "home.hero.title": "Στρατηγική Νομική",
    "home.hero.titleAccent": "Αριστεία",
    "home.hero.subtitle": "Εξειδικευμένες νομικές υπηρεσίες στην Κύπρο με ακεραιότητα και ακρίβεια.",
    "home.hero.cta1": "Κλείστε Ραντεβού",
    "home.hero.cta2": "Εξερευνήστε Υπηρεσίες",

    // Trust
    "trust.years": "Χρόνια Εμπειρίας",
    "trust.cases": "Υποθέσεις",
    "trust.languages": "Γλώσσες",
    "trust.bar": "Δικηγορικός Σύλλογος Κύπρου",

    // Services preview
    "services.eyebrow": "Τι Προσφέρουμε",
    "services.title": "Τομείς Πρακτικής",
    "services.learnMore": "Μάθετε Περισσότερα",

    // Why choose us
    "why.eyebrow": "Γιατί Polycarpou Law",
    "why.title": "Ένα Γραφείο Χτισμένο στην Εμπιστοσύνη",
    "why.bullet1.title": "Στρατηγική με επίκεντρο τον πελάτη",
    "why.bullet1.desc": "Κάθε απόφαση καθοδηγείται από τους στόχους σας — όχι τις χρεώσιμες ώρες.",
    "why.bullet2.title": "Σαφής επικοινωνία",
    "why.bullet2.desc": "Χωρίς νομική ορολογία. Μεταφράζουμε πολύπλοκα θέματα σε απλή γλώσσα.",
    "why.bullet3.title": "Εστίαση στα αποτελέσματα",
    "why.bullet3.desc": "Μετράμε την επιτυχία από τα αποτελέσματα. Η νίκη σας είναι η προτεραιότητά μας.",
    "why.cta": "Η Ιστορία Μας",
    "why.quote": "«Η δικαιοσύνη είναι το σύνολο κάθε ηθικού καθήκοντος.»",
    "why.quoteAuthor": "— William Godwin",

    // Process
    "process.eyebrow": "Πώς Εργαζόμαστε",
    "process.title": "Η Διαδικασία Μας",
    "process.step1.title": "Διαβούλευση",
    "process.step1.desc": "Εμπιστευτική αρχική συνάντηση για κατανόηση των νομικών σας αναγκών.",
    "process.step2.title": "Αξιολόγηση",
    "process.step2.desc": "Ενδελεχής ανάλυση της υπόθεσής σας για τον εντοπισμό της βέλτιστης στρατηγικής.",
    "process.step3.title": "Στρατηγική",
    "process.step3.desc": "Εκπόνηση σαφούς νομικού σχεδίου με διαφανή χρονοδιαγράμματα και κόστη.",
    "process.step4.title": "Εκπροσώπηση",
    "process.step4.desc": "Εκτέλεση της νομικής στρατηγικής — στο δικαστήριο, στη διαπραγμάτευση ή στη σύνταξη εγγράφων.",

    // CTA banner
    "cta.eyebrow": "Εμπιστευτικό & Επαγγελματικό",
    "cta.title": "Κλείστε εμπιστευτικό ραντεβού σήμερα.",
    "cta.desc": "Μιλήστε με έναν δικηγόρο μας με απόλυτη εμπιστευτικότητα. Χωρίς υποχρέωση.",
    "cta.button": "Κλείστε Ραντεβού",

    // About page
    "about.header.eyebrow": "Το Γραφείο Μας",
    "about.header.title": "Σχετικά με την Polycarpou Law",
    "about.story.eyebrow": "Η Ιστορία Μας",
    "about.story.title": "Θεμελιωμένο σε Αρχές. Χτισμένο για Αποτελέσματα.",
    "about.story.p1": "Η Polycarpou Law ιδρύθηκε το 2009 από τον Ανδρέα Πολυκάρπου με πεποίθηση ότι οι πελάτες αξίζουν νομική συμβουλευτική υψηλής ποιότητας.",
    "about.story.p2": "Σε 15+ χρόνια, αναπτυχθήκαμε σε ομάδα πέντε αφοσιωμένων δικηγόρων σε εταιρικό δίκαιο, αστικές διαφορές, ακίνητα, οικογενειακό και συμβατικό δίκαιο.",
    "about.story.p3": "Σήμερα εξυπηρετούμε Κύπριους, διεθνείς επενδυτές και πολυεθνικές — ενωμένους από την απαίτησή τους για ακρίβεια και αποτελέσματα.",
    "about.story.cta": "Γνωρίστε την Ομάδα",
    "about.founder.name": "Ανδρέας Πολυκάρπου",
    "about.founder.role": "Ιδρυτικός Εταίρος · Δ.Σ.Κ. #1024",

    "about.mv.eyebrow": "Τι Μας Κινεί",
    "about.mv.title": "Αποστολή & Όραμα",
    "about.mission.title": "Η Αποστολή Μας",
    "about.mission.p1": "Να παρέχουμε σε ιδιώτες και επιχειρήσεις στην Κύπρο πρόσβαση στην υψηλότερη ποιότητα νομικής εκπροσώπησης.",
    "about.mission.p2": "Υπάρχουμε για να προστατεύσουμε ό,τι πιο σημαντικό: τα δικαιώματα, τα περιουσιακά στοιχεία και το μέλλον των πελατών μας.",
    "about.vision.title": "Το Όραμά Μας",
    "about.vision.p1": "Να αναγνωριστούμε ως το πιο αξιόπιστο δικηγορικό γραφείο της Κύπρου — ξεχωρίζοντας για τη βάθος εξειδίκευσης.",
    "about.vision.p2": "Φιλοδοξούμε να θέσουμε τα πρότυπα νομικής αριστείας στο νησί και πέρα από αυτό.",

    "about.values.eyebrow": "Αυτό που Πρεσβεύουμε",
    "about.values.title": "Οι Αξίες Μας",
    "about.values.cta.title": "Έτοιμοι να συνεργαστούμε;",
    "about.values.cta.desc": "Επικοινωνήστε σήμερα για εμπιστευτική συμβουλευτική χωρίς δέσμευση.",
    "about.values.cta.button": "Επικοινωνία",

    // Values
    "value.integrity": "Ακεραιότητα",
    "value.integrity.desc": "Τηρούμε τα υψηλότερα ηθικά πρότυπα. Κάθε σύσταση καθοδηγείται από ειλικρίνεια και διαφάνεια.",
    "value.precision": "Ακρίβεια",
    "value.precision.desc": "Η νομική αριστεία απαιτεί σχολαστική προσοχή. Αναλύουμε κάθε γεγονός και προβλέπουμε κάθε κίνδυνο.",
    "value.commitment": "Δέσμευση στον Πελάτη",
    "value.commitment.desc": "Οι στόχοι των πελατών μας είναι δικοί μας. Παρέχουμε πρακτική νομική συμβουλευτική προσαρμοσμένη στις ανάγκες τους.",

    // Services page
    "svcPage.eyebrow": "Τι Προσφέρουμε",
    "svcPage.title": "Οι Νομικές μας Υπηρεσίες",
    "svcPage.desc": "Εξειδικευμένη νομική συμβουλευτική σε πέντε βασικούς τομείς, από έμπειρους δικηγόρους.",
    "svcPage.practiceArea": "Τομέας Πρακτικής",
    "svcPage.enquire": "Ρωτήστε Τώρα",
    "svcPage.timeline.eyebrow": "Η Προσέγγισή Μας",
    "svcPage.timeline.title": "Πώς Εργαζόμαστε",
    "svcPage.timeline.step": "Βήμα",
    "svcPage.cta.title": "Δεν είστε σίγουροι ποια υπηρεσία χρειάζεστε;",
    "svcPage.cta.desc": "Οι δικηγόροι μας θα σας καθοδηγήσουν σε μια δωρεάν αρχική συνεδρία.",
    "svcPage.cta.button": "Δωρεάν Συμβουλευτική",

    // Services data
    "svc.corporate.title": "Εταιρικό Δίκαιο",
    "svc.corporate.short": "Ολοκληρωμένη νομική συμβουλευτική για επιχειρήσεις — από σύσταση έως συγχωνεύσεις.",
    "svc.corporate.desc": "Συμβουλεύουμε εταιρείες σε θέματα εταιρικού δικαίου, συμφωνίες μετόχων, εξαγορές και εταιρική διακυβέρνηση.",
    "svc.litigation.title": "Αστικές Διαφορές",
    "svc.litigation.short": "Στρατηγική εκπροσώπηση στο δικαστήριο βασισμένη σε αυστηρή νομική ανάλυση.",
    "svc.litigation.desc": "Η ομάδα μας χειρίζεται πολύπλοκες αστικές διαφορές σε όλα τα επίπεδα κυπριακών δικαστηρίων.",
    "svc.realestate.title": "Δίκαιο Ακινήτων",
    "svc.realestate.short": "Πλήρης νομική υποστήριξη σε συναλλαγές ακινήτων και αναπτυξιακά έργα.",
    "svc.realestate.desc": "Καθοδηγούμε τους πελάτες σε κάθε στάδιο — από τη δέουσα επιμέλεια ως την εγγραφή ακινήτων.",
    "svc.family.title": "Οικογενειακό Δίκαιο",
    "svc.family.short": "Διακριτική και ευαίσθητη νομική συμβουλευτική σε θέματα διαζυγίου, επιμέλειας και κληρονομικά.",
    "svc.family.desc": "Χειριζόμαστε ευαίσθητες οικογενειακές υποθέσεις με κατανόηση, προτεραιοποιώντας τα συμφέροντα των πελατών.",
    "svc.contract.title": "Συμβατικό Δίκαιο",
    "svc.contract.short": "Σύνταξη και έλεγχος εμπορικών συμφωνιών για ελαχιστοποίηση κινδύνων.",
    "svc.contract.desc": "Συντάσσουμε και διαπραγματευόμαστε εμπορικές συμφωνίες — συμβάσεις παροχής υπηρεσιών, αδειοδότηση και εμπιστευτικότητα.",

    // Services timeline
    "timeline.1.title": "Αρχική Διαβούλευση",
    "timeline.1.desc": "Συναντιόμαστε για να κατανοήσουμε τη νομική σας κατάσταση. Πλήρης εμπιστευτικότητα.",
    "timeline.2.title": "Αξιολόγηση Υπόθεσης",
    "timeline.2.desc": "Η ομάδα μας εξετάζει εις βάθος όλα τα σχετικά γεγονότα και έγγραφα.",
    "timeline.3.title": "Ανάπτυξη Στρατηγικής",
    "timeline.3.desc": "Παρουσιάζουμε σαφή στρατηγική, χρονοδιάγραμμα και κόστος.",
    "timeline.4.title": "Ενεργή Εκπροσώπηση",
    "timeline.4.desc": "Εκτελούμε τη στρατηγική — στο δικαστήριο, στη διαπραγμάτευση ή σε τεκμηρίωση.",
    "timeline.5.title": "Επίλυση & Παρακολούθηση",
    "timeline.5.desc": "Φέρνουμε τις υποθέσεις σε επιτυχή ολοκλήρωση με συνεχή υποστήριξη.",

    // Team page
    "team.eyebrow": "Οι Άνθρωποι",
    "team.title": "Η Νομική μας Ομάδα",
    "team.desc": "Έμπειροι, πολύγλωσσοι δικηγόροι με αφοσίωση και ακρίβεια σε κάθε υπόθεση.",
    "team.join.eyebrow": "Ελάτε Μαζί Μας",
    "team.join.title": "Αναζητούμε Πάντα Εξαιρετικά Ταλέντα",
    "team.join.desc": "Η Polycarpou Law προσφέρει ένα συνεργατικό, πνευματικά διεγερτικό περιβάλλον.",
    "team.join.cta": "Στείλτε το Βιογραφικό σας",
    "team.join.b1": "Ανταγωνιστικές αποδοχές",
    "team.join.b2": "Καθοδήγηση από ανώτερους δικηγόρους",
    "team.join.b3": "Διεθνής πελατειακή βάση",
    "team.join.b4": "Ευέλικτες μορφές εργασίας",
    "team.join.b5": "Συνεχής επαγγελματική εξέλιξη",
    "team.cta.title": "Έτοιμοι να μιλήσετε με την ομάδα μας;",
    "team.cta.button": "Κλείστε Ραντεβού",

    // Contact page
    "contact.eyebrow": "Επικοινωνήστε Μαζί Μας",
    "contact.title": "Επικοινωνία",
    "contact.desc": "Όλα τα αιτήματα αντιμετωπίζονται με αυστηρή εμπιστευτικότητα. Απαντάμε εντός μίας εργάσιμης ημέρας.",
    "contact.office": "Γραφείο",
    "contact.firmName": "Polycarpou Law LLC",
    "contact.address.label": "Διεύθυνση",
    "contact.address.value": "Λεωφ. Αρχ. Μακαρίου ΙΙΙ 28\nΛευκωσία 1065, Κύπρος",
    "contact.phone.label": "Τηλέφωνο",
    "contact.email.label": "Ηλ. Ταχυδρομείο",
    "contact.hours.label": "Ωράριο Γραφείου",
    "contact.hours.mf": "Δευ – Παρ",
    "contact.hours.sat": "Σάββατο",
    "contact.hours.sun": "Κυριακή",
    "contact.hours.closed": "Κλειστά",
    "contact.map.city": "Λευκωσία, Κύπρος",
    "contact.map.address": "Λεωφ. Αρχ. Μακαρίου ΙΙΙ 28",
    "contact.form.title": "Στείλτε Μήνυμα",
    "contact.form.name": "Ονοματεπώνυμο",
    "contact.form.email": "Ηλ. Διεύθυνση",
    "contact.form.phone": "Τηλέφωνο",
    "contact.form.phoneOpt": "(προαιρετικό)",
    "contact.form.area": "Τομέας Δικαίου",
    "contact.form.areaPlaceholder": "Επιλέξτε τομέα",
    "contact.form.message": "Μήνυμα",
    "contact.form.namePlaceholder": "Το πλήρες όνομά σας",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.phonePlaceholder": "+357 ...",
    "contact.form.messagePlaceholder": "Περιγράψτε σύντομα το νομικό σας θέμα...",
    "contact.form.privacy": "Μόνο εμπιστευτικά αιτήματα.",
    "contact.form.privacyFull": "Όλες οι πληροφορίες προστατεύονται από το απόρρητο δικηγόρου-πελάτη.",
    "contact.form.submit": "Αποστολή Μηνύματος",
    "contact.form.submitting": "Αποστολή...",
    "contact.form.success.title": "Μήνυμα Παραλήφθηκε",
    "contact.form.success.desc": "Ευχαριστούμε. Ένας δικηγόρος μας θα επικοινωνήσει εντός μίας εργάσιμης ημέρας. Απόλυτη εχεμύθεια.",
    "contact.form.success.again": "Στείλτε Νέο Μήνυμα",
    "contact.form.error.name": "Παρακαλώ εισάγετε το ονοματεπώνυμό σας.",
    "contact.form.error.email": "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
    "contact.form.error.message": "Παρακαλώ γράψτε μήνυμα (τουλάχιστον 10 χαρακτήρες).",
    "contact.form.optCorporate": "Εταιρικό Δίκαιο",
    "contact.form.optLitigation": "Αστικές Διαφορές",
    "contact.form.optRealEstate": "Δίκαιο Ακινήτων",
    "contact.form.optFamily": "Οικογενειακό Δίκαιο",
    "contact.form.optContract": "Συμβατικό Δίκαιο",
    "contact.form.optOther": "Άλλο / Δεν Γνωρίζω",

    // Footer
    "footer.desc": "Εξειδικευμένες νομικές υπηρεσίες στην Κύπρο με ακεραιότητα, ακρίβεια και εστίαση στα αποτελέσματα.",
    "footer.quickLinks": "Σύνδεσμοι",
    "footer.ourTeam": "Η Ομάδα Μας",
    "footer.contact": "Επικοινωνία",
    "footer.hours": "Ωράριο",
    "footer.copyright": "Polycarpou Law LLC. Όλα τα δικαιώματα κατοχυρωμένα.",
    "footer.regulated": "Μέλος του Δικηγορικού Συλλόγου Κύπρου · Ρυθμιζόμενο από ΔΣΚ",
    "footer.monFri": "Δευτέρα – Παρασκευή",
    "footer.sat": "Σάββατο",
    "footer.sun": "Κυριακή",
    "footer.closed": "Κλειστά",
  },
};

/* ─── Provider ─────────────────────────────────────────────── */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "el" ? "el" : "en";
  });

  const changeLang = useCallback((l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? key,
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
