"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="animate-in mb-8">
            <span className="label">Available for Projects</span>
          </div>

          {/* Headline */}
          <h1 className="animate-in delay-1 mb-6">
            We create content
            <br />
            <span className="gradient-text">that converts.</span>
          </h1>

          {/* Description */}
          <p className="animate-in delay-2 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            UGC content and social media strategies that drive real results for
            ambitious brands.
          </p>

          {/* CTAs */}
          <div className="animate-in delay-3 flex flex-wrap gap-4">
            <Link href="#contact" className="btn btn-primary">
              Start a project
              <ArrowRight size={16} />
            </Link>
            <Link href="#work" className="btn btn-secondary">
              View work
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-in delay-4 flex gap-12 mt-20 pt-10 border-t border-[#1a1a1a]">
            <div>
              <div className="text-3xl font-semibold text-white">50M+</div>
              <div className="text-sm text-[#555]">Total views</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">200+</div>
              <div className="text-sm text-[#555]">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">95%</div>
              <div className="text-sm text-[#555]">Client retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
