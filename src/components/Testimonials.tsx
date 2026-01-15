"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
    metric: "340% engagement increase",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder & CEO",
    company: "Wellness Co.",
    avatar: "MJ",
    content:
      "Working with Johnny and the Q12 team has been a game-changer. They don't just create content—they understand our brand voice and deliver results that exceed expectations every single time.",
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
      "The quality of UGC content Q12 produces is unmatched. They've helped us build an authentic community that genuinely loves our brand. Our conversion rate has never been higher.",
    rating: 5,
    metric: "85% conversion lift",
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
    metric: "5 viral campaigns",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/5 blur-[200px]" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4">
            Client Success
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our Clients
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say
            about working with Q12 Agency.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
              <Quote className="w-10 h-10 text-indigo-400/50" />
            </div>

            {/* Content */}
            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Metric Highlight */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
                  <span className="text-indigo-400 font-semibold">
                    {testimonials[currentIndex].metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-white/60 text-sm">
                      {testimonials[currentIndex].role} at{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Mini Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-white/50 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
