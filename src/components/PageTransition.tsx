import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import apLogo from "@/assets/Logo/ap_notext_gold.svg";

const OVERLAY_DURATION_MS = 700;

/**
 * On route change: scroll to top and show logo flash animation
 * that transitions upward before revealing the new page.
 */
export function PageTransition() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);
  const [showOverlay, setShowOverlay] = useState(false);
  const isFirstMount = useRef(true);

  useEffect(() => {
    const isNavigation = prevPathRef.current !== pathname;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPathRef.current = pathname;
      if (hash && pathname !== "/services") {
        setTimeout(() => {
          const el = document.getElementById(hash.slice(1));
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }

    if (isNavigation) {
      prevPathRef.current = pathname;

      // Force scroll to top immediately on navigation
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

      if (!hash) {
        // Double check scroll is at 0
        window.scrollTo(0, 0);
      }

      setShowOverlay(true);

      const timer = setTimeout(() => {
        setShowOverlay(false);
        if (hash && pathname !== "/services") {
          const el = document.getElementById(hash.slice(1));
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, OVERLAY_DURATION_MS);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          key="page-transition-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop - matches page background */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "hsl(var(--background))" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />

          {/* Logo - flash in center, then animate up */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              y: -100,
              opacity: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <img
              src={apLogo}
              alt="Andreas Polycarpou & Co LLC"
              className="h-16 w-auto md:h-20 mb-6"
            />
            <div className="flex flex-col items-center text-center">
              <span className="text-[14px] md:text-[18px] font-semibold tracking-[0.14em] uppercase text-foreground leading-tight">
                ANDREAS POLYCARPOU &amp; CO LLC
              </span>
              <span className="text-[10px] md:text-[12px] font-light tracking-[0.06em] mt-1.5 text-muted-foreground">
                Advocates &amp; Legal Consultants
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
