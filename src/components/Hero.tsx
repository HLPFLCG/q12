"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Radial gradient from top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse-accent" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse-accent" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(99,102,241,0.03)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(99,102,241,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-zinc-300">Premium Creative Agency</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in animate-fade-in-delay-1 mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
            We Create Content
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black gradient-text leading-[0.9] tracking-tight mt-2">
            That Converts
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in animate-fade-in-delay-2 text-xl sm:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          UGC content creation, social media management, and marketing strategies
          that drive real results for ambitious brands.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Link href="#contact" className="btn-primary text-lg group">
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="#work" className="btn-secondary text-lg group">
            <Play className="w-5 h-5 fill-current" />
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-in animate-fade-in-delay-4">
          <div className="inline-flex flex-wrap justify-center gap-8 sm:gap-16 py-8 px-8 sm:px-12 rounded-2xl glass">
            {[
              { value: "50M+", label: "Views Generated" },
              { value: "200+", label: "Projects Delivered" },
              { value: "95%", label: "Client Retention" },
              { value: "3x", label: "Avg. ROI" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-fade-in-delay-5">
        <div className="flex flex-col items-center gap-2 text-zinc-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-zinc-800 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-indigo-500 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
