"use client";

import {
    Target,
    Search,
    Filter,
    Users,
    FileSignature,
    Rocket,
    UserCircle
} from "lucide-react";

export function RecruitmentCycle() {
    const steps = [
        {
            id: 1,
            title: "Understand Client Needs",
            items: ["Job profile & Organization", "Reward dynamics", "Specific skill sets & Experience"],
            icon: Target,
            position: "right-top"
        },
        {
            id: 2,
            title: "Sourcing Candidates",
            items: ["Internal database", "Website / Head hunting", "Social media"],
            icon: Search,
            position: "right-middle"
        },
        {
            id: 3,
            title: "AEMS Candidate Screening",
            items: ["Evaluate competencies &", "experience fit"],
            icon: Filter,
            position: "right-bottom"
        },
        {
            id: 4,
            title: "Client Interview",
            items: ["Candidates Telephonic /", "Physical interview, AEMS to", "receive interview results"],
            icon: Users,
            position: "left-bottom"
        },
        {
            id: 5,
            title: "Offer Letter",
            items: ["Client to issue offer, Candidate acceptance", "Agree on the joining date", "with the candidate"],
            icon: FileSignature,
            position: "left-middle"
        },
        {
            id: 6,
            title: "Candidate On-Boarding",
            items: ["Support Client on visas", "Onboarding support", "Report to work confirmation"],
            icon: Rocket,
            position: "left-top"
        }
    ];

    return (
        <section className="py-24 bg-background text-foreground relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Connection Lines (Desktop Only) with Glow */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-40">
                <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    {/* Right Side Lines */}
                    <path d="M 50% 50% C 70% 50%, 70% 20%, 80% 20%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                    <path d="M 50% 50% L 80% 50%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                    <path d="M 50% 50% C 70% 50%, 70% 80%, 80% 80%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />

                    {/* Left Side Lines */}
                    <path d="M 50% 50% C 30% 50%, 30% 20%, 20% 20%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                    <path d="M 50% 50% L 20% 50%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                    <path d="M 50% 50% C 30% 50%, 30% 80%, 20% 80%" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 tracking-tight bg-clip-text">
                    Executive Search<br />Recruitment Cycle
                </h2>

                <div className="relative flex flex-col items-center justify-center min-h-[700px]">

                    {/* Center Node - Pulsing Core */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20"></div>
                            <div className="w-32 h-32 rounded-full bg-[#0a192f] border-2 border-secondary/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.4)] relative z-10 backdrop-blur-xl">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-inner">
                                    <span className="text-3xl font-bold text-white tracking-widest">F6</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-64 gap-y-12 w-full max-w-7xl mx-auto relative z-20">

                        {/* Left Column (Items 6, 5, 4) */}
                        <div className="flex flex-col gap-16 justify-center h-full order-2 lg:order-1">
                            {/* Item 6: Onboarding */}
                            <div className="flex gap-6 items-center lg:flex-row-reverse lg:text-right group">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 border border-border flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-secondary/20 group-hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Rocket className="w-7 h-7 text-muted-foreground group-hover:text-secondary transition-colors" />
                                </div>
                                <div className="p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">Candidate On-Boarding</h3>
                                    <ul className="text-muted-foreground text-sm space-y-1.5 font-medium">
                                        {steps[5].items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>

                            {/* Item 5: Offer */}
                            <div className="flex gap-6 items-center lg:flex-row-reverse lg:text-right group">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 border border-border flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-secondary/20 group-hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <FileSignature className="w-7 h-7 text-muted-foreground group-hover:text-secondary transition-colors" />
                                </div>
                                <div className="p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">Offer Letter</h3>
                                    <ul className="text-muted-foreground text-sm space-y-1.5 font-medium">
                                        {steps[4].items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>

                            {/* Item 4: Interview */}
                            <div className="flex gap-6 items-center lg:flex-row-reverse lg:text-right group">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 border border-border flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-secondary/20 group-hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Users className="w-7 h-7 text-muted-foreground group-hover:text-secondary transition-colors" />
                                </div>
                                <div className="p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">Client Interview</h3>
                                    <ul className="text-muted-foreground text-sm space-y-1.5 font-medium">
                                        {steps[3].items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Items 1, 2, 3) */}
                        <div className="flex flex-col gap-16 justify-center h-full order-1 lg:order-2">
                            {/* Item 1: Understand Needs */}
                            <div className="flex gap-6 items-center group">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 border border-border flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-secondary/20 group-hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Target className="w-7 h-7 text-muted-foreground group-hover:text-secondary transition-colors" />
                                </div>
                                <div className="p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">Understand Client Needs</h3>
                                    <ul className="text-muted-foreground text-sm space-y-1.5 font-medium">
                                        {steps[0].items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>

                            {/* Item 2: Sourcing */}
                            <div className="flex gap-6 items-center group">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 border border-border flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-secondary/20 group-hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Search className="w-7 h-7 text-muted-foreground group-hover:text-secondary transition-colors" />
                                </div>
                                <div className="p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">Sourcing Candidates</h3>
                                    <ul className="text-muted-foreground text-sm space-y-1.5 font-medium">
                                        {steps[1].items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>

                            {/* Item 3: Screening */}
                            <div className="flex gap-6 items-center group">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-100 border border-border flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-secondary/20 group-hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Filter className="w-7 h-7 text-muted-foreground group-hover:text-secondary transition-colors" />
                                </div>
                                <div className="p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50 flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">AEMS Candidate Screening</h3>
                                    <ul className="text-muted-foreground text-sm space-y-1.5 font-medium">
                                        {steps[2].items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}
