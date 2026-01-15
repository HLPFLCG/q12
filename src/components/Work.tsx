"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Play, ExternalLink, Eye, Heart } from "lucide-react";

const categories = ["All", "UGC", "Social Media", "Branding", "Campaigns"];

const projects = [
  {
    id: 1,
    title: "Lifestyle Brand Campaign",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format",
    video: true,
    stats: { views: "2.4M", likes: "180K" },
  },
  {
    id: 2,
    title: "E-commerce Product Launch",
    category: "Campaigns",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format",
    video: false,
    stats: { views: "1.8M", likes: "95K" },
  },
  {
    id: 3,
    title: "Fashion Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format",
    video: false,
    stats: { views: "3.2M", likes: "240K" },
  },
  {
    id: 4,
    title: "Tech Startup Social Strategy",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
    video: true,
    stats: { views: "5.1M", likes: "320K" },
  },
  {
    id: 5,
    title: "Beauty UGC Series",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format",
    video: true,
    stats: { views: "4.7M", likes: "280K" },
  },
  {
    id: 6,
    title: "Fitness Brand Refresh",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format",
    video: false,
    stats: { views: "2.9M", likes: "156K" },
  },
];

export function Work() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative section-padding bg-black">
      <div ref={ref} className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block text-sm font-medium text-indigo-400 uppercase tracking-wider mb-4 ${
              inView ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Our Portfolio
          </span>
          <h2
            className={`text-white mb-6 ${
              inView ? "animate-fade-in animate-fade-in-delay-1" : "opacity-0"
            }`}
          >
            Work That <span className="gradient-text">Speaks</span>
          </h2>
          <p
            className={`text-lg text-zinc-400 ${
              inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
            }`}
          >
            A showcase of our best work across various industries and platforms.
            Every project tells a story of growth and success.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 ${
            inView ? "animate-fade-in animate-fade-in-delay-2" : "opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-500 text-white"
                  : "glass text-zinc-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer hover-lift ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * (index + 3)}s` }}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Video Indicator */}
              {project.video && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              )}

              {/* Category */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/80 text-white">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{project.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{project.stats.likes}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-zinc-300 ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div
          className={`text-center mt-12 ${
            inView ? "animate-fade-in animate-fade-in-delay-5" : "opacity-0"
          }`}
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
