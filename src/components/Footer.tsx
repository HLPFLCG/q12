"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = {
  services: [
    { name: "UGC Content", href: "#services" },
    { name: "Social Media", href: "#services" },
    { name: "Content Strategy", href: "#services" },
    { name: "Paid Media", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/q12_agency/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/johnnysaffra",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://www.instagram.com/johnny_ugc/",
    icon: Twitter,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <br />
              <span className="gradient-text">Your Brand?</span>
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
              Let&apos;s create content that captivates your audience and drives
              real results. Get started today.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold text-white">
                Q12<span className="gradient-text">Agency</span>
              </span>
            </Link>
            <p className="text-white/50 mb-6 max-w-xs leading-relaxed">
              Premium creative agency specializing in UGC, social media, and
              content creation that drives results.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-indigo-500/20 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {currentYear} Q12 Agency. All rights reserved.
          </p>
          <p className="text-sm text-white/40 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in
            New York
          </p>
        </div>
      </div>
    </footer>
  );
}
