import { useI18n, Lang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {(["en", "el"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-500 ${
            lang === l
              ? "text-gold"
              : "text-muted-foreground/40 hover:text-foreground"
          }`}
          aria-label={l === "en" ? "Switch to English" : "Αλλαγή σε Ελληνικά"}
          aria-pressed={lang === l}
        >
          {l === "en" ? "EN" : "ΕΛ"}
        </button>
      ))}
    </div>
  );
}
