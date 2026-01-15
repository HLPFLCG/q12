"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/johnnysaffra/", label: "Personal" },
  { icon: Instagram, href: "https://www.instagram.com/q12_agency/", label: "Agency" },
  { icon: Instagram, href: "https://www.instagram.com/johnny_ugc/", label: "UGC" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/johnnysaffra", label: "LinkedIn" },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section bg-black" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className={`tag mb-4 ${inView ? "animate-in" : "opacity-0"}`}>About</span>
          <h2 className={`text-white mb-4 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
            Meet <span className="gradient-text">Johnny</span>
          </h2>
          <p className={`text-gray-400 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
            The creative force behind Q12 Agency.
          </p>
        </div>

        {/* Founder Card */}
        <div className={`max-w-2xl mx-auto ${inView ? "animate-in delay-3" : "opacity-0"}`}>
          <div className="card p-6 md:p-8 text-center">
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-2xl bg-[#111] flex items-center justify-center">
                <span className="text-3xl font-bold text-white">JS</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Johnny Saffra</h3>
            <p className="text-indigo-400 text-sm font-medium mb-4">Founder & Creative Director</p>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              With expertise in social media marketing and UGC content creation,
              Johnny helps ambitious brands tell authentic stories and achieve
              measurable growth through strategic content.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
