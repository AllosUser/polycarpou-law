import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      if (hash) {
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
      if (!hash) window.scrollTo(0, 0);
      setShowOverlay(true);

      const timer = setTimeout(() => {
        setShowOverlay(false);
        if (hash) {
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
          key={`page-transition-${pathname}`}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
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
              src="/logo.png"
              alt="Polycarpou Law"
              className="h-16 w-auto md:h-20"
            />
            <span className="heading-serif mt-2 text-xl font-medium tracking-tight text-foreground md:text-2xl">
              Polycarpou <span className="text-gold">Law</span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
