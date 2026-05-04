import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
}
