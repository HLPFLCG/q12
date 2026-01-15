"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { Instagram as InstagramIcon, ExternalLink, Heart, MessageCircle } from "lucide-react";

const accounts = [
  { handle: "johnnysaffra", label: "Personal", followers: "10K+" },
  { handle: "q12_agency", label: "Agency", followers: "5K+" },
  { handle: "johnny_ugc", label: "UGC", followers: "8K+" },
];

// Featured posts showcasing work (placeholder images - replace with actual content)
const posts = [
  { id: 1, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80", likes: "2.4K", comments: "89" },
  { id: 2, image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80", likes: "1.8K", comments: "52" },
  { id: 3, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80", likes: "3.1K", comments: "127" },
  { id: 4, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80", likes: "2.9K", comments: "94" },
  { id: 5, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80", likes: "4.2K", comments: "156" },
  { id: 6, image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80", likes: "1.5K", comments: "67" },
];

export function Instagram() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="instagram" className="section bg-black" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className={`tag mb-4 ${inView ? "animate-in" : "opacity-0"}`}>
            Follow Along
          </span>
          <h2 className={`text-white mb-4 ${inView ? "animate-in delay-1" : "opacity-0"}`}>
            On <span className="gradient-text">Instagram</span>
          </h2>
          <p className={`text-gray-400 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
            Behind the scenes, latest work, and creative inspiration.
          </p>
        </div>

        {/* Account Links */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 ${inView ? "animate-in delay-2" : "opacity-0"}`}>
          {accounts.map((account) => (
            <Link
              key={account.handle}
              href={`https://instagram.com/${account.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 transition-all group"
            >
              <InstagramIcon size={16} className="text-pink-400" />
              <span className="text-sm text-white font-medium">@{account.handle}</span>
              <span className="text-xs text-gray-500">{account.label}</span>
              <ExternalLink size={12} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto">
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href="https://instagram.com/q12_agency"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square rounded-xl overflow-hidden ${
                inView ? "animate-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 3) * 0.1}s` }}
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-4 text-white">
                  <span className="flex items-center gap-1">
                    <Heart size={18} className="fill-white" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={18} className="fill-white" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 ${inView ? "animate-in delay-4" : "opacity-0"}`}>
          <Link
            href="https://instagram.com/q12_agency"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary inline-flex items-center gap-2"
          >
            <InstagramIcon size={18} />
            Follow @q12_agency
          </Link>
        </div>
      </div>
    </section>
  );
}
