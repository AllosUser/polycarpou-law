import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team1 from "@/assets/team-1.jpg";
import founder from "@/assets/founder.jpg";

export const services = [
  {
    id: "corporate-law",
    icon: "Briefcase",
    title: "Corporate Law",
    shortDescription: "Comprehensive legal counsel for businesses of all sizes — from incorporation to complex M&A transactions.",
    description:
      "We advise local and international corporations on all aspects of business law, including company formation, shareholder agreements, mergers & acquisitions, joint ventures, and corporate governance. Our team brings deep commercial awareness to every engagement.",
    anchor: "corporate-law",
  },
  {
    id: "civil-litigation",
    icon: "Scale",
    title: "Civil Litigation",
    shortDescription: "Strategic courtroom representation and dispute resolution grounded in rigorous legal analysis.",
    description:
      "Our litigation team handles complex civil disputes across all levels of the Cypriot court system. We approach every case with a results-driven mindset, combining meticulous preparation with persuasive advocacy to protect our clients' interests.",
    anchor: "civil-litigation",
  },
  {
    id: "real-estate-law",
    icon: "Building2",
    title: "Real Estate Law",
    shortDescription: "End-to-end legal support for property transactions, development projects, and land disputes in Cyprus.",
    description:
      "From due diligence and title searches to contract negotiation and registration, we guide clients through every stage of real estate transactions. We act for developers, investors, and individual buyers across residential and commercial property markets.",
    anchor: "real-estate-law",
  },
  {
    id: "family-law",
    icon: "Heart",
    title: "Family Law",
    shortDescription: "Compassionate, discreet counsel on divorce, custody, and estate matters with sensitivity and professionalism.",
    description:
      "We handle sensitive family matters with empathy and discretion. Our family law practice covers divorce proceedings, child custody and maintenance, prenuptial agreements, and inheritance matters — always prioritising the best interests of our clients and their families.",
    anchor: "family-law",
  },
  {
    id: "contract-law",
    icon: "FileText",
    title: "Contract Law",
    shortDescription: "Precision drafting and review of all commercial agreements to minimise risk and protect your interests.",
    description:
      "Sound contracts are the foundation of every successful business relationship. We draft, review, and negotiate a full spectrum of commercial agreements — including supply contracts, service agreements, licensing deals, and NDAs — ensuring clarity, enforceability, and protection.",
    anchor: "contract-law",
  },
];

export const team = [
  {
    id: "andreas-polycarpou",
    name: "Andreas Polycarpou",
    role: "Founding Partner",
    image: founder,
    bio: "Andreas founded Polycarpou Law in 2009 following a distinguished career at a leading Nicosia practice. He specialises in corporate law and complex litigation, and is recognised as a leading practitioner by Legal 500.",
    education: "LLB, University of Athens · LLM, King's College London",
    barNumber: "Cyprus Bar Association #1024",
  },
  {
    id: "elena-stavrou",
    name: "Elena Stavrou",
    role: "Senior Associate — Real Estate",
    image: team1,
    bio: "Elena leads our real estate practice, advising developers, institutional investors, and private clients on high-value property transactions across Cyprus and the Eastern Mediterranean region.",
    education: "LLB, University of Cyprus · LLM, UCL",
    barNumber: "Cyprus Bar Association #2187",
  },
  {
    id: "michalis-hadjicosta",
    name: "Michalis Hadjicosta",
    role: "Partner — Litigation",
    image: team2,
    bio: "With over 12 years of courtroom experience, Michalis heads our civil litigation department. He is known for his strategic acumen and ability to manage complex, high-stakes disputes to a successful resolution.",
    education: "LLB, University of Edinburgh · BVC, Inns of Court",
    barNumber: "Cyprus Bar Association #1756",
  },
  {
    id: "sophia-demetriou",
    name: "Sophia Demetriou",
    role: "Associate — Family & Corporate",
    image: team3,
    bio: "Sophia advises on family law matters and corporate governance with a calm, client-centred approach. Fluent in Greek, English, and Russian, she is particularly valued for her cross-border expertise.",
    education: "LLB, University of Bristol",
    barNumber: "Cyprus Bar Association #3241",
  },
];

export const values = [
  {
    icon: "Shield",
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards. Every recommendation we make is guided by honesty, transparency, and a steadfast commitment to doing right by our clients.",
  },
  {
    icon: "Target",
    title: "Precision",
    description:
      "Legal excellence demands meticulous attention to detail. We analyse every fact, review every clause, and anticipate every risk — so nothing is left to chance.",
  },
  {
    icon: "Users",
    title: "Client Commitment",
    description:
      "Our clients' goals are our goals. We invest in understanding each client's unique situation and deliver practical, decisive legal counsel tailored to their needs.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "A confidential initial meeting to understand your legal needs and assess how we can best assist you.",
  },
  {
    step: "02",
    title: "Assessment",
    description: "Thorough analysis of your case, documents, and objectives to identify the strongest legal strategy.",
  },
  {
    step: "03",
    title: "Strategy",
    description: "A clear, tailored legal plan is developed and presented with transparent timelines and fee structures.",
  },
  {
    step: "04",
    title: "Representation",
    description: "Expert execution of your legal strategy — in the courtroom, at the negotiating table, or in documentation.",
  },
];

export const trustIndicators = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Cases Handled" },
  { value: "4", label: "Languages Spoken" },
  { value: "✓", label: "Cyprus Bar Association" },
];
