"use client";

import Link from "next/link";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";

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
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/q12_agency/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/johnnysaffra", icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-zinc-900">
      {/* CTA Section */}
      <div className="container-main py-16">
        <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to <span className="gradient-text">Elevate</span> Your Brand?
          </h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let&apos;s create content that connects, engages, and converts.
          </p>
          <Link href="#contact" className="btn-primary">
            Start Your Project
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12 border-t border-zinc-900">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold text-white">
                Q12<span className="text-indigo-400">Agency</span>
              </span>
            </Link>
            <p className="text-zinc-500 max-w-sm mb-6">
              Premium creative agency specializing in UGC content creation
              and social media marketing for ambitious brands.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-main py-6 border-t border-zinc-900">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p>&copy; {currentYear} Q12 Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
