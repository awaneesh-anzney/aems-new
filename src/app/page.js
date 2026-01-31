import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white selection:bg-blue-500/30">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
