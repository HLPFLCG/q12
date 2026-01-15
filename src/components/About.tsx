"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Instagram, Linkedin, Award, Users, Zap, Target } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing creative boundaries with cutting-edge strategies.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every piece of content crafted for measurable outcomes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "An extension of your team, not just another vendor.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in everything we deliver.",
  },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative section-padding bg-[#0a0a0a]">
      <div ref={ref} className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4 ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            About Us
          </span>
          <h2
            className={`text-white mb-6 ${
              inView ? "animate-fade-in animate-fade-in-delay-1" : "opacity-0"
            }`}
          >
            Meet the <span className="gradient-text">Creative Force</span>
          </h2>
          <p
            className={`text-lg text-zinc-400 ${
              inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
            }`}
          >
            Q12 Agency was built to help brands cut through the noise and connect
            with their audiences in meaningful ways.
          </p>
        </div>

        {/* Founder Card */}
        <div
          className={`max-w-3xl mx-auto mb-20 ${
            inView ? "animate-fade-in animate-fade-in-delay-3" : "opacity-0"
          }`}
        >
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px]">
                  <div className="w-full h-full rounded-2xl bg-[#111] flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">JS</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">Johnny Saffra</h3>
                <p className="text-indigo-400 font-medium mb-4">Founder & Creative Director</p>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  With deep expertise in social media marketing and UGC content creation,
                  Johnny founded Q12 Agency to help ambitious brands tell authentic stories
                  and achieve measurable growth through strategic, data-driven content.
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-3">
                  <Link
                    href="https://www.instagram.com/johnnysaffra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/johnnysaffra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/johnny_ugc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                    aria-label="UGC Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/q12_agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                    aria-label="Q12 Agency Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`glass rounded-2xl p-6 text-center hover-lift ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * (index + 4)}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-zinc-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
