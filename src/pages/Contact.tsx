import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GoldDivider } from "@/components/GoldDivider";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { t } = useI18n();

  function validate(data: FormState): FormErrors {
    const errors: FormErrors = {};
    if (!data.name.trim() || data.name.trim().length < 2) errors.name = t("contact.form.error.name");
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = t("contact.form.error.email");
    if (!data.message.trim() || data.message.trim().length < 10) errors.message = t("contact.form.error.message");
    return errors;
  }

  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="pt-36 pb-20 section-sm" style={{ background: "var(--gradient-navy)" }} aria-label="Page header">
        <div className="container-law text-center">
          <Reveal>
            <p className="eyebrow mb-4">{t("contact.eyebrow")}</p>
            <h1 className="heading-serif font-light mb-4" style={{ color: "hsl(40 27% 97%)" }}>{t("contact.title")}</h1>
            <p className="text-base max-w-xl mx-auto mt-4" style={{ color: "hsl(0 0% 65%)", fontFamily: "var(--font-sans)" }}>{t("contact.desc")}</p>
            <GoldDivider className="mx-auto mt-8" width="60px" />
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────── */}
      <section className="section bg-background" aria-label="Contact information and form">
        <div className="container-law">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact details */}
            <Reveal direction="left" className="lg:col-span-2">
              <div>
                <p className="eyebrow mb-3">{t("contact.office")}</p>
                <h2 className="heading-serif text-3xl font-medium mb-6 text-foreground">{t("contact.firmName")}</h2>
                <GoldDivider className="mb-8" width="60px" />

                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: t("contact.address.label"), content: t("contact.address.value") },
                    { icon: Phone, label: t("contact.phone.label"), content: "+357 22 123 456", href: "tel:+35722123456" },
                    { icon: Mail, label: t("contact.email.label"), content: "info@polycarpoulaw.cy", href: "mailto:info@polycarpoulaw.cy" },
                  ].map(({ icon: Icon, label, content, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0" style={{ background: "hsl(var(--accent-light))" }}>
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "hsl(var(--accent))", fontFamily: "var(--font-sans)" }}>{label}</p>
                        {href ? (
                          <a href={href} className="text-sm leading-relaxed text-foreground hover:text-gold transition-colors whitespace-pre-line" style={{ fontFamily: "var(--font-sans)" }}>{content}</a>
                        ) : (
                          <p className="text-sm leading-relaxed text-foreground whitespace-pre-line" style={{ fontFamily: "var(--font-sans)" }}>{content}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0" style={{ background: "hsl(var(--accent-light))" }}>
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "hsl(var(--accent))", fontFamily: "var(--font-sans)" }}>{t("contact.hours.label")}</p>
                      {[
                        [t("contact.hours.mf"), "09:00 – 18:00"],
                        [t("contact.hours.sat"), "10:00 – 14:00"],
                        [t("contact.hours.sun"), t("contact.hours.closed")],
                      ].map(([day, hours]) => (
                        <div key={day} className="flex justify-between gap-6 mb-1">
                          <span className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-sans)" }}>{day}</span>
                          <span className="text-sm font-medium text-foreground" style={{ fontFamily: "var(--font-sans)" }}>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-sm overflow-hidden relative h-44" style={{ border: "1px solid hsl(var(--border))" }} aria-label="Office location map placeholder">
                  <div className="absolute inset-0" style={{ background: "var(--gradient-navy)" }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <MapPin size={28} className="text-gold" />
                    <div className="text-center">
                      <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "hsl(0 0% 60%)" }}>{t("contact.map.city")}</p>
                      <p className="text-xs mt-1" style={{ color: "hsl(0 0% 45%)" }}>{t("contact.map.address")}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--gradient-gold)" }} />
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal direction="right" delay={0.15} className="lg:col-span-3">
              <div className="rounded-sm p-8 md:p-10" style={{ border: "1px solid hsl(var(--border))", boxShadow: "var(--shadow-md)", background: "hsl(var(--card))" }}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12 gap-5">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--accent-light))" }}>
                        <CheckCircle size={30} className="text-gold" />
                      </div>
                      <h3 className="heading-serif text-2xl font-medium text-foreground">{t("contact.form.success.title")}</h3>
                      <GoldDivider width="48px" />
                      <p className="text-sm leading-relaxed max-w-sm">{t("contact.form.success.desc")}</p>
                      <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="btn-outline-gold mt-2">{t("contact.form.success.again")}</button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} noValidate aria-label="Contact form">
                      <h2 className="heading-serif text-2xl font-medium mb-2 text-foreground">{t("contact.form.title")}</h2>
                      <GoldDivider className="mb-6" width="48px" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-sans)" }}>
                            {t("contact.form.name")} <span className="text-gold">*</span>
                          </label>
                          <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} placeholder={t("contact.form.namePlaceholder")} className="form-input" aria-required="true" aria-describedby={errors.name ? "name-error" : undefined} aria-invalid={!!errors.name} />
                          {errors.name && <p id="name-error" className="flex items-center gap-1 text-xs mt-1.5" style={{ color: "hsl(var(--destructive))" }}><AlertCircle size={12} /> {errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-sans)" }}>
                            {t("contact.form.email")} <span className="text-gold">*</span>
                          </label>
                          <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder={t("contact.form.emailPlaceholder")} className="form-input" aria-required="true" aria-describedby={errors.email ? "email-error" : undefined} aria-invalid={!!errors.email} />
                          {errors.email && <p id="email-error" className="flex items-center gap-1 text-xs mt-1.5" style={{ color: "hsl(var(--destructive))" }}><AlertCircle size={12} /> {errors.email}</p>}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-sans)" }}>
                            {t("contact.form.phone")} <span className="text-muted-foreground font-normal">{t("contact.form.phoneOpt")}</span>
                          </label>
                          <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder={t("contact.form.phonePlaceholder")} className="form-input" />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-sans)" }}>
                            {t("contact.form.area")}
                          </label>
                          <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="form-input">
                            <option value="">{t("contact.form.areaPlaceholder")}</option>
                            <option value="corporate">{t("contact.form.optCorporate")}</option>
                            <option value="litigation">{t("contact.form.optLitigation")}</option>
                            <option value="real-estate">{t("contact.form.optRealEstate")}</option>
                            <option value="family">{t("contact.form.optFamily")}</option>
                            <option value="contract">{t("contact.form.optContract")}</option>
                            <option value="other">{t("contact.form.optOther")}</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-5">
                        <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-sans)" }}>
                          {t("contact.form.message")} <span className="text-gold">*</span>
                        </label>
                        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder={t("contact.form.messagePlaceholder")} className="form-input" aria-required="true" aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={!!errors.message} />
                        {errors.message && <p id="message-error" className="flex items-center gap-1 text-xs mt-1.5" style={{ color: "hsl(var(--destructive))" }}><AlertCircle size={12} /> {errors.message}</p>}
                      </div>

                      <p className="text-xs mb-5 leading-relaxed p-3 rounded-sm" style={{ background: "hsl(var(--accent-light))", color: "hsl(var(--foreground))", fontFamily: "var(--font-sans)", border: "1px solid hsl(var(--border-gold))" }}>
                        🔒 <strong>{t("contact.form.privacy")}</strong> {t("contact.form.privacyFull")}
                      </p>

                      <button type="submit" className="btn-primary w-full justify-center" disabled={loading} aria-disabled={loading}>
                        {loading ? (
                          <><span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" /> {t("contact.form.submitting")}</>
                        ) : (
                          <>{t("contact.form.submit")} <Send size={15} /></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
