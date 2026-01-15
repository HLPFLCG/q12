"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
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

const budgetRanges = [
  "$5k - $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+",
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  // Input sanitization
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, "") // Remove potential HTML tags
      .trim()
      .slice(0, 1000); // Limit length
  };

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

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

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    // Simulate API call (replace with actual endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: sanitizeInput(value),
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Create
            <br />
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ready to elevate your brand? We&apos;d love to hear about your project
            and discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-white/60 mb-8">
                Fill out the form or reach out directly. We typically respond
                within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="mailto:hello@q12agency.com"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="font-medium">hello@q12agency.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/70">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/70">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Location</p>
                  <p className="font-medium">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 mb-4">Follow us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/q12_agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-indigo-500/20 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/johnnysaffra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-indigo-500/20 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/johnny_ugc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-indigo-500/20 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400">
                    Thank you! We&apos;ll be in touch soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400">
                    Something went wrong. Please try again.
                  </p>
                </motion.div>
              )}

              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Company & Budget */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="Company Inc."
                  />
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-white/70 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formState.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      Select budget
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-black">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.message ? "border-red-500" : "border-white/10"
                  } text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

              {/* Privacy Note */}
              <p className="text-xs text-white/40 text-center">
                By submitting this form, you agree to our privacy policy.
                We&apos;ll never share your information with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
