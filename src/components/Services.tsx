"use client";

import { useInView } from "react-intersection-observer";
import { Video, Users, Megaphone, Palette, TrendingUp, BarChart3 } from "lucide-react";

const services = [
  { icon: Video, title: "UGC Content", desc: "Authentic content that builds trust and drives conversions." },
  { icon: Users, title: "Social Media", desc: "Full-service management that grows your audience." },
  { icon: Megaphone, title: "Content Strategy", desc: "Data-driven strategies that resonate with your audience." },
  { icon: Palette, title: "Creative Direction", desc: "Visual storytelling that elevates your brand." },
  { icon: TrendingUp, title: "Paid Media", desc: "Performance campaigns that maximize your ROI." },
  { icon: BarChart3, title: "Analytics", desc: "Insights that inform strategy and demonstrate results." },
];

export function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section bg-black" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className={`tag mb-4 ${inView ? "animate-in" : "opacity-0"}`}>
            Services
          </span>
          <h2 className={`text-white mb-4 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className={`text-gray-400 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
            End-to-end creative solutions for modern brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card group ${inView ? "animate-in" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 3) * 0.1}s` }}
            >
              <div className="icon-box mb-4 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
