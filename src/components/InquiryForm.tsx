"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { siteConfig, whatsappHref, hasRealWhatsApp } from "@/config/site";

type Values = {
  name: string;
  phone: string;
  email: string;
  residentType: string;
  moveIn: string;
  room: string;
  message: string;
};

const empty: Values = {
  name: "",
  phone: "",
  email: "",
  residentType: "",
  moveIn: "",
  room: "Not Sure",
  message: "",
};

/**
 * Optional: set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree or Web3Forms URL) in your hosting
 * environment to POST inquiries there instead of opening WhatsApp. The endpoint URL is public by
 * design — never put secret keys in client-side code.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

function validate(v: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your full name.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.phone = "Please enter a valid phone number.";
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) errors.email = "Please enter a valid email address.";
  if (!v.residentType) errors.residentType = "Please choose one.";
  return errors;
}

export default function InquiryForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((p) => ({ ...p, [k]: e.target.value }));

  const buildMessage = (v: Values) =>
    [
      `Hi, I would like to inquire about ${siteConfig.name}.`,
      "",
      `Name: ${v.name.trim()}`,
      `Phone: ${v.phone.trim()}`,
      v.email ? `Email: ${v.email.trim()}` : null,
      `Resident Type: ${v.residentType}`,
      `Move-In Date: ${v.moveIn || "Not specified"}`,
      `Room Preference: ${v.room}`,
      `Message: ${v.message.trim() || "-"}`,
    ]
      .filter((l) => l !== null)
      .join("\n");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        setValues(empty);
      } catch {
        setStatus("error");
      }
      return;
    }

    // Default: open WhatsApp with a pre-filled message (no backend needed).
    window.open(whatsappHref(buildMessage(values)), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-forest";
  const label = "block text-sm font-semibold text-forest";
  const err = "mt-1 text-sm text-red-700";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
      <div>
        <label htmlFor="f-name" className={label}>
          Full Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="f-name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={set("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "e-name" : undefined}
          className={field}
        />
        {errors.name && <p id="e-name" className={err}>{errors.name}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-phone" className={label}>
            Phone Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="f-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "e-phone" : undefined}
            className={field}
          />
          {errors.phone && <p id="e-phone" className={err}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="f-email" className={label}>
            Email Address
          </label>
          <input
            id="f-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "e-email" : undefined}
            className={field}
          />
          {errors.email && <p id="e-email" className={err}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-residentType" className={label}>
            I am a <span aria-hidden="true">*</span>
          </label>
          <select
            id="f-residentType"
            required
            value={values.residentType}
            onChange={set("residentType")}
            aria-invalid={!!errors.residentType}
            aria-describedby={errors.residentType ? "e-residentType" : undefined}
            className={field}
          >
            <option value="">Select…</option>
            <option value="Student">Student</option>
            <option value="Working Professional">Working Professional</option>
          </select>
          {errors.residentType && <p id="e-residentType" className={err}>{errors.residentType}</p>}
        </div>
        <div>
          <label htmlFor="f-moveIn" className={label}>
            Preferred Move-In Date
          </label>
          <input id="f-moveIn" type="date" value={values.moveIn} onChange={set("moveIn")} className={field} />
        </div>
      </div>

      <fieldset>
        <legend className={label}>Room Preference</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {["Double", "Triple", "Not Sure"].map((r) => (
            <label
              key={r}
              className={`flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[15px] transition ${
                values.room === r
                  ? "border-forest bg-forest text-white"
                  : "border-forest/20 bg-white text-ink hover:border-forest"
              }`}
            >
              <input
                type="radio"
                name="room"
                value={r}
                checked={values.room === r}
                onChange={set("room")}
                className="sr-only"
              />
              {r}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="f-message" className={label}>
          Message
        </label>
        <textarea
          id="f-message"
          rows={4}
          value={values.message}
          onChange={set("message")}
          className={field}
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        <Send size={18} aria-hidden="true" /> Send Inquiry
      </button>

      <div aria-live="polite" className="text-sm">
        {status === "sent" && (
          <p className="rounded-xl bg-sage px-4 py-3 text-forest">
            {FORM_ENDPOINT
              ? "Thank you! Your inquiry has been sent. We will get back to you soon."
              : "WhatsApp should now be open with your inquiry. Just press send to share it with us."}
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-red-800">
            Sorry, something went wrong. Please try again or contact us by phone or WhatsApp.
          </p>
        )}
        {!FORM_ENDPOINT && !hasRealWhatsApp && (
          // PLACEHOLDER notice: remove once a real WhatsApp number is set in src/config/site.ts.
          <p className="mt-2 text-muted">
            Note: the WhatsApp number is not set yet, so this form cannot reach the owner until it is.
          </p>
        )}
      </div>
    </form>
  );
}
