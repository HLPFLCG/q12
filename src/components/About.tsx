"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className={`label mb-4 ${inView ? "animate-in" : "opacity-0"}`}>
              About
            </span>
            <h2 className={`mt-4 mb-6 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
              Building brands that stand out
            </h2>
            <div className={`space-y-4 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
              <p className="leading-relaxed">
                Q12 is a creative agency founded by Johnny Saffra, specializing in
                UGC content creation and social media marketing for ambitious brands.
              </p>
              <p className="leading-relaxed">
                We help brands tell authentic stories that resonate with their
                audience and drive measurable growth through strategic content.
              </p>
            </div>
            <div className={`mt-8 ${inView ? "animate-in delay-3" : "opacity-0"}`}>
              <Link href="#contact" className="btn btn-secondary">
                Get in touch
              </Link>
            </div>
          </div>

          {/* Founder Card */}
          <div className={`${inView ? "animate-in delay-3" : "opacity-0"}`}>
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center">
                  <span className="text-xl font-semibold text-white">JS</span>
                </div>
                <div>
                  <h3 className="text-white">Johnny Saffra</h3>
                  <p className="text-sm">Founder & Creative Director</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                With years of experience in social media marketing, Johnny has helped
                brands achieve over 50M+ views and build engaged communities.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com/johnnysaffra"
                  target="_blank"
                  className="text-sm text-[#888] hover:text-white transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="https://linkedin.com/in/johnnysaffra"
                  target="_blank"
                  className="text-sm text-[#888] hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
