"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        title: "Executive Search/ Recruitment",
        description:
            "Our executive search and recruitment services are designed to identify and attract top-tier talent for senior leadership positions across various industries. We understand that finding the right executive is crucial for organizational success, which is why we employ a comprehensive approach that combines deep market knowledge, extensive networks, and rigorous assessment methodologies. Our team of experienced consultants works closely with clients to understand their unique organizational culture, strategic objectives, and specific leadership requirements.",
    },
    {
        id: "02",
        title: "Structure & Governance",
        description:
            "We help organizations build robust structures and governance frameworks that ensure efficiency, accountability, and alignment with strategic goals. Our experts analyze your current organizational setup and recommend improvements to streamline operations and enhance decision-making processes.",
    },
    {
        id: "03",
        title: "Culture Development",
        description:
            "Culture is the heartbeat of any organization. We partner with you to define, cultivate, and sustain a positive organizational culture that drives engagement, innovation, and performance. From cultural assessments to transformation programs, we guide you every step of the way.",
    },
    {
        id: "04",
        title: "HR Strategy Services",
        description:
            "Our HR Strategy Services align your human capital with your business objectives. We develop tailored strategies for talent management, workforce planning, and employee experience to ensure your organization is equipped to meet future challenges and seize opportunities.",
    },
    {
        id: "05",
        title: "Job Evaluation & Grading Structure",
        description:
            "Fair and transparent job evaluation and grading structures are fundamental to creating equitable compensation systems and maintaining employee trust and engagement. Our specialized services help organizations develop, implement, and maintain job evaluation frameworks that ensure internal equity, external competitiveness, and regulatory compliance. We employ proven methodologies such as point-factor systems, job ranking, and market-based approaches to assess job worth and establish appropriate grading structures.",
    },
    {
        id: "06",
        title: "Performance Management",
        description:
            "Unlock the full potential of your workforce with our Performance Management solutions. We design and implement performance appraisal systems that are objective, transparent, and aligned with organizational goals. Our approach fosters a culture of continuous improvement, feedback, and development, ensuring that individual performance drives business success.",
    },
    {
        id: "07",
        title: "Learning & Development",
        description:
            "Invest in your people to drive future growth. our Learning & Development strategies are tailored to address skill gaps and build future-ready competencies. From leadership training to technical upskilling, we provide comprehensive learning solutions that empower your employees to excel in their roles and adapt to evolving business landscapes.",
    },
    {
        id: "08",
        title: "Talent Acquisition",
        description:
            "Attracting top talent is just the beginning. Our Talent Acquisition services encompass the entire recruitment lifecycle, from employer branding to onboarding. We leverage advanced sourcing strategies and assessment tools to connect you with candidates who not only have the right skills but also fit seamlessly into your organizational culture.",
    },
    {
        id: "09",
        title: "Leadership Development",
        description:
            "Strong leadership is the cornerstone of sustainable success. Our Leadership Development programs identify and nurture high-potential individuals, equipping them with the skills and mindset needed to lead effectively. We combine executive coaching, workshops, and real-world projects to build a robust pipeline of future leaders.",
    },
    {
        id: "10",
        title: "Digital Transformation",
        description:
            "Embrace the digital future with confidence. Our Digital Transformation services guide your organization through the complexities of technological change. We focus on the people side of transformation, ensuring that your workforce is prepared, engaged, and empowered to leverage new digital tools and workflows for enhanced productivity and innovation.",
    },
];

export function Services() {
    const [activeItem, setActiveItem] = useState("01");

    return (
        <section className="py-20 bg-background text-foreground" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                    Our Human Capital Services
                </h2>

                <div className="max-w-4xl mx-auto flex flex-col">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={cn(
                                "group border-b border-border transition-all duration-300",
                                activeItem === service.id ? "bg-card/50" : "hover:bg-white/5"
                            )}
                        >
                            <button
                                onClick={() =>
                                    setActiveItem(activeItem === service.id ? null : service.id)
                                }
                                className="w-full flex items-center justify-between py-8 px-4 md:px-8 text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-6 md:gap-12">
                                    <span
                                        className={cn(
                                            "text-xl md:text-2xl font-mono",
                                            activeItem === service.id
                                                ? "text-secondary"
                                                : "text-muted-foreground group-hover:text-foreground"
                                        )}
                                    >
                                        {service.id}
                                    </span>
                                    <span
                                        className={cn(
                                            "text-lg md:text-2xl font-medium transition-colors",
                                            activeItem === service.id
                                                ? "text-secondary"
                                                : "text-foreground group-hover:text-secondary"
                                        )}
                                    >
                                        {service.title}
                                    </span>
                                </div>

                                <div
                                    className={cn(
                                        "flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-300",
                                        activeItem === service.id
                                            ? "bg-secondary border-secondary text-secondary-foreground"
                                            : "border-muted-foreground text-muted-foreground group-hover:border-secondary group-hover:text-secondary"
                                    )}
                                >
                                    {activeItem === service.id ? (
                                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                    ) : (
                                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out overflow-hidden",
                                    activeItem === service.id
                                        ? "grid-rows-[1fr] opacity-100 pb-8"
                                        : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden px-4 md:px-8 pl-16 md:pl-28">
                                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
