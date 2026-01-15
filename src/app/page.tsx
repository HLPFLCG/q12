"use client";

import { Navigation, Hero, Services, Work, About, Testimonials, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen grain">
      <Navigation />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
