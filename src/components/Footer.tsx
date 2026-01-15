"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const links = {
  services: ["UGC Content", "Social Media", "Content Strategy", "Paid Media"],
  company: ["About", "Work", "Testimonials", "Contact"],
};

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/q12_agency/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/johnnysaffra" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* CTA Section */}
      <div className="section">
        <div className="container">
          <div className="card max-w-2xl mx-auto p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to <span className="gradient-text">Elevate</span> Your Brand?
            </h3>
            <p className="text-gray-400 mb-6">
              Let&apos;s create content that converts.
            </p>
            <Link href="#contact" className="btn btn-primary">
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="border-t border-gray-800">
        <div className="container py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image src="/icon.svg" alt="Q12" width={28} height={28} />
                <span className="text-lg font-bold text-white">
                  Q12<span className="text-indigo-400">.</span>
                </span>
              </Link>
              <p className="text-sm text-gray-500 max-w-xs mb-4">
                Premium creative agency specializing in UGC content and social
                media marketing.
              </p>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <s.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {links.services.map((link) => (
                  <li key={link}>
                    <Link
                      href="#services"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Q12 Agency. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gray-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gray-400 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
