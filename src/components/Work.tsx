"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";

const categories = ["All", "UGC", "Social", "Branding"];

const projects = [
  {
    id: 1,
    title: "Lifestyle Brand Campaign",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    video: true,
    views: "2.4M",
  },
  {
    id: 2,
    title: "E-commerce Launch",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    video: false,
    views: "1.8M",
  },
  {
    id: 3,
    title: "Fashion Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80",
    video: false,
    views: "3.2M",
  },
  {
    id: 4,
    title: "Tech Social Strategy",
    category: "Social",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    video: true,
    views: "5.1M",
  },
  {
    id: 5,
    title: "Beauty UGC Series",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    video: true,
    views: "4.7M",
  },
  {
    id: 6,
    title: "Fitness Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    video: false,
    views: "2.9M",
  },
];

export function Work() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="section bg-[#0a0a0a]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className={`tag ${inView ? "animate-in" : "opacity-0"}`}>
            Portfolio
          </span>
          <h2
            className={`text-white mt-4 mb-4 ${
              inView ? "animate-in delay-1" : "opacity-0"
            }`}
          >
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className={`text-gray-400 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
            Projects that tell stories of growth and success.
          </p>
        </div>

        {/* Filters - Centered */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 ${
            inView ? "animate-in delay-2" : "opacity-0"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid-services">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer ${
                inView ? "animate-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 3) * 0.1}s` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {project.video && (
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                  <Play size={14} className="text-white fill-white" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="tag text-xs mb-2">{project.category}</span>
                <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{project.views} views</span>
                  <ExternalLink
                    size={16}
                    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
