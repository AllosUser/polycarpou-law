export type PracticeArea = {
  id: string;
  icon: string;
  title: {
    en: string;
    el: string;
  };
  desc: {
    en: string;
    el: string;
  };
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "civil-law",
    icon: "Scale",
    title: {
      en: "Civil Law",
      el: "Αστικό Δίκαιο"
    },
    desc: {
      en: "We handle compensation claims arising from road traffic accidents, workplace accidents and torts. We also provide legal support in civil disputes between individuals and businesses.",
      el: "Αναλαμβάνουμε υποθέσεις αποζημιώσεων από τροχαία ατυχήματα, εργατικά ατυχήματα και αδικοπραξίες. Παρέχουμε επίσης νομική υποστήριξη σε αστικές διαφορές μεταξύ ιδιωτών και επιχειρήσεων."
    }
  },
  {
    id: "administrative-law",
    icon: "Landmark",
    title: {
      en: "Administrative Law",
      el: "Διοικητικό Δίκαιο"
    },
    desc: {
      en: "We represent individuals and businesses in matters concerning decisions issued by public authorities and government departments. We provide advice and handle recourses against administrative acts.",
      el: "Εκπροσωπούμε ιδιώτες και επιχειρήσεις σε υποθέσεις που αφορούν αποφάσεις δημόσιων αρχών και κρατικών υπηρεσιών. Παρέχουμε συμβουλές και χειρισμό προσφυγών κατά διοικητικών πράξεων."
    }
  },
  {
    id: "consumer-protection",
    icon: "ShieldCheck",
    title: {
      en: "Consumer Protection Law",
      el: "Δίκαιο Προστασίας Καταναλωτή"
    },
    desc: {
      en: "We provide legal services to consumers in cases involving defective products, misleading practices and infringements of their rights. We offer guidance on securing compensation and resolving disputes with suppliers.",
      el: "Παρέχουμε νομικές υπηρεσίες σε καταναλωτές σε περιπτώσεις ελαττωματικών προϊόντων, παραπλανητικών πρακτικών και παραβίασης των δικαιωμάτων τους. Παρέχουμε καθοδήγηση για την εξασφάλιση αποζημιώσεων και την επίλυση διαφορών με προμηθευτές."
    }
  },
  {
    id: "corporate-commercial",
    icon: "Briefcase",
    title: {
      en: "Corporate and Commercial Law",
      el: "Εταιρικό και Εμπορικό Δίκαιο"
    },
    desc: {
      en: "We provide legal services for the incorporation, operation and restructuring of companies. We advise businesses on commercial transactions, corporate agreements and corporate governance.",
      el: "Παρέχουμε νομικές υπηρεσίες για ίδρυση, λειτουργία και αναδιοργάνωση εταιρειών. Συμβουλεύουμε επιχειρήσεις σε εμπορικές συναλλαγές, εταιρικές συμφωνίες και εταιρική διακυβέρνηση."
    }
  },
  {
    id: "contract-law",
    icon: "PenTool",
    title: {
      en: "Contract Law",
      el: "Δίκαιο Συμβάσεων"
    },
    desc: {
      en: "We undertake the drafting, review and negotiation of all types of contracts. We provide legal protection in cases involving breaches of contractual obligations and disputes between contracting parties.",
      el: "Αναλαμβάνουμε τη σύνταξη, αναθεώρηση και διαπραγμάτευση κάθε είδους συμβάσεων. Παρέχουμε νομική προστασία σε περιπτώσεις παραβίασης συμβατικών υποχρεώσεων και διαφορών μεταξύ συμβαλλομένων."
    }
  },
  {
    id: "real-estate",
    icon: "Building2",
    title: {
      en: "Real Estate and Property Law",
      el: "Δίκαιο Ακίνητης Ιδιοκτησίας"
    },
    desc: {
      en: "We offer specialised legal services in the field of real estate, supporting individuals and businesses at every stage of property transactions. Our services include title searches, sales and purchases, transfers, contractual support and representation before the competent authorities.",
      el: "Προσφέρουμε εξειδικευμένες νομικές υπηρεσίες στον τομέα των ακινήτων, υποστηρίζοντας ιδιώτες και επιχειρήσεις σε κάθε στάδιο συναλλαγών ακίνητης περιουσίας. Οι υπηρεσίες μας περιλαμβάνουν ελέγχους τίτλων, αγοραπωλησίες, μεταβιβάσεις, συμβατική υποστήριξη και εκπροσώπηση ενώπιον των αρμόδιων φορέων."
    }
  },
  {
    id: "bankruptcy-insolvency",
    icon: "TrendingDown",
    title: {
      en: "Bankruptcy and Insolvency Law",
      el: "Πτωχευτικό Δίκαιο / Δίκαιο Αφερεγγυότητας"
    },
    desc: {
      en: "We advise individuals and businesses on financial distress and debt restructuring. We handle bankruptcy and liquidation proceedings, as well as debt repayment plans.",
      el: "Συμβουλεύουμε ιδιώτες και επιχειρήσεις σε θέματα οικονομικής αδυναμίας και αναδιάρθρωσης οφειλών. Αναλαμβάνουμε διαδικασίες πτώχευσης, εκκαθάρισης και σχέδια αποπληρωμής χρεών."
    }
  },
  {
    id: "family-law",
    icon: "Heart",
    title: {
      en: "Family Law",
      el: "Οικογενειακό Δίκαιο"
    },
    desc: {
      en: "We provide discreet and effective legal support in family disputes.",
      el: "Παρέχουμε διακριτική και αποτελεσματική νομική υποστήριξη σε οικογενειακές διαφορές."
    }
  },
  {
    id: "inheritance-succession",
    icon: "ScrollText",
    title: {
      en: "Inheritance and Succession Law",
      el: "Κληρονομικό Δίκαιο"
    },
    desc: {
      en: "We undertake the drafting of wills and procedures relating to estate administration, distribution and claims concerning inheritance rights.",
      el: "Αναλαμβάνουμε σύνταξη διαθηκών και διαδικασίες διαχείρισης περιουσίας, διανομής και διεκδίκησης κληρονομικών δικαιωμάτων."
    }
  },
  {
    id: "employment-law",
    icon: "Users",
    title: {
      en: "Employment Law",
      el: "Εργατικό Δίκαιο"
    },
    desc: {
      en: "We represent employers and employees in matters relating to employment relations and disputes.",
      el: "Εκπροσωπούμε εργοδότες και εργαζομένους σε ζητήματα εργασιακών σχέσεων και διαφορών."
    }
  },
  {
    id: "banking-law",
    icon: "Landmark",
    title: {
      en: "Banking Law",
      el: "Τραπεζικό Δίκαιο"
    },
    desc: {
      en: "We advise clients on loans, guarantees and banking agreements. We handle debt restructuring matters and disputes with banking institutions.",
      el: "Συμβουλεύουμε πελάτες σε θέματα δανείων, εγγυήσεων και τραπεζικών συμβάσεων. Αναλαμβάνουμε υποθέσεις αναδιάρθρωσης οφειλών και διαφορών με τραπεζικά ιδρύματα."
    }
  },
  {
    id: "criminal-law",
    icon: "Gavel",
    title: {
      en: "Criminal Law",
      el: "Ποινικό Δίκαιο"
    },
    desc: {
      en: "We provide defence and legal representation at all stages of criminal proceedings.",
      el: "Παρέχουμε υπεράσπιση και νομική εκπροσώπηση σε όλα τα στάδια ποινικών διαδικασιών."
    }
  },
  {
    id: "immigration-law",
    icon: "Globe",
    title: {
      en: "Immigration Law",
      el: "Μεταναστευτικό Δίκαιο"
    },
    desc: {
      en: "We provide specialised legal support in immigration law matters, including residence and work permits, as well as matters concerning international protection. We represent clients before the competent administrative authorities, the International Protection Administrative Court and the Administrative Court, providing comprehensive legal guidance and representation at every stage of the process.",
      el: "Παρέχουμε εξειδικευμένη νομική υποστήριξη σε ζητήματα μεταναστευτικού δικαίου, συμπεριλαμβανομένων αδειών παραμονής και εργασίας, καθώς και θεμάτων διεθνούς προστασίας. Αναλαμβάνουμε την εκπροσώπηση πελατών ενώπιον των αρμόδιων διοικητικών αρχών, του Δικαστηρίου Διεθνούς Προστασίας και του Διοικητικού Δικαστηρίου, παρέχοντας ολοκληρωμένη νομική καθοδήγηση και εκπροσώπηση σε κάθε στάδιο της διαδικασίας."
    }
  },
  {
    id: "tax-law",
    icon: "Calculator",
    title: {
      en: "Tax Law",
      el: "Φορολογικό Δίκαιο"
    },
    desc: {
      en: "We advise individuals and businesses on compliance with tax legislation. We provide support in tax audits, objections and tax planning.",
      el: "Συμβουλεύουμε ιδιώτες και επιχειρήσεις για τη συμμόρφωση με τη φορολογική νομοθεσία. Παρέχουμε υποστήριξη σε φορολογικούς ελέγχους, ενστάσεις και φορολογικό σχεδιασμό."
    }
  },
  {
    id: "rent-control",
    icon: "Key",
    title: {
      en: "Rent Control and Tenancy Law",
      el: "Δίκαιο Ενοικιοστασίου και Μισθώσεων Ακινήτων"
    },
    desc: {
      en: "We handle matters concerning tenancy relationships between landlords and tenants. We provide legal support in relation to rent, evictions, breaches of tenancy agreements and the resolution of related disputes.",
      el: "Αναλαμβάνουμε υποθέσεις που αφορούν μισθωτικές σχέσεις μεταξύ ιδιοκτητών και ενοικιαστών. Παρέχουμε νομική υποστήριξη για ενοίκια, εξώσεις, παραβιάσεις μισθωτηρίων και επίλυση σχετικών διαφορών."
    }
  }
];
