"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Twitter, Award, Users, Zap, Target } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing creative boundaries with cutting-edge strategies and fresh perspectives.",
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Q12 Agency was founded with a simple mission: to help brands cut through the noise
              and connect with their audiences in meaningful ways. We combine creative excellence
              with data-driven strategies to deliver content that not only looks amazing but
              drives real business results.
            </p>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Led by Johnny Saffra, our team brings together diverse expertise in UGC creation,
              social media management, and brand strategy. We&apos;ve helped brands of all sizes
              achieve viral growth, build loyal communities, and maximize their ROI.
            </p>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 flex items-center gap-6"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-2xl font-bold text-white">
                    JS
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Johnny Saffra</h3>
                <p className="text-white/60 mb-2">Founder & Creative Director</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/johnnysaffra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johnnysaffra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/johnny_ugc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Brand Logos Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <p className="text-center text-sm text-white/40 uppercase tracking-wider mb-8">
            Trusted by innovative brands
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-16 px-8">
                  {["BRAND", "COMPANY", "STARTUP", "AGENCY", "STUDIO", "CREATIVE"].map((brand, i) => (
                    <div
                      key={`${setIndex}-${i}`}
                      className="text-2xl font-bold text-white/20 whitespace-nowrap"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
