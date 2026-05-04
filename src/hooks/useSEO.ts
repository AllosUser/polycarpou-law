import { useEffect } from "react";

const DEFAULT_TITLE = "Andreas Polycarpou & Co LLC — Premier Legal Services in Cyprus";
const SITE_URL = "https://polycarpoulaw.cy";

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, unknown>;
}

function upsertMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [k, v] = attr.split("=");
    el.setAttribute(k, v);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function useSEO({ title, description, canonical, schema }: SEOConfig) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    upsertMeta('meta[name="description"]', "name=description", description);
    upsertMeta('meta[property="og:title"]', "property=og:title", title);
    upsertMeta('meta[property="og:description"]', "property=og:description", description);

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = `${SITE_URL}${canonical}`;
    }

    let schemaEl = document.getElementById("page-schema") as HTMLScriptElement | null;
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = "page-schema";
        schemaEl.type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema);
    }

    return () => {
      document.title = prevTitle || DEFAULT_TITLE;
      document.getElementById("page-schema")?.remove();
      if (canonical) document.querySelector('link[rel="canonical"]')?.remove();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);
}
