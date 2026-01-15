"use client";

import { useInView } from "react-intersection-observer";
import { Video, Users, BarChart3, Megaphone, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "UGC Content",
    description: "Authentic, scroll-stopping user-generated content that builds trust and drives conversions.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Full-service social media management that grows your audience and builds engagement.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description: "Data-driven strategies that align with your brand goals and resonate with your audience.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Cohesive visual storytelling that elevates your brand identity and creates impact.",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Paid Media",
    description: "Performance-driven ad campaigns that maximize ROI and reach your ideal customers.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Deep-dive analytics and actionable insights that inform strategy and demonstrate ROI.",
    gradient: "from-teal-500 to-cyan-500",
  },
];

export function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative section-padding bg-[#0a0a0a]">
      <div ref={ref} className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4 ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            What We Do
          </span>
          <h2
            className={`text-white mb-6 ${
              inView ? "animate-fade-in animate-fade-in-delay-1" : "opacity-0"
            }`}
          >
            Services Built for{" "}
            <span className="gradient-text">Modern Brands</span>
          </h2>
          <p
            className={`text-lg text-zinc-400 ${
              inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
            }`}
          >
            End-to-end creative solutions designed to help your brand stand out,
            connect with audiences, and achieve measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group glass rounded-2xl p-8 hover-lift ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * (index + 3)}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
