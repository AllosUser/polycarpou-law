import { useEffect } from "react";

export const SITE_URL = "https://andreaspolycarpou.com.cy";
const DEFAULT_TITLE = "Andreas Polycarpou & Co LLC — Strategic Legal Excellence in Cyprus";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  /** Single schema object or array; each may include or omit @context */
  schema?: Record<string, unknown> | Record<string, unknown>[];
  /** Overrides the default OG/Twitter card image */
  ogImage?: string;
  /** Alt text for the OG/Twitter card image */
  ogImageAlt?: string;
  /** OG type — defaults to "website" */
  ogType?: string;
  robots?: string;
}

function upsertMeta(selector: string, attr: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const eqIdx = attr.indexOf("=");
    el.setAttribute(attr.slice(0, eqIdx), attr.slice(eqIdx + 1));
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, canonical, schema, ogImage, ogImageAlt, ogType, robots }: SEOConfig) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const isEnglish = window.location.pathname.startsWith("/en");
    const langPrefix = isEnglish ? "/en" : "";
    const canonicalUrl = canonical !== undefined ? `${SITE_URL}${langPrefix}${canonical}` : SITE_URL;
    const imageUrl = ogImage ?? DEFAULT_OG_IMAGE;
    const imageAlt = ogImageAlt ?? "Andreas Polycarpou & Co LLC - Advocates & Legal Consultants";

    // ── Core ──────────────────────────────────────────────
    upsertMeta('meta[name="description"]', "name=description", description);
    upsertMeta('meta[name="robots"]', "name=robots", robots ?? "index, follow");

    // ── Open Graph ────────────────────────────────────────
    upsertMeta('meta[property="og:title"]', "property=og:title", title);
    upsertMeta('meta[property="og:description"]', "property=og:description", description);
    upsertMeta('meta[property="og:url"]', "property=og:url", canonicalUrl);
    upsertMeta('meta[property="og:image"]', "property=og:image", imageUrl);
    upsertMeta('meta[property="og:image:width"]', "property=og:image:width", "1200");
    upsertMeta('meta[property="og:image:height"]', "property=og:image:height", "630");
    upsertMeta('meta[property="og:image:alt"]', "property=og:image:alt", imageAlt);
    upsertMeta('meta[property="og:image:secure_url"]', "property=og:image:secure_url", imageUrl);
    upsertMeta('meta[property="og:image:type"]', "property=og:image:type", "image/jpeg");
    upsertMeta('meta[property="og:type"]', "property=og:type", ogType ?? "website");
    upsertMeta('meta[property="og:site_name"]', "property=og:site_name", "Andreas Polycarpou & Co LLC");

    // ── Twitter / X Card ──────────────────────────────────
    upsertMeta('meta[name="twitter:card"]', "name=twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name=twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name=twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name=twitter:image", imageUrl);

    // ── Canonical ─────────────────────────────────────────
    let canonicalEl: HTMLLinkElement | null = null;
    if (canonical !== undefined) {
      canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonicalUrl;
    }

    // ── Hreflang ──────────────────────────────────────────
    const addedHreflangs: HTMLLinkElement[] = [];
    if (canonical !== undefined) {
      const elUrl = canonical === "/" ? `${SITE_URL}/` : `${SITE_URL}${canonical}`;
      const enUrl = canonical === "/" ? `${SITE_URL}/en/` : `${SITE_URL}/en${canonical}`;
      for (const [hl, href] of [["el", elUrl], ["en", enUrl], ["x-default", elUrl]] as const) {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = hl;
        link.href = href;
        document.head.appendChild(link);
        addedHreflangs.push(link);
      }
    }

    // ── JSON-LD Schema ────────────────────────────────────
    let schemaEl = document.getElementById("page-schema") as HTMLScriptElement | null;
    if (schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = "page-schema";
        schemaEl.type = "application/ld+json";
        document.head.appendChild(schemaEl);
      }
      const schemas = Array.isArray(schema) ? schema : [schema];
      if (schemas.length === 1 && schemas[0]["@context"]) {
        schemaEl.textContent = JSON.stringify(schemas[0]);
      } else {
        schemaEl.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemas.map(({ "@context": _omit, ...rest }) => rest),
        });
      }
    }

    return () => {
      document.title = prevTitle || DEFAULT_TITLE;
      document.getElementById("page-schema")?.remove();
      canonicalEl?.remove();
      addedHreflangs.forEach((el) => el.remove());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonical]);
}
