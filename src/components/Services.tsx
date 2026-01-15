"use client";

import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "UGC Content",
    description: "Authentic creator content that builds trust and drives conversions.",
  },
  {
    title: "Social Media",
    description: "Full-service management that grows your audience organically.",
  },
  {
    title: "Content Strategy",
    description: "Data-driven strategies that resonate with your target audience.",
  },
  {
    title: "Creative Direction",
    description: "Visual storytelling that elevates and differentiates your brand.",
  },
  {
    title: "Paid Media",
    description: "Performance campaigns optimized to maximize your ROI.",
  },
  {
    title: "Analytics",
    description: "Insights and reporting that inform strategy and show results.",
  },
];

export function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className={`label mb-4 ${inView ? "animate-in" : "opacity-0"}`}>
            Services
          </span>
          <h2 className={`mt-4 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
            What we do
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card p-8 ${inView ? "animate-in" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 2) * 0.1}s` }}
            >
              <h3 className="text-white mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
