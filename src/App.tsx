import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./lib/i18n";
import { CookieConsentProvider } from "./lib/cookieConsent";
import { PageTransition } from "./components/PageTransition";
import { Layout } from "./components/Layout";
import { PasswordGate } from "./components/PasswordGate";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import OurPeopleMember from "./pages/OurPeopleMember";
import Contact from "./pages/Contact";
import CorporateLawCyprus from "./pages/CorporateLawCyprus";
import RealEstateLawyerCyprus from "./pages/RealEstateLawyerCyprus";
import ImmigrationLawyerCyprus from "./pages/ImmigrationLawyerCyprus";
import LitigationLawyerCyprus from "./pages/LitigationLawyerCyprus";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <CookieConsentProvider>
        <TooltipProvider>
          <PasswordGate>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <PageTransition />
              <Layout>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/our-people/:slug" element={<OurPeopleMember />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/corporate-law-cyprus" element={<CorporateLawCyprus />} />
                  <Route path="/real-estate-lawyer-cyprus" element={<RealEstateLawyerCyprus />} />
                  <Route path="/immigration-lawyer-cyprus" element={<ImmigrationLawyerCyprus />} />
                  <Route path="/litigation-lawyer-cyprus" element={<LitigationLawyerCyprus />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </PasswordGate>
        </TooltipProvider>
      </CookieConsentProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;
