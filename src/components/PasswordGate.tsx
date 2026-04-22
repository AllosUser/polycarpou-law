import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';

const CORRECT_PASSWORD = 'JOSEPHIN';
const STORAGE_KEY = 'polycarpou_access_granted';

interface PasswordGateProps {
  children: React.ReactNode;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ children }) => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const granted = sessionStorage.getItem(STORAGE_KEY);
    if (granted === 'true') {
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (password.toUpperCase() === CORRECT_PASSWORD) {
      setError(false);
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setHasAccess(true);
    } else {
      setError(true);
      // Reset error shake after animation
      setTimeout(() => setError(false), 500);
    }
  };

  if (hasAccess === null) return null;

  return (
    <>
      <div className={hasAccess ? "contents" : "hidden h-0 overflow-hidden"}>
        {children}
      </div>

      <AnimatePresence>
        {!hasAccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          >
            {/* Blurred Background Overlay */}
            <div className="absolute inset-0 bg-black/40 md:bg-navy/40 backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

            {/* Content Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                x: error ? [0, -10, 10, -10, 10, 0] : 0
              }}
              exit={{ opacity: 0, scale: 1.1, y: -40, filter: 'blur(10px)' }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1],
                x: { duration: 0.4 } 
              }}
              className="relative w-full max-w-[440px] p-8 md:p-12 mx-4"
            >
              {/* Premium Card Backdrop */}
              <div className="absolute inset-0 bg-[#0A0C10]/95 border border-white/10 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm" />
              
              <div className="relative flex flex-col items-center text-center">
                {/* Branding Icon */}
                <div className="mb-8 p-4 rounded-full bg-gold/10 border border-gold/20">
                  <Lock className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </div>

                <h1 className="heading-serif text-3xl md:text-4xl font-medium text-white mb-3 tracking-tight">
                  Website Under <span className="text-gold">Construction</span>
                </h1>
                
                <p className="text-slate-400 text-base md:text-lg mb-10 font-light tracking-wide">
                  Private preview. Please enter password to view progress.
                </p>

                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  <div className="relative group">
                    <input
                      autoFocus
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Access Key"
                      className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} group-hover:border-gold/30 focus:border-gold/50 rounded-lg px-5 py-4 text-white text-lg transition-all outline-none placeholder:text-slate-600 tracking-[0.2em] font-medium`}
                    />
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-7 left-0 flex items-center gap-1.5 text-red-500 text-sm font-medium"
                      >
                        <AlertCircle size={14} />
                        <span>Incorrect Access Key</span>
                      </motion.div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full relative group overflow-hidden bg-gold hover:bg-gold-light text-black font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    <span className="relative z-10 text-sm uppercase tracking-[0.2em]">View Progress</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>

                <div className="mt-12 text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
                  &copy; 2026 Andreas Polycarpou & Co LLC
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
