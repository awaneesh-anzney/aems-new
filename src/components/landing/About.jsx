import Image from "next/image";

export function About() {
    return (
        <section className="py-20 md:py-32 bg-[#020817] text-white relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">About Flux Bridge</h2>

                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                Founded in 2017 and headquartered in Riyadh, KSA, Flux Bridge is a global talent solutions firm
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
                            <h3 className="text-xl font-semibold text-blue-500 uppercase tracking-widest">Our Vision & Mission</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></span>
                                    <span className="text-gray-300">By 2030, we aim to lead in Human Capital Advisory with global solutions and local talent.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></span>
                                    <span className="text-gray-300">Redefining Human Resources as a strategic catalyst for organisational potential and success.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Image Frame */}
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-gray-900 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
                            {/* Placeholder for the image */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-gray-500 gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium tracking-widest uppercase text-gray-600">Company Culture</span>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
                        </div>

                        {/* Decorative border outline offset */}
                        <div className="absolute top-4 left-4 w-full h-full rounded-2xl border border-blue-500/20 -z-0"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
