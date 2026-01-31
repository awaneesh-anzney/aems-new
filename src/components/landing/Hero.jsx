import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background text-foreground">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container relative mx-auto px-4 md:px-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 leading-[1.1]">
                    Empowering Organizations Through People, Strategy & Innovation
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                    Flux Bridge is a global Human Capital and Business Advisory firm headquartered in Riyadh,
                    helping organizations redefine success through executive recruitment, leadership development,
                    HR strategy, and digital transformation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:scale-105"
                    >
                        Explore Our Services
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto h-12 px-8 rounded-full bg-white/5 border-border text-foreground hover:bg-white/10 font-medium text-base backdrop-blur-sm transition-all hover:scale-105"
                    >
                        Get in Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}
