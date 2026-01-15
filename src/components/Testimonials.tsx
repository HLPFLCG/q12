"use client";

import { useState } from "react";
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
      "Q12 Agency transformed our social media presence completely. Their UGC content drove a 340% increase in engagement and directly contributed to our best quarter ever.",
    rating: 5,
    metric: "340% engagement increase",
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
    metric: "2.5M views in 30 days",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Brand Manager",
    company: "Fashion Forward",
    avatar: "ER",
    content:
      "The quality of UGC content Q12 produces is unmatched. They've helped us build an authentic community that genuinely loves our brand.",
    rating: 5,
    metric: "85% conversion lift",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative section-padding bg-[#111]">
      <div ref={ref} className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4 ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Testimonials
          </span>
          <h2
            className={`text-white ${
              inView ? "animate-fade-in animate-fade-in-delay-1" : "opacity-0"
            }`}
          >
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div
          className={`max-w-3xl mx-auto ${
            inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
          }`}
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-indigo-400/50" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              &ldquo;{current.content}&rdquo;
            </blockquote>

            {/* Metric */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <span className="text-indigo-400 font-semibold">{current.metric}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {current.avatar}
              </div>
              <div>
                <p className="text-white font-semibold">{current.name}</p>
                <p className="text-zinc-500 text-sm">
                  {current.role} at {current.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
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
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
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
