import { useState, useRef, useLayoutEffect } from "react";
import * as LucideIcons from "lucide-react";
import { PracticeArea } from "@/lib/practiceAreas";
import { useI18n } from "@/lib/i18n";
import { ChevronDown, ChevronUp } from "lucide-react";

export function PracticeAreaCard({ area, index }: { area: PracticeArea; index: number }) {
  const { lang } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  const title = area.title[lang];
  const desc = area.desc[lang];
  
  // @ts-expect-error dynamic map
  const IconComponent = LucideIcons[area.icon] || LucideIcons.Scale;
  
  const paddedIndex = String(index + 1).padStart(2, "0");
  const btnReadMore = lang === "el" ? "ΠΕΡΙΣΣΟΤΕΡΑ" : "READ MORE";
  const btnShowLess = lang === "el" ? "ΛΙΓΟΤΕΡΑ" : "SHOW LESS";

  useLayoutEffect(() => {
    const checkTruncation = () => {
      const el = textRef.current;
      if (!el) return;
      
      const wasExpanded = expanded;
      if (wasExpanded) {
        el.classList.add("line-clamp-4", "md:line-clamp-5");
      }
      
      const isCurrentlyTruncated = el.scrollHeight > el.clientHeight;
      setIsTruncated(isCurrentlyTruncated);
      
      if (wasExpanded) {
        el.classList.remove("line-clamp-4", "md:line-clamp-5");
      }
    };
    
    const timer = setTimeout(checkTruncation, 10);
    window.addEventListener("resize", checkTruncation);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkTruncation);
    };
  }, [expanded, desc, lang]);

  return (
    <article 
      id={area.id} 
      className={`practice-area-card scroll-mt-[110px] md:scroll-mt-[140px] group bg-card rounded-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-gold/50 flex flex-col p-5 ${expanded ? "self-start h-auto" : "h-full"}`}
    >
      {/* Header Area */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center shrink-0">
            <IconComponent size={20} className="text-gold" strokeWidth={1.5} />
          </div>
          <div className="min-w-0">
            <h3 className="heading-serif text-[1.15rem] leading-snug font-medium text-navy">
              {title}
            </h3>
            <div className="mt-2 h-px w-9 bg-gold" />
          </div>
        </div>
        <span className="text-sm font-semibold tracking-wider text-gold/60 shrink-0">
          {paddedIndex}
        </span>
      </div>

      {/* Description Area */}
      <div className="mt-2 w-full text-left">
        <p
          id={`desc-${area.id}`}
          ref={textRef}
          className={`text-sm leading-relaxed text-muted-foreground ${
            expanded ? "" : "line-clamp-4 md:line-clamp-5"
          }`}
        >
          {desc}
        </p>
      </div>

      {/* Action Area */}
      {isTruncated && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-[11px] font-bold tracking-widest text-navy uppercase flex items-center gap-1.5 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1 rounded-sm py-1 self-start"
          aria-expanded={expanded}
          aria-controls={`desc-${area.id}`}
        >
          {expanded ? (
            <>
              {btnShowLess} <ChevronUp size={14} />
            </>
          ) : (
            <>
              {btnReadMore} <ChevronDown size={14} />
            </>
          )}
        </button>
      )}
    </article>
  );
}
