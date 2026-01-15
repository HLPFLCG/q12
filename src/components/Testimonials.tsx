"use client";

import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote: "Q12 transformed our social presence. Their content drove 340% more engagement.",
    name: "Sarah Chen",
    role: "Marketing Director, TechFlow",
  },
  {
    quote: "Working with Johnny has been a game-changer for our brand.",
    name: "Marcus Johnson",
    role: "Founder, Wellness Co",
  },
  {
    quote: "The quality of content Q12 produces is unmatched.",
    name: "Emma Rodriguez",
    role: "Brand Manager, Fashion Forward",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section bg-[#050505]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className={`label mb-4 ${inView ? "animate-in" : "opacity-0"}`}>
            Testimonials
          </span>
          <h2 className={`mt-4 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
            What clients say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              className={`card p-8 ${inView ? "animate-in" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 2) * 0.1}s` }}
            >
              <p className="text-white leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <div className="font-medium text-white text-sm">{item.name}</div>
                <div className="text-sm text-[#555]">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
