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
import { submitForm, FORM_CONFIG } from "@/lib/form-config";

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
      const formData = {
        name: formState.name,
        email: formState.email,
        company: formState.company,
        budget: formState.budget,
        message: formState.message,
      };
      await submitForm(formData);
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
    <section id="contact" className="section bg-black" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className={`tag ${inView ? "animate-in" : "opacity-0"}`}>
            Get in Touch
          </span>
          <h2
            className={`text-white mt-4 mb-4 ${
              inView ? "animate-in delay-1" : "opacity-0"
            }`}
          >
            Let&apos;s Create <span className="gradient-text">Something Great</span>
          </h2>
          <p className={`text-gray-400 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
            Ready to elevate your brand? We&apos;d love to hear about your project.
          </p>
        </div>

        {/* Two Column Layout - Centered */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
                <p className="text-gray-400 text-sm">
                  Fill out the form or reach out directly. We respond within 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${FORM_CONFIG.contactEmail}`}
                  className="flex items-center gap-4 p-4 glass rounded-xl text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium text-white text-sm">{FORM_CONFIG.contactEmail}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-xl text-gray-400">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-medium text-white text-sm">{FORM_CONFIG.contactPhone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass rounded-xl text-gray-400">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium text-white text-sm">{FORM_CONFIG.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-4">Follow us</p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.instagram.com/q12_agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/johnnysaffra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${inView ? "animate-in delay-3" : "opacity-0"}`}>
              <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-400 text-sm">Thank you! We&apos;ll be in touch soon.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`input ${errors.name ? "border-red-500" : ""}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`input ${errors.email ? "border-red-500" : ""}`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="input"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formState.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      className="input appearance-none cursor-pointer"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`input resize-none ${errors.message ? "border-red-500" : ""}`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
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

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
