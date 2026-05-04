import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type ConsentValue = "accepted" | "rejected" | null;

interface CookieConsentContextValue {
  consent: ConsentValue;
  bannerOpen: boolean;
  accept: () => void;
  reject: () => void;
  reopen: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue>({
  consent: null,
  bannerOpen: false,
  accept: () => {},
  reject: () => {},
  reopen: () => {},
});

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentValue>(() => {
    const stored = localStorage.getItem("cookieConsent");
    return stored === "accepted" ? "accepted" : stored === "rejected" ? "rejected" : null;
  });

  const [bannerOpen, setBannerOpen] = useState(() => {
    const stored = localStorage.getItem("cookieConsent");
    return stored !== "accepted" && stored !== "rejected";
  });

  const accept = useCallback(() => {
    setConsent("accepted");
    localStorage.setItem("cookieConsent", "accepted");
    setBannerOpen(false);
  }, []);

  const reject = useCallback(() => {
    setConsent("rejected");
    localStorage.setItem("cookieConsent", "rejected");
    setBannerOpen(false);
  }, []);

  const reopen = useCallback(() => {
    setBannerOpen(true);
  }, []);

  return (
    <CookieConsentContext.Provider value={{ consent, bannerOpen, accept, reject, reopen }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export const useCookieConsent = () => useContext(CookieConsentContext);
