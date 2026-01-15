"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    title: "Lifestyle Brand Campaign",
    category: "UGC",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
  },
  {
    title: "E-commerce Launch",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    title: "Fashion Identity",
    category: "Social",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
  },
  {
    title: "Tech Social Strategy",
    category: "Social",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export function Work() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="work" className="section bg-[#050505]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className={`label mb-4 ${inView ? "animate-in" : "opacity-0"}`}>
            Work
          </span>
          <h2 className={`mt-4 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
            Selected projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group cursor-pointer ${inView ? "animate-in" : "opacity-0"}`}
              style={{ animationDelay: `${(i + 2) * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-white">{project.title}</h3>
                <span className="text-sm text-[#555]">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
