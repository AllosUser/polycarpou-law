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

export function useSEO({ title, description, canonical, schema, ogImage, robots }: SEOConfig) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const canonicalUrl = canonical !== undefined ? `${SITE_URL}${canonical}` : SITE_URL;
    const imageUrl = ogImage ?? DEFAULT_OG_IMAGE;

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
    upsertMeta('meta[property="og:image:alt"]', "property=og:image:alt", "Andreas Polycarpou & Co LLC - Advocates & Legal Consultants");
    upsertMeta('meta[property="og:image:secure_url"]', "property=og:image:secure_url", imageUrl);
    upsertMeta('meta[property="og:image:type"]', "property=og:image:type", "image/jpeg");
    upsertMeta('meta[property="og:type"]', "property=og:type", "website");
    upsertMeta('meta[property="og:site_name"]', "property=og:site_name", "Andreas Polycarpou & Co LLC");

    // ── Twitter / X Card ──────────────────────────────────
    upsertMeta('meta[name="twitter:card"]', "name=twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name=twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name=twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name=twitter:image", imageUrl);

    // ── Canonical ─────────────────────────────────────────
    if (canonical !== undefined) {
      let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!el) {
        el = document.createElement("link");
        el.rel = "canonical";
        document.head.appendChild(el);
      }
      el.href = canonicalUrl;
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
      // Single schema that already carries @context → serialize as-is (backward compat).
      // Otherwise wrap in @graph so multiple schemas share one @context.
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
      if (canonical !== undefined) {
        document.querySelector('link[rel="canonical"]')?.remove();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonical]);
}
