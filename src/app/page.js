import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { RecruitmentCycle } from "@/components/landing/RecruitmentCycle";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Header />
      <Hero />
      <About />
      <Services />
      <RecruitmentCycle />
      <Footer />
    </main>
  );
}
