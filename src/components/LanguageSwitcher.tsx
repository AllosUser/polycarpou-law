import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher({
  className = "",
  solid = false,
}: {
  className?: string;
  solid?: boolean;
}) {
  const { lang, setLang } = useI18n();

  const activeClass = "text-gold";

  const inactiveStyle = solid
    ? { color: "#6B7A8D" }
    : { color: "#BFC5CF" };

  const inactiveHoverClass = solid ? "hover:text-foreground/80" : "hover:text-white/90";

  const pillStyle = solid
    ? { border: "1px solid rgba(15,23,42,0.18)" }
    : { border: "1px solid rgba(255,255,255,0.25)" };

  const slashStyle = solid
    ? { color: "rgba(15,23,42,0.35)" }
    : { color: "rgba(255,255,255,0.35)" };

  const btnBase =
    "text-[11.5px] font-semibold tracking-[0.11em] uppercase transition-colors duration-200 leading-none";

  return (
    <div className={`flex items-center ${className}`} role="group" aria-label="Language switcher">
      <div
        className="inline-flex items-center rounded-full h-8 overflow-hidden flex-shrink-0"
        style={pillStyle}
      >
        <button
          onClick={() => setLang("en")}
          className={`${btnBase} pl-2.5 pr-1 ${lang === "en" ? activeClass : inactiveHoverClass}`}
          style={lang === "en" ? undefined : inactiveStyle}
          aria-label="Switch to English"
          aria-pressed={lang === "en"}
        >
          EN
        </button>

        <span
          className="text-[10px] leading-none select-none"
          style={slashStyle}
          aria-hidden="true"
        >
          /
        </span>

        <button
          onClick={() => setLang("el")}
          className={`${btnBase} pl-1 pr-2.5 ${lang === "el" ? activeClass : inactiveHoverClass}`}
          style={lang === "el" ? undefined : inactiveStyle}
          aria-label="Αλλαγή σε Ελληνικά"
          aria-pressed={lang === "el"}
        >
          ΕΛ
        </button>
      </div>
    </div>
  );
}
