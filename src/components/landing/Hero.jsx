import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#020817] text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020817] to-[#020817]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                    Empowering Organizations Through People, Strategy & Innovation
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Flux Bridge is a global Human Capital and Business Advisory firm headquartered in Riyadh,
                    helping organizations redefine success through executive recruitment, leadership development,
                    HR strategy, and digital transformation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-base shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105"
                    >
                        Explore Our Services
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-12 px-8 rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 font-medium text-base backdrop-blur-sm transition-all hover:scale-105"
                    >
                        Get in Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}
