"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-transparent text-foreground flex items-center justify-center min-h-[90vh]">
            {/* Background Elements - Removed to let page background show through, or kept subtle */}

            <div className="container relative mx-auto px-4 md:px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-5xl mx-auto text-foreground leading-[1.1]"
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
                        className="w-full sm:w-auto h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg shadow-[0_4px_14px_0_rgba(28,200,91,0.39)] transition-all hover:scale-105"
                    >
                        Explore Our Services
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto h-14 px-10 rounded-full bg-white/50 border-input text-foreground hover:bg-white/80 font-semibold text-lg backdrop-blur-sm transition-all hover:scale-105"
                    >
                        Get in Touch
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
