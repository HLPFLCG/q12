"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "SC",
    content:
      "Q12 Agency transformed our social media presence completely. Their UGC content drove a 340% increase in engagement and directly contributed to our best quarter ever. Truly exceptional work.",
    rating: 5,
    metric: "340%",
    metricLabel: "Engagement Increase",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder & CEO",
    company: "Wellness Co.",
    avatar: "MJ",
    content:
      "Working with Johnny and the Q12 team has been a game-changer. They understand our brand voice and deliver results that exceed expectations every single time.",
    rating: 5,
    metric: "2.5M",
    metricLabel: "Views in 30 Days",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Brand Manager",
    company: "Fashion Forward",
    avatar: "ER",
    content:
      "The quality of UGC content Q12 produces is unmatched. They've helped us build an authentic community that genuinely loves our brand. Our conversion rate has never been higher.",
    rating: 5,
    metric: "85%",
    metricLabel: "Conversion Lift",
  },
  {
    id: 4,
    name: "David Park",
    role: "CMO",
    company: "StartUp Labs",
    avatar: "DP",
    content:
      "Q12 Agency brought a fresh perspective to our marketing strategy. Their data-driven approach combined with creative excellence helped us achieve viral success multiple times.",
    rating: 5,
    metric: "5x",
    metricLabel: "ROI Increase",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative section-padding bg-black">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)]" />

      <div ref={ref} className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4 ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Client Success
          </span>
          <h2
            className={`text-white mb-6 ${
              inView ? "animate-fade-in animate-fade-in-delay-1" : "opacity-0"
            }`}
          >
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p
            className={`text-lg text-zinc-400 ${
              inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
            }`}
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className={`max-w-4xl mx-auto ${
            inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
          }`}
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-indigo-500/20" />
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-[1fr,auto] gap-8 items-start">
              {/* Main Content */}
              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                  &ldquo;{current.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {current.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{current.name}</p>
                    <p className="text-zinc-500">
                      {current.role}, {current.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric Card */}
              <div className="hidden md:flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 min-w-[140px]">
                <span className="text-4xl font-bold text-indigo-400">{current.metric}</span>
                <span className="text-sm text-zinc-400 text-center mt-1">{current.metricLabel}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-indigo-500"
                      : "w-2 bg-zinc-700 hover:bg-zinc-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
