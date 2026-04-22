import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "en" | "el";

type Translations = Record<Lang, Record<string, string>>;

const translations: Translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "Our Firm",
    "nav.services": "Practice Areas",
    "nav.team": "Our People",
    "nav.contact": "Contact",
    "nav.cta": "Schedule a Consultation",

    // Home Hero
    "home.hero.eyebrow": "ANDREAS POLYCARPOU & CO LLC · 2015",
    "home.hero.title": "Strategic Legal",
    "home.hero.titleAccent": "Excellence",
    "home.hero.subtitle": "Comprehensive, commercially astute legal counsel in Cyprus. We deliver outcomes through rigorous precision and unyielding advocacy.",
    "home.hero.cta1": "Schedule a Consultation",
    "home.hero.cta2": "View Practice Areas",

    // Trust
    "trust.years": "Years of Experience",
    "trust.cases": "Cases Handled",
    "trust.success": "Client Retention",
    "trust.response": "Response Time",

    // Services preview
    "services.eyebrow": "Practices",
    "services.title": "Areas of Practice",
    "services.learnMore": "Learn More",

    // Why choose us
    "why.eyebrow": "Why Polycarpou Law",
    "why.title": "A Firm Cultivated on Trust & Resolute Outcomes",
    "why.bullet1.title": "Client-centric strategy",
    "why.bullet1.desc": "Every decision we take is oriented strictly around your commercial and personal objectives.",
    "why.bullet2.title": "Plain-spoken counsel",
    "why.bullet2.desc": "We cut through the legalese, delivering clear, decisive advice to navigate complex matters.",
    "why.bullet3.title": "Results-oriented",
    "why.bullet3.desc": "We measure success exclusively by the outcomes we secure for our clients.",
    "why.cta": "Our Story",
    "why.quote": "«Justice is the sum of all moral duty.»",
    "why.quoteAuthor": "— William Godwin",

    // Process
    "process.eyebrow": "Our Methodology",
    "process.title": "How We Work",
    "process.step1.title": "Consultation",
    "process.step1.desc": "A fully confidential initial meeting to scrutinise your legal requirements and ascertain how we can impart value.",
    "process.step2.title": "Assessment",
    "process.step2.desc": "Rigorous analysis of your case, documentation, and objectives to formulate a commanding legal strategy.",
    "process.step3.title": "Strategy",
    "process.step3.desc": "A tailored legal roadmap is presented alongside transparent timelines and fee structures.",
    "process.step4.title": "Representation",
    "process.step4.desc": "Masterful execution of your legal strategy — in the courtroom, at the negotiating table, or across complex commercial agreements.",

    // CTA banner
    "cta.eyebrow": "Confidential & Professional",
    "cta.title": "Book a confidential consultation today.",
    "cta.desc": "Speak directly with one of our senior attorneys in utmost confidence. No obligation, no commitment.",
    "cta.button": "Schedule a Consultation",

    // About page
    "about.header.eyebrow": "Our Firm",
    "about.header.title": "About Polycarpou Law",
    "about.story.eyebrow": "Our Story",
    "about.story.title": "Founded on Principle. Built for Results.",
    "about.story.p1": "Our law firm is a modern and dynamically growing law practice based in Nicosia. Since 2015, it has been providing comprehensive legal services guided by professional integrity, a strategic approach and effective representation of its clients.",
    "about.story.p2": "Our firm, in its current form as ANDREAS POLYCARPOU & CO LLC under the leadership of Mr Andreas Polycarpou, continues to evolve while maintaining a steadfast commitment to quality, accountability and personalised service.",
    "about.story.p3": "Our team comprises four lawyers as well as experienced administrative staff, ensuring prompt responsiveness and substantive support in every case.",
    "about.story.p4": "The firm operates across all primary areas of law, providing legal advisory services and courtroom representation to individuals and businesses. We approach every case with attention to detail, confidentiality and clear strategic planning, aiming to achieve the best possible outcomes.",
    "about.story.cta": "Meet the Team",
    "about.founder.name": "Andreas Polycarpou",
    "about.founder.role": "Founder & Managing Director · Cyprus Bar, Admitted 2006",

    "about.mv.eyebrow": "What Drives Us",
    "about.mv.title": "Mission & Vision",
    "about.mission.title": "Our Mission",
    "about.mission.p1": "To provide individuals and businesses in Cyprus with access to the highest calibre of legal representation — combining rigorous legal analysis with practical, commercially-minded advice and effective court representation.",
    "about.mission.p2": "We exist to rigorously protect what matters most to our clients: their rights, their assets, and their long-term futures.",
    "about.vision.title": "Our Vision",
    "about.vision.p1": "To be universally recognised as one of Cyprus's most trusted legal practices — distinguished not by our size, but by the extraordinary depth of our expertise and our commitment to accountability.",
    "about.vision.p2": "We aspire to set the benchmark for legal excellence across the island and beyond.",

    "about.values.eyebrow": "What We Stand For",
    "about.values.title": "Our Core Values",
    "about.values.cta.title": "Ready to work with us?",
    "about.values.cta.desc": "Get in touch today for a confidential, no-obligation initial consultation.",
    "about.values.cta.button": "Contact Us",

    // Values
    "value.integrity": "Integrity",
    "value.integrity.desc": "We hold ourselves to the highest ethical standards. Every recommendation we make is anchored in absolute honesty, transparency, and a steadfast commitment to our clients' best interests.",
    "value.precision": "Precision",
    "value.precision.desc": "Legal excellence demands meticulous attention to detail. We scrutinise every fact and anticipate every risk — ensuring nothing is left to chance.",
    "value.commitment": "Client Commitment",
    "value.commitment.desc": "Our clients' objectives are our own. We invest the time to grasp each unique situation and deliver practical, decisive counsel tailored precisely to those parameters.",

    // Services page
    "svcPage.eyebrow": "Our Expertise",
    "svcPage.title": "Practice Areas",
    "svcPage.desc": "Specialist legal counsel across five core disciplines, delivered by seasoned attorneys with profound knowledge of Cypriot law.",
    "svcPage.practiceArea": "Practice Area",
    "svcPage.enquire": "Request a Consultation",
    "svcPage.timeline.eyebrow": "Our Approach",
    "svcPage.timeline.title": "How We Work",
    "svcPage.timeline.step": "Stage",
    "svcPage.cta.title": "Unsure which service you require?",
    "svcPage.cta.desc": "Our attorneys will assist you in identifying the required expertise and formulating next steps during an initial consultation.",
    "svcPage.cta.button": "Request a Consultation",

    // Services data
    "svc.corporate.title": "Corporate Law",
    "svc.corporate.short": "Sophisticated legal counsel for businesses of all scales — from initial incorporation to highly complex M&A transactions.",
    "svc.corporate.desc": "We advise domestic and international corporations on all facets of business law, encompassing company formation, shareholder agreements, mergers and acquisitions, joint ventures, and rigorous corporate governance. Our team brings deep commercial acumen to every instruction, ensuring risk is mitigated while enterprise value is protected.",
    "svc.litigation.title": "Civil Litigation",
    "svc.litigation.short": "Formidable courtroom representation and dispute resolution grounded in rigorous legal analysis.",
    "svc.litigation.desc": "Our litigation and dispute resolution team navigates high-stakes civil disputes across all tiers of the Cypriot judiciary. We approach every case with a results-oriented mindset, combining exhaustive preparation with persuasive, authoritative advocacy to robustly defend our clients' interests.",
    "svc.realestate.title": "Real Estate Law",
    "svc.realestate.short": "End-to-end legal support for high-value property transactions, development projects, and land disputes across Cyprus.",
    "svc.realestate.desc": "From rigorous due diligence and title investigation to complex contract negotiation and ultimate registration, we guide our clients seamlessly through every stage of the real estate lifecycle. We act on behalf of prominent developers, institutional investors, and private buyers across both commercial and premium residential property markets.",
    "svc.family.title": "Family Law",
    "svc.family.short": "Compassionate, highly discreet counsel on divorce, custody, and estate matters.",
    "svc.family.desc": "We navigate highly sensitive family matters with profound empathy and absolute discretion. Our family law capability encompasses complex divorce proceedings, child custody and maintenance arrangements, prenuptial agreements, and wealth preservation through inheritance planning — always prioritising the long-term well-being of our clients and their families.",
    "svc.contract.title": "Contract Law",
    "svc.contract.short": "Exacting drafting and rigorous review of commercial agreements to insulate against risk.",
    "svc.contract.desc": "Robust contractual frameworks are the bedrock of any successful commercial enterprise. We draft, scrutinise, and negotiate a comprehensive spectrum of commercial arrangements — including supply contracts, service level agreements, licensing frameworks, and NDAs — guaranteeing clarity, strict enforceability, and ironclad protection.",

    // Services timeline
    "timeline.1.title": "Initial Consultation",
    "timeline.1.desc": "We meet to comprehend your legal circumstances, objectives, and constraints. All discussions are strictly confidential.",
    "timeline.2.title": "Thorough Assessment",
    "timeline.2.desc": "Our team conducts an exhaustive review of all pertinent facts, documentation, and prevailing legal precedents.",
    "timeline.3.title": "Strategic Development",
    "timeline.3.desc": "We formulate and present a clear legal strategy, accompanied by timelines and transparent fee schedules for your approval.",
    "timeline.4.title": "Active Execution",
    "timeline.4.desc": "We execute your legal strategy with absolute precision — in court, at the negotiating table, or within robust documentation.",
    "timeline.5.title": "Resolution & Continuity",
    "timeline.5.desc": "We drive matters to a successful conclusion and remain at your disposal for ongoing legal counsel.",

    // Team page
    "team.eyebrow": "Our People",
    "team.title": "The Legal Team",
    "team.desc": "Highly experienced attorneys and a dedicated administration, ensuring immediate responsiveness and substantive support across every mandate.",
    "team.join.eyebrow": "Join Us",
    "team.join.title": "We Are Always Seeking Exceptional Talent",
    "team.join.desc": "Polycarpou Law offers a highly collaborative, intellectually stimulating environment for attorneys passionate about securing the finest outcomes for their clients.",
    "team.join.cta": "Submit Your CV",
    "team.join.b1": "Extremely competitive remuneration",
    "team.join.b2": "Direct mentorship from senior practitioners",
    "team.join.b3": "High-calibre, international client base",
    "team.join.b4": "Progressive, flexible working directives",
    "team.join.b5": "Continuous professional development",
    "team.staff.eyebrow": "Administrative Staff",
    "team.staff.sofia.desc": "Sofia Koumpou is a graduate of the School of Philosophy of the University of Ioannina. She joined our law firm in September 2025. She holds the role of secretary, undertaking the coordination of daily operations, client communications and the management of office support. Within the scope of her duties, she provides support as an assistant to the legal department, contributing to the smooth operation of the office through the organisation and management of administrative procedures.",
    "team.staff.languages": "Languages",
    "team.cta.title": "Ready to speak with our experts?",
    "team.cta.button": "Schedule a Consultation",

    // Contact page
    "contact.eyebrow": "Get in Touch",
    "contact.title": "Contact Us",
    "contact.desc": "All enquiries are treated with the utmost confidence. We endeavour to respond within one business day.",
    "contact.office": "Office",
    "contact.firmName": "Andreas Polycarpou & Co LLC",
    "contact.address.label": "Address",
    "contact.address.value": "Arch. Makarios III Avenue 1-7, Office 201\nMITSI BUILDING, 1065 Nicosia, Cyprus",
    "contact.phone.label": "Telephone",
    "contact.email.label": "Email",
    "contact.hours.label": "Office Hours",
    "contact.hours.mf": "Mon – Fri",
    "contact.hours.sat": "Saturday",
    "contact.hours.sun": "Sunday",
    "contact.hours.closed": "Closed",
    "contact.map.city": "Nicosia, Cyprus",
    "contact.map.address": "Arch. Makarios III Ave 1-7, MITSI BUILDING",
    "contact.map.openInMaps": "Open office location in Google Maps",
    "contact.form.title": "Submit an Enquiry",
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
    "contact.form.messagePlaceholder": "Briefly describe your legal requirement...",
    "contact.form.privacy": "Confidential enquiries only.",
    "contact.form.privacyFull": "All information shared is strictly guarded by attorney-client privilege and will never be disclosed to unapproved third parties.",
    "contact.form.submit": "Submit Enquiry",
    "contact.form.submitting": "Submitting...",
    "contact.form.success.title": "Enquiry Received",
    "contact.form.success.desc": "Thank you for reaching out. A member of our team will contact you within one business day. All correspondence is held in strict confidence.",
    "contact.form.success.again": "Submit Another Enquiry",
    "contact.form.error.name": "Please provide your full name.",
    "contact.form.error.email": "Please provide a valid email address.",
    "contact.form.error.message": "Please provide a message (minimum 10 characters).",
    "contact.form.optCorporate": "Corporate Law",
    "contact.form.optLitigation": "Civil Litigation",
    "contact.form.optRealEstate": "Real Estate Law",
    "contact.form.optFamily": "Family Law",
    "contact.form.optContract": "Contract Law",
    "contact.form.optOther": "Other / Unsure",

    // Footer
    "footer.desc": "Comprehensive, commercially astute legal services in Cyprus. We deliver outcomes through rigorous precision and unyielding advocacy.",
    "footer.quickLinks": "Explore",
    "footer.ourTeam": "Our People",
    "footer.contact": "Contact",
    "footer.hours": "Office Hours",
    "footer.copyright": "Andreas Polycarpou & Co LLC. All rights reserved.",
    "footer.regulated": "Member of the Cyprus Bar Association · Regulated by the CBA",
    "footer.monFri": "Monday – Friday",
    "footer.sat": "Saturday",
    "footer.sun": "Sunday",
    "footer.closed": "Closed",
  },
  el: {
    // Nav
    "nav.home": "ΑΡΧΙΚΗ",
    "nav.about": "ΓΡΑΦΕΙΟ",
    "nav.services": "ΤΟΜΕΙΣ",
    "nav.team": "ΟΜΑΔΑ",
    "nav.contact": "ΕΠΙΚΟΙΝΩΝΙΑ",
    "nav.cta": "ΚΛΕΙΣΤΕ ΣΥΝΑΝΤΗΣΗ",

    // Home Hero
    "home.hero.eyebrow": "ANDREAS POLYCARPOU & CO LLC · 2015",
    "home.hero.title": "Στρατηγική Νομική ",
    "home.hero.titleAccent": "Αριστεία",
    "home.hero.subtitle": "Ολοκληρωμένες νομικές υπηρεσίες με επαγγελματική ακεραιότητα, στρατηγική προσέγγιση και αποτελεσματική δικαστηριακή εκπροσώπηση.",
    "home.hero.cta1": "ΚΛΕΙΣΤΕ ΣΥΝΑΝΤΗΣΗ",
    "home.hero.cta2": "Τομείς Εξειδίκευσης",

    // Trust
    "trust.years": "Έτη Εμπειρίας",
    "trust.cases": "Υποθέσεις",
    "trust.success": "Εμπιστοσύνη Πελατών",
    "trust.response": "Ανταπόκριση",

    // Services preview
    "services.eyebrow": "Οι Υπηρεσίες μας",
    "services.title": "Τομείς Δικαίου",
    "services.learnMore": "Περισσότερα",

    // Why choose us
    "why.eyebrow": "Άριστη Νομική Εκπροσώπηση",
    "why.title": "Χτίζοντας Σχέσεις Εμπιστοσύνης",
    "why.bullet1.title": "Στρατηγική με γνώμονα τον πελάτη",
    "why.bullet1.desc": "Κάθε απόφασή μας καθοδηγείται αυστηρά από τους δικούς σας εμπορικούς και προσωπικούς στόχους.",
    "why.bullet2.title": "Ειλικρινής επικοινωνία",
    "why.bullet2.desc": "Επικοινωνούμε με σαφήνεια και αμεσότητα, μετατρέποντας τα περίπλοκα νομικά ζητήματα σε ξεκάθαρες επιλογές.",
    "why.bullet3.title": "Προσανατολισμός στο αποτέλεσμα",
    "why.bullet3.desc": "Μετράμε την επιτυχία μας αποκλειστικά από τα αποτελέσματα που εξασφαλίζουμε για εσάς.",
    "why.cta": "Η Ιστορία μας",
    "why.quote": "«Η δικαιοσύνη είναι το άθροισμα κάθε ηθικού καθήκοντος.»",
    "why.quoteAuthor": "— Ουίλιαμ Γκόντουιν",

    // Process
    "process.eyebrow": "Η Μεθοδολογία μας",
    "process.title": "Διαδικασία Συνεργασίας",
    "process.step1.title": "Αρχική Συνάντηση",
    "process.step1.desc": "Εμπιστευτική συνάντηση για την ανάλυση των νομικών σας αναγκών και τον καθορισμό του τρόπου με τον οποίο μπορούμε να συνδράμουμε.",
    "process.step2.title": "Αξιολόγηση",
    "process.step2.desc": "Ενδελεχής αξιολόγηση της υπόθεσής σας, του σχετικού υλικού και των στόχων σας για τη διαμόρφωση του βέλτιστου στρατηγικού πλάνου.",
    "process.step3.title": "Στρατηγική",
    "process.step3.desc": "Ανάπτυξη και παρουσίαση ενός σαφούς νομικού σχεδίου με διαφανή χρονοδιαγράμματα.",
    "process.step4.title": "Εκπροσώπηση",
    "process.step4.desc": "Αποτελεσματική και υπεύθυνη εκπροσώπηση σε όλα τα στάδια — ενώπιον των δικαστηρίων, σε διαπραγματεύσεις ή μέσω εξωδικαστικών διαδικασιών.",

    // CTA banner
    "cta.eyebrow": "Εχεμύθεια & Επαγγελματισμός",
    "cta.title": "Προγραμματίστε μια εμπιστευτική συνάντηση.",
    "cta.desc": "Επικοινωνήστε μαζί μας για να συζητήσουμε την υπόθεσή σας με απόλυτη εχεμύθεια και χωρίς καμία δέσμευση.",
    "cta.button": "ΚΛΕΙΣΤΕ ΣΥΝΑΝΤΗΣΗ",

    // About page
    "about.header.eyebrow": "Το Γραφείο Μας",
    "about.header.title": "Andreas Polycarpou & Co LLC",
    "about.story.eyebrow": "Η Ιστορία Μας",
    "about.story.title": "Αρχές, Ήθος, και Αποτελεσματικότητα.",
    "about.story.p1": "Το δικηγορικό μας γραφείο αποτελεί ένα σύγχρονο και δυναμικά αναπτυσσόμενο δικηγορικό γραφείο με έδρα τη Λευκωσία. Από το 2015, παρέχει ολοκληρωμένες νομικές υπηρεσίες με γνώμονα την επαγγελματική ακεραιότητα, τη στρατηγική προσέγγιση και την αποτελεσματική εκπροσώπηση των εντολέων του.",
    "about.story.p2": "Το γραφείο μας, στη σημερινή του μορφή ως ANDREAS POLYCARPOU & CO LLC υπό την ηγεσία του κ. Ανδρέα Πολυκάρπου, συνεχίζει να εξελίσσεται διατηρώντας σταθερή προσήλωση στην ποιότητα, την υπευθυνότητα και την εξατομικευμένη εξυπηρέτηση.",
    "about.story.p3": "Η ομάδα μας αποτελείται από τέσσερις δικηγόρους καθώς και έμπειρο διοικητικό προσωπικό, διασφαλίζοντας άμεση ανταπόκριση και ουσιαστική υποστήριξη σε κάθε υπόθεση.",
    "about.story.p4": "Το γραφείο δραστηριοποιείται σε όλους τους βασικούς τομείς του δικαίου, παρέχοντας νομική συμβουλευτική και δικαστηριακή εκπροσώπηση σε ιδιώτες και επιχειρήσεις. Προσεγγίζουμε κάθε υπόθεση με προσοχή στη λεπτομέρεια, εμπιστευτικότητα και σαφή στρατηγικό σχεδιασμό, με στόχο την επίτευξη των βέλτιστων δυνατών αποτελεσμάτων.",
    "about.story.cta": "Η Ομάδα μας",
    "about.founder.name": "Ανδρέας Πολυκάρπου",
    "about.founder.role": "Ιδρυτής & Διευθύνων Σύμβουλος · Μέλος του Π.Δ.Σ. από το 2006",

    "about.mv.eyebrow": "Στόχοι & Φιλοδοξία",
    "about.mv.title": "Αποστολή & Όραμα",
    "about.mission.title": "Η Αποστολή μας",
    "about.mission.p1": "Να παρέχουμε σε ιδιώτες και επιχειρήσεις στην Κύπρο κορυφαίας ποιότητας νομική εκπροσώπηση — συνδυάζοντας την αυστηρή νομική κατάρτιση με πρακτικές λύσεις και αποτελεσματική προάσπιση των συμφερόντων τους.",
    "about.mission.p2": "Υπάρχουμε για να προστατεύουμε αυτά που έχουν σημασία για τους πελάτες μας: τα δικαιώματά τους, την περιουσία τους και το μέλλον τους.",
    "about.vision.title": "Το Όραμά μας",
    "about.vision.p1": "Να αποτελούμε έναν από τους πλέον αξιόπιστους συνεργάτες στον νομικό χώρο της Κύπρου — ξεχωρίζοντας όχι για το μέγεθός μας, αλλά για το βάθος της εμπειρογνωμοσύνης μας και την προσωπική δέσμευση προς τους πελάτες μας.",
    "about.vision.p2": "Στοχεύουμε να θέτουμε υψηλά πρότυπα νομικής αριστείας και αξιοπιστίας σε κάθε υπόθεση που αναλαμβάνουμε.",

    "about.values.eyebrow": "Οι Αρχές μας",
    "about.values.title": "Οι Βασικές μας Αξίες",
    "about.values.cta.title": "Χρειάζεστε νομική καθοδήγηση;",
    "about.values.cta.desc": "Επικοινωνήστε μαζί μας σήμερα για μια αρχική συζήτηση της περίπτωσής σας με απόλυτη εμπιστευτικότητα.",
    "about.values.cta.button": "Επικοινωνία",

    // Values
    "value.integrity": "Ακεραιότητα",
    "value.integrity.desc": "Πορευόμαστε με βάση τα υψηλότερα πρότυπα δεοντολογίας. Κάθε συμβουλή και ενέργειά μας καθοδηγείται από ειλικρίνεια, διαφάνεια και ακλόνητη δέσμευση για την προάσπιση των συμφερόντων σας.",
    "value.precision": "Ακρίβεια",
    "value.precision.desc": "Η νομική υπεροχή απαιτεί σχολαστική προσοχή στη λεπτομέρεια. Αξιολογούμε κάθε δεδομένο και προνοούμε για κάθε κίνδυνο, μην αφήνοντας τίποτα στην τύχη.",
    "value.commitment": "Αφοσίωση",
    "value.commitment.desc": "Οι στόχοι σας είναι και δικοί μας. Εμβαθύνουμε στις ανάγκες κάθε πελάτη ξεχωριστά, παρέχοντας πρακτικές και αποφασιστικές λύσεις απόλυτα προσαρμοσμένες στα δεδομένα του.",

    // Services page
    "svcPage.eyebrow": "Η Εξειδίκευσή μας",
    "svcPage.title": "Τομείς Δικαίου",
    "svcPage.desc": "Εξειδικευμένη νομική υποστήριξη στους κύριους τομείς του δικαίου από έμπειρους δικηγόρους με βαθιά γνώση της κυπριακής νομοθεσίας και πρακτικής.",
    "svcPage.practiceArea": "Τομέας Εξειδίκευσης",
    "svcPage.enquire": "Ζητήστε Ενημέρωση",
    "svcPage.timeline.eyebrow": "Η Προσέγγισή μας",
    "svcPage.timeline.title": "Πώς Λειτουργούμε",
    "svcPage.timeline.step": "Στάδιο",
    "svcPage.cta.title": "Δεν είστε βέβαιοι τι χρειάζεστε;",
    "svcPage.cta.desc": "Οι δικηγόροι μας θα σας βοηθήσουν να εντοπίσετε τις νομικές σας ανάγκες και να σχεδιάσετε τα επόμενα βήματα κατά την αρχική μας συνάντηση.",
    "svcPage.cta.button": "ΚΛΕΙΣΤΕ ΣΥΝΑΝΤΗΣΗ",

    // Services data
    "svc.corporate.title": "Εταιρικό & Εμπορικό Δίκαιο",
    "svc.corporate.short": "Ολοκληρωμένη νομική υποστήριξη για επιχειρήσεις κάθε κλίμακας — από συστάσεις εταιρειών μέχρι πολύπλοκες εμπορικές συμφωνίες.",
    "svc.corporate.desc": "Συμβουλεύουμε εγχώριες και διεθνείς επιχειρήσεις σε κάθε πτυχή της εταιρικής τους ζωής, παρέχοντας καθοδήγηση για σύσταση εταιρειών, συμφωνίες μετόχων, εξαγορές και συγχωνεύσεις, καθώς και ζητήματα εταιρικής διακυβέρνησης. Η εκτενής εμπειρία μας, της οποίας τα θεμέλια στηρίζονται στην εμπορική αντίληψη, διασφαλίζει τον περιορισμό των κινδύνων και την προστασία των εταιρικών σας συμφερόντων.",
    "svc.litigation.title": "Αστικό και Ποινικό Δίκαιο",
    "svc.litigation.short": "Υπεύθυνη και μαχητική δικαστηριακή εκπροσώπηση, βασισμένη σε ενδελεχή νομική ανάλυση.",
    "svc.litigation.desc": "Η ομάδα μας απαρτίζεται από έμπειρους δικηγόρους ικανούς να χειριστούν σοβαρές υποθέσεις διαφορών ενώπιον όλων των βαθμίδων των κυπριακών δικαστηρίων. Προσεγγίζουμε κάθε υπόθεση με επιμονή και αποφασιστικότητα, συνδυάζοντας την άριστη προετοιμασία με τη στιβαρή νομική επιχειρηματολογία, προκειμένου να υπερασπιστούμε τα συμφέροντά σας.",
    "svc.realestate.title": "Εμπράγματο Δίκαιο",
    "svc.realestate.short": "Νομική κατοχύρωση και υποστήριξη σε αγοραπωλησίες ακινήτων, κατασκευαστικά έργα και κτηματικές διαφορές.",
    "svc.realestate.desc": "Από τον νομικό έλεγχο τίτλων και περιουσιακών στοιχείων μέχρι τη διαπραγμάτευση περίπλοκων συμβολαίων και την τελική εγγραφή/μεταβίβαση, βρισκόμαστε δίπλα στους πελάτες μας σε κάθε στάδιο της διαδικασίας. Εκπροσωπούμε κατασκευαστικές εταιρείες, επενδυτές και ιδιώτες αγοραστές, εξασφαλίζοντας την αρχής γενομένης ασφάλεια κάθε συναλλαγής.",
    "svc.family.title": "Οικογενειακό Δίκαιο",
    "svc.family.short": "Διακριτική και ανθρώπινη νομική προσέγγιση σε ζητήματα διαζυγίου, διατροφής και κληρονομικών δικαιωμάτων.",
    "svc.family.desc": "Αντιμετωπίζουμε τα ευαίσθητα ζητήματα του οικογενειακού δικαίου με βαθιά κατανόηση, ενσυναίσθηση και απόλυτη εχεμύθεια. Οι υπηρεσίες μας καλύπτουν υποθέσεις έκδοσης διαζυγίου, γονικής μέριμνας, διατροφής, περιουσιακών διαφορών, καθώς και αποτελεσματική σχεδίαση σε θέματα κληρονομικού δικαίου, θέτοντας πάντα ως προτεραιότητα το καλώς νοούμενο συμφέρον των μερών.",
    "svc.contract.title": "Ενοχικό Δίκαιο",
    "svc.contract.short": "Εξειδικευμένη σύνταξη και επισταμένος έλεγχος συμβάσεων για την απόλυτη νομική σας θωράκιση.",
    "svc.contract.desc": "Τα ορθά δομημένα συμβόλαια είναι το θεμέλιο μιας επιτυχημένης και ακίνδυνης δραστηριότητας. Συντάσσουμε, εξετάζουμε και διαπραγματευόμαστε ένα ευρύ φάσμα εμπορικών, εργατικών και αστικών συμφωνιών — περιλαμβανομένων συμβάσεων παροχής υπηρεσιών και συμφωνιών εμπιστευτικότητας (NDA) — κατοχυρώνοντας τους πελάτες μας με καθαρότητα και νομική σαφήνεια.",

    // Services timeline
    "timeline.1.title": "Αρχική Συνάντηση",
    "timeline.1.desc": "Πραγματοποιείται πλήρως εμπιστευτική συνάντηση όπου συζητάμε διεξοδικά τα δεδομένα της υπόθεσης, καθώς και τους στόχους και τις ανησυχίες σας.",
    "timeline.2.title": "Νομική Αξιολόγηση",
    "timeline.2.desc": "Η ομάδα μας μελετά σχολαστικά όλα τα σχετικά έγγραφα, τα δεδομένα και το προβλεπόμενο νομικό πλαίσιο.",
    "timeline.3.title": "Σχεδιασμός Στρατηγικής",
    "timeline.3.desc": "Ετοιμάζουμε και σας αναλύουμε ένα σαφές στρατηγικό πλάνο δράσης, όπου σας κατατοπίζουμε για τα επόμενα βήματα και το πιθανό κόστος.",
    "timeline.4.title": "Υλοποίηση",
    "timeline.4.desc": "Υλοποιούμε τον σχεδιασμό μας με απόλυτη προσήλωση — είτε σε δικαστηριακό επίπεδο, στη διαπραγμάτευση συμφωνιών ή στη σύνταξη των εγγράφων.",
    "timeline.5.title": "Ολοκλήρωση & Υποστήριξη",
    "timeline.5.desc": "Επιφέρουμε τη βέλτιστη δυνατή λύση στο πρόβλημά σας και παραμένουμε στη διάθεσή σας για τυχόν μελλοντική νομική συνδρομή.",

    // Team page
    "team.eyebrow": "Οι Ανθρωποι Μας",
    "team.title": "Το Ανθρώπινο Δυναμικό μας",
    "team.desc": "Έμπειροι δικηγόροι και αφοσιωμένο διοικητικό προσωπικό με κοινό στόχο την παροχή ταχύτατης και ποιοτικής νομικής υποστήριξης σε κάθε υφιστάμενο ή νέο πελάτη.",
    "team.join.eyebrow": "ΚΑΡΙΕΡΑ",
    "team.join.title": "Αναζητούμε Ταλέντα Υψηλού Επιπέδου",
    "team.join.desc": "Στην Polycarpou Law καλλιεργούμε ένα συνεργατικό και υψηλού επιπέδου περιβάλλον για νομικούς που επιδιώκουν εξέλιξη, καθοδήγηση και ουσιαστική επαγγελματική διάκριση.",
    "team.join.cta": "ΥΠΟΒΟΛΗ ΒΙΟΓΡΑΦΙΚΟΥ",
    "team.join.b1": "Εξαιρετικά ανταγωνιστικές απολαβές",
    "team.join.b2": "Καθοδήγηση από έμπειρους συνεργάτες",
    "team.join.b3": "Συμμετοχή σε υποθέσεις υψηλού επιπέδου",
    "team.join.b4": "Σύγχρονο και ευέλικτο εργασιακό περιβάλλον",
    "team.join.b5": "Συνεχής επαγγελματική εξέλιξη",
    "team.staff.eyebrow": "Διοικητικό Προσωπικό",
    "team.staff.sofia.desc": "Η Σοφία Κούμπου είναι απόφοιτος της Φιλοσοφικής Σχολής του Πανεπιστημίου Ιωαννίνων. Εντάχθηκε στη Δικηγορική μας Εταιρία το Σεπτέμβριο του 2025. Έχει το ρόλο της γραμματείας, αναλαμβάνοντας το συντονισμό της καθημερινής λειτουργίας ,την επικοινωνία με τους πελάτες και τη διαχείριση της γραφειακής υποστήριξης. Στο πλαίσιο των καθηκόντων της παρέχει υποστήριξη ως βοηθός του νομικού τμήματος συμβάλλοντας στην εύρυθμη λειτουργία του γραφείου.",
    "team.staff.languages": "Γλώσσες",
    "team.cta.title": "Είστε έτοιμοι να μιλήσετε με τους ειδικούς μας;",
    "team.cta.button": "ΚΛΕΙΣΤΕ ΣΥΝΑΝΤΗΣΗ",

    // Contact page
    "contact.eyebrow": "Επικοινωνία",
    "contact.title": "Ελάτε σε Επαφή",
    "contact.desc": "Κάθε επικοινωνία καλύπτεται από απόλυτη εχεμύθεια και το επαγγελματικό απόρρητο. Στόχος μας να ανταποκριθούμε εντός μιας εργάσιμης ημέρας.",
    "contact.office": "Γραφεία",
    "contact.firmName": "Andreas Polycarpou & Co LLC",
    "contact.address.label": "Διεύθυνση",
    "contact.address.value": "Λεωφ. Αρχ. Μακαρίου Γ' 1-7, Γραφείο 201\nΜέγαρο Μιτσή 3, 1065 Λευκωσία",
    "contact.phone.label": "Τηλέφωνο",
    "contact.email.label": "Email",
    "contact.hours.label": "Ώρες Λειτουργίας",
    "contact.hours.mf": "Δευ – Παρ",
    "contact.hours.sat": "Σάββατο",
    "contact.hours.sun": "Κυριακή",
    "contact.hours.closed": "Κλειστά",
    "contact.map.city": "Λευκωσία, Κύπρος",
    "contact.map.address": "Λεωφ. Αρχιεπισκόπου Μακαρίου Γ' 1-7, Μέγαρο Μιτσή",
    "contact.map.openInMaps": "Άνοιγμα στους Χάρτες (Google Maps)",
    "contact.form.title": "Αποστολή Μηνύματος",
    "contact.form.name": "Ονοματεπώνυμο",
    "contact.form.email": "Ηλεκτρονικό Ταχυδρομείο",
    "contact.form.phone": "Τηλέφωνο",
    "contact.form.phoneOpt": "(προαιρετικό)",
    "contact.form.area": "Τομέας Δικαίου",
    "contact.form.areaPlaceholder": "Επιλέξτε τομέα εξειδίκευσης",
    "contact.form.message": "Μήνυμα",
    "contact.form.namePlaceholder": "Το πλήρες όνομά σας",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.phonePlaceholder": "+357 ...",
    "contact.form.messagePlaceholder": "Περιγράψτε συνοπτικά την υπόθεσή σας...",
    "contact.form.privacy": "Απόλυτη Εχεμύθεια.",
    "contact.form.privacyFull": "Όλες οι πληροφορίες που μοιράζεστε προστατεύονται από το δικηγορικό απόρρητο και δεν θα γνωστοποιηθούν σε κανένα τρίτο μέρος.",
    "contact.form.submit": "Αποστολή Μηνύματος",
    "contact.form.submitting": "Αποστολή...",
    "contact.form.success.title": "Το Μήνυμα Ελήφθη",
    "contact.form.success.desc": "Σας ευχαριστούμε για την επικοινωνία. Ένα μέλος της ομάδας μας θα επικοινωνήσει μαζί σας εντός της ημέρας. Όλα τα μηνύματα τηρούνται με αυστηρή εχεμύθεια.",
    "contact.form.success.again": "Νέο Μήνυμα",
    "contact.form.error.name": "Παρακαλούμε εισάγετε το πλήρες ονοματεπώνυμό σας.",
    "contact.form.error.email": "Παρακαλούμε εισάγετε έγκυρη διεύθυνση email.",
    "contact.form.error.message": "Το μήνυμα που εισάγατε είναι πολύ σύντομο (τουλάχιστον 10 χαρακτήρες).",
    "contact.form.optCorporate": "Εταιρικό / Εμπορικό",
    "contact.form.optLitigation": "Αστικές / Ποινικές Διαφορές",
    "contact.form.optRealEstate": "Εμπράγματο / Ακίνητα",
    "contact.form.optFamily": "Οικογενειακό Δίκαιο",
    "contact.form.optContract": "Συμβάσεις / Ενοχικό Δίκαιο",
    "contact.form.optOther": "Άλλο / Δεν Είμαι Σίγουρος",

    // Footer
    "footer.desc": "Ολοκληρωμένες νομικές υπηρεσίες με επαγγελματική ακεραιότητα, στρατηγική προσέγγιση και αποτελεσματική δικαστηριακή εκπροσώπηση.",
    "footer.quickLinks": "Χρήσιμοι Σύνδεσμοι",
    "footer.ourTeam": "Η Ομάδα μας",
    "footer.contact": "Επικοινωνία",
    "footer.hours": "Ώρες Λειτουργίας",
    "footer.copyright": "Andreas Polycarpou & Co LLC. Με την επιφύλαξη παντός δικαιώματος.",
    "footer.regulated": "Μέλος του Παγκύπριου Δικηγορικού Συλλόγου",
    "footer.monFri": "Δευτέρα – Παρασκευή",
    "footer.sat": "Σάββατο",
    "footer.sun": "Κυριακή",
    "footer.closed": "Κλειστά",
  }
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

const I18nContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}>({
  lang: "en",
  setLang: () => { },
  t: (key) => key,
});

export const useI18n = () => useContext(I18nContext);
