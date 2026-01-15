"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
        {/* Subtle gradient orbs - static blur for performance */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse-accent" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse-accent" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <div className="animate-fade-in mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl mb-6">
            <span className="text-4xl font-black text-white">Q</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in animate-fade-in-delay-1">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-4">
            Q12 AGENCY
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in animate-fade-in-delay-2 text-xl sm:text-2xl md:text-3xl text-indigo-400 font-light max-w-3xl mx-auto mb-4 tracking-wide">
          Content That Converts. Results That Matter.
        </p>

        {/* Description */}
        <p className="animate-fade-in animate-fade-in-delay-3 text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium creative agency specializing in UGC content creation, social media management,
          and marketing strategies that drive real results for ambitious brands.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="#contact" className="btn-primary group">
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="#work" className="btn-secondary group">
            <Play className="w-5 h-5" />
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-in animate-fade-in-delay-5 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-zinc-800">
          {[
            { value: "50M+", label: "Total Views" },
            { value: "200+", label: "Projects" },
            { value: "95%", label: "Client Retention" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-zinc-700 flex justify-center pt-2">
            <div className="w-1 h-2 bg-zinc-600 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
