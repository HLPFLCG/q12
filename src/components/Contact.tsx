"use client";

import { useState, FormEvent } from "react";
import { useInView } from "react-intersection-observer";
import { Send, Loader2 } from "lucide-react";
import { submitForm, FORM_CONFIG } from "@/lib/form-config";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      await submitForm({ name: form.name, email: form.email, message: form.message });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className={`label mb-4 ${inView ? "animate-in" : "opacity-0"}`}>
              Contact
            </span>
            <h2 className={`mt-4 mb-6 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
              Let&apos;s work together
            </h2>
            <p className={`leading-relaxed mb-8 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
              Ready to elevate your brand? Get in touch and let&apos;s discuss your project.
            </p>

            <div className={`space-y-4 ${inView ? "animate-in delay-3" : "opacity-0"}`}>
              <div>
                <div className="text-sm text-[#555] mb-1">Email</div>
                <a
                  href={`mailto:${FORM_CONFIG.contactEmail}`}
                  className="text-white hover:text-[#6366f1] transition-colors"
                >
                  {FORM_CONFIG.contactEmail}
                </a>
              </div>
              <div>
                <div className="text-sm text-[#555] mb-1">Location</div>
                <div className="text-white">{FORM_CONFIG.location}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`${inView ? "animate-in delay-3" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "success" && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  Thanks! We&apos;ll be in touch soon.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <div>
                <label className="block text-sm text-[#888] mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#888] mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-[#888] mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input resize-none"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary w-full disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
