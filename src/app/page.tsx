import { Navigation, Hero, Services, Work, About, Testimonials, Instagram, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
    </main>
  );
}
