"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 2,
    title: "E-commerce Product Launch",
    category: "Campaigns",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format",
    video: false,
    stats: { views: "1.8M", likes: "95K" },
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Fashion Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format",
    video: false,
    stats: { views: "3.2M", likes: "240K" },
    color: "from-pink-500 to-red-500",
  },
  {
    id: 4,
    title: "Tech Startup Social Strategy",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
    video: true,
    stats: { views: "5.1M", likes: "320K" },
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 5,
    title: "Beauty UGC Series",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format",
    video: true,
    stats: { views: "4.7M", likes: "280K" },
    color: "from-rose-500 to-orange-500",
  },
  {
    id: 6,
    title: "Fitness Brand Refresh",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format",
    video: false,
    stats: { views: "2.9M", likes: "156K" },
    color: "from-green-500 to-teal-500",
  },
];

export function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/5 blur-[200px]" />
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
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Work That
            <span className="gradient-text"> Speaks</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A showcase of our best work across various industries and platforms.
            Every project tells a story of growth and success.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  : "glass text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
              />

              {/* Video Indicator */}
              {project.video && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3
                  animate={{
                    y: hoveredProject === project.id ? 0 : 10,
                    opacity: hoveredProject === project.id ? 1 : 0.8,
                  }}
                  className="text-xl font-bold text-white mb-3"
                >
                  {project.title}
                </motion.h3>

                {/* Stats */}
                <motion.div
                  animate={{
                    y: hoveredProject === project.id ? 0 : 20,
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center gap-1.5 text-white/70">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{project.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{project.stats.likes}</span>
                  </div>
                  <div className="ml-auto">
                    <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </motion.div>
              </div>

              {/* Hover Border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
