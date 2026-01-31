import Image from "next/image";

export function About() {
    return (
        <section className="py-10 md:py-20 bg-background text-foreground relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">About Professional Executive Management Services Pvt Ltd.</h2>

                        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                Founded in 2017, Professional Executive Management Services Pvt Ltd. is a global talent solutions firm
                                connecting exceptional talent with opportunity. With 6 global offices and a 30+ member core team,
                                we've served 100+ clients across 16 industries and 14 countries.
                            </p>
                            <p>
                                Our track record includes 50+ strategic assignments, 600+ trainers, 100+ leaders coached,
                                and 1M+ assessments delivered for 140 roles with 85% accuracy. With a 24-day average recruitment
                                lead time, we combine strategic planning and speed to deliver lasting organizational impact.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary uppercase tracking-widest">Our Vision & Mission</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                                    <span className="text-muted-foreground">By 2030, we aim to lead in Human Capital Advisory with global solutions and local talent.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                                    <span className="text-muted-foreground">Redefining Human Resources as a strategic catalyst for organisational potential and success.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative w-full mx-auto">
                        <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                            <Image
                                src="/team.png"
                                alt="Company Culture"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
