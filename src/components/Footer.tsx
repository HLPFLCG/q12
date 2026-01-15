"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Q12<span className="text-[#6366f1]">.</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://instagram.com/q12_agency"
              target="_blank"
              className="text-sm text-[#555] hover:text-white transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://linkedin.com/in/johnnysaffra"
              target="_blank"
              className="text-sm text-[#555] hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-[#555]">
            &copy; {new Date().getFullYear()} Q12 Agency
          </div>
        </div>
      </div>
    </footer>
  );
}
