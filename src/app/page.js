import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { RecruitmentCycle } from "@/components/landing/RecruitmentCycle";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Modern Gradient Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff33,transparent)]"></div>
      </div>

      <Header />
      <Hero />
      <About />
      <Services />
      <RecruitmentCycle />
      <Footer />
    </main>
  );
}
