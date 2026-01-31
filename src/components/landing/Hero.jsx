"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-20 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-background text-foreground flex items-center justify-center min-h-[90vh]">
            {/* Background Elements */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/70 leading-[1.1]"
                >
                    Empowering Organizations Through People, Strategy & Innovation
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Professional Executive Management Services Pvt Ltd. is a global Human Capital and Business Advisory firm,
                    helping organizations redefine success through executive recruitment, leadership development,
                    HR strategy, and digital transformation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                >
                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg shadow-[0_0_20px_rgba(29,185,84,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(29,185,84,0.5)]"
                    >
                        Explore Our Services
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto h-14 px-10 rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 font-semibold text-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-white/20"
                    >
                        Get in Touch
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
