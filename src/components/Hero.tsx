"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "50M+", label: "Views" },
  { value: "200+", label: "Projects" },
  { value: "95%", label: "Retention" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15)_0%,_transparent_60%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center py-20">
        {/* Badge */}
        <div className="animate-in mb-6">
          <span className="badge">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for Q1 2026 Projects
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-in delay-1 text-white mb-6">
          We Create Content
          <br />
          <span className="gradient-text">That Converts</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-in delay-2 text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10">
          UGC content, social media management, and marketing strategies
          that drive real results for ambitious brands.
        </p>

        {/* CTAs */}
        <div className="animate-in delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="#contact" className="btn btn-primary">
            Start Your Project
            <ArrowRight size={18} />
          </Link>
          <Link href="#work" className="btn btn-secondary">
            <Play size={18} className="fill-current" />
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-in delay-4 flex items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in delay-5">
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center pt-2">
          <div className="w-1 h-2 bg-indigo-500 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
