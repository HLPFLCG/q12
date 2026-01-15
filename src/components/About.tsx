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
    description: "Every piece of content is crafted with measurable outcomes in mind.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, not just another vendor.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in everything we create and deliver.",
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
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <p
            className={`text-lg text-zinc-400 ${
              inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
            }`}
          >
            Q12 Agency was founded with a simple mission: to help brands cut through the noise
            and connect with their audiences in meaningful ways.
          </p>
        </div>

        {/* Founder Card - Centered */}
        <div
          className={`max-w-2xl mx-auto mb-16 ${
            inView ? "animate-fade-in animate-fade-in-delay-3" : "opacity-0"
          }`}
        >
          <div className="glass rounded-2xl p-8 text-center">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center text-3xl font-bold text-white">
                JS
              </div>
            </div>

            {/* Name & Title */}
            <h3 className="text-2xl font-bold text-white mb-1">Johnny Saffra</h3>
            <p className="text-indigo-400 mb-4">Founder & Creative Director</p>

            {/* Bio */}
            <p className="text-zinc-400 mb-6 max-w-lg mx-auto leading-relaxed">
              With a background in social media marketing and content creation, Johnny leads Q12 Agency
              with a focus on authentic storytelling and data-driven strategies that deliver real results.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <Link
                href="https://www.instagram.com/johnnysaffra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/johnnysaffra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/johnny_ugc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-500/20 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
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
