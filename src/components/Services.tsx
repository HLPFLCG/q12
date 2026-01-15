"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Video,
  Users,
  BarChart3,
  Megaphone,
  Palette,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "UGC Content Creation",
    description: "Authentic, scroll-stopping user-generated content that builds trust and drives conversions. From unboxings to testimonials.",
    features: ["Product Videos", "Testimonials", "Lifestyle Content", "Hook Testing"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Full-service social media management that grows your audience and builds meaningful engagement across all platforms.",
    features: ["Content Strategy", "Community Management", "Analytics & Reporting", "Growth Optimization"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description: "Data-driven content strategies that align with your brand goals and resonate with your target audience.",
    features: ["Brand Positioning", "Content Calendars", "Trend Analysis", "Competitor Research"],
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Cohesive visual storytelling that elevates your brand identity and creates lasting impressions.",
    features: ["Brand Guidelines", "Visual Identity", "Photography", "Video Production"],
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Paid Media",
    description: "Performance-driven ad campaigns that maximize your ROI and reach your ideal customers at scale.",
    features: ["Meta Ads", "TikTok Ads", "Creative Testing", "Audience Optimization"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Deep-dive analytics and actionable insights that inform strategy and demonstrate clear ROI.",
    features: ["Performance Tracking", "Custom Dashboards", "Monthly Reports", "Growth Forecasting"],
    gradient: "from-teal-500 to-cyan-500",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Services Built for
            <br />
            <span className="gradient-text">Modern Brands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            End-to-end creative solutions designed to help your brand stand out,
            connect with audiences, and achieve measurable growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl glass card-hover cursor-pointer"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-10`} />
              </div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                <div className="w-full h-full rounded-xl bg-black/80 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="relative text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className="relative flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
