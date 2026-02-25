import { useI18n, Lang } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {(["en", "el"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-1 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors ${
            lang === l
              ? "bg-gold/20 text-gold"
              : "text-muted-foreground hover:text-foreground"
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
