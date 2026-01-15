"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
    avatar: "SC",
    text: "Q12 transformed our social presence. Their UGC content drove 340% more engagement.",
    metric: "340%",
    metricLabel: "Engagement",
  },
  {
    name: "Marcus Johnson",
    role: "Founder",
    company: "Wellness Co",
    avatar: "MJ",
    text: "Working with Johnny has been a game-changer. They understand our brand perfectly.",
    metric: "2.5M",
    metricLabel: "Views",
  },
  {
    name: "Emma Rodriguez",
    role: "Brand Manager",
    company: "Fashion Forward",
    avatar: "ER",
    text: "The quality of content Q12 produces is unmatched. Our conversion rate has never been higher.",
    metric: "85%",
    metricLabel: "Conversion",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section bg-[#0a0a0a]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className={`tag ${inView ? "animate-in" : "opacity-0"}`}>
            Testimonials
          </span>
          <h2
            className={`text-white mt-4 mb-4 ${
              inView ? "animate-in delay-1" : "opacity-0"
            }`}
          >
            Client <span className="gradient-text">Success</span>
          </h2>
        </div>

        {/* Testimonial Card - Centered */}
        <div
          className={`max-w-2xl mx-auto ${inView ? "animate-in delay-2" : "opacity-0"}`}
        >
          <div className="card p-6 md:p-8">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-center">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author + Metric */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-medium">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-indigo-400">{t.metric}</p>
                <p className="text-xs text-gray-500 uppercase">{t.metricLabel}</p>
              </div>
            </div>
          </div>

          {/* Navigation - Centered */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-indigo-500" : "w-2 bg-gray-700"
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
