"use client";

import { useState, FormEvent } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const budgetRanges = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>]/g, "").trim().slice(0, 1000);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormState({ name: "", email: "", company: "", budget: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: sanitizeInput(value) }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="relative section-padding bg-black">
      <div ref={ref} className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4 ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Get in Touch
          </span>
          <h2
            className={`text-white mb-6 ${
              inView ? "animate-fade-in animate-fade-in-delay-1" : "opacity-0"
            }`}
          >
            Let&apos;s Create <span className="gradient-text">Something Great</span>
          </h2>
          <p
            className={`text-lg text-zinc-400 ${
              inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
            }`}
          >
            Ready to elevate your brand? We&apos;d love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-8 ${
              inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-zinc-400">
                Fill out the form or reach out directly. We respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@q12agency.com"
                className="flex items-center gap-4 p-4 glass rounded-xl text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="font-medium text-white">hello@q12agency.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-xl text-zinc-400">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="font-medium text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-xl text-zinc-400">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="font-medium text-white">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-zinc-800">
              <p className="text-sm text-zinc-500 mb-4">Follow us</p>
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/q12_agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/johnnysaffra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`${inView ? "animate-fade-in animate-fade-in-delay-3" : "opacity-0"}`}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">Thank you! We&apos;ll be in touch soon.</p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400">Something went wrong. Please try again.</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`input-field ${errors.name ? "border-red-500" : ""}`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`input-field ${errors.email ? "border-red-500" : ""}`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="input-field"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-zinc-400 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formState.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className="input-field appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#111]">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#111]">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`input-field resize-none ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-zinc-500 text-center">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
