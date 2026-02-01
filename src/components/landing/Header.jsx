"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--landing-header))]/80 backdrop-blur-md border-b border-border transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="relative h-12 w-24">
                        <Image
                            src="/aems-n.png"
                            alt="PEMS Logo"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <span className="text-xl font-bold text-foreground tracking-tight">Professional Executive Management Services Pvt Ltd.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {["About Us", "Services", "Industries", "Global Presence", "Client & Partners"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button (Desktop) */}
                <Link href="#contact">
                    <Button
                        variant="outline"
                        className="hidden md:inline-flex bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground rounded-full px-6 transition-all hover:scale-105"
                    >
                        Contact
                    </Button>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <nav className="flex flex-col items-center gap-6">
                        {["About Us", "Services", "Industries", "Global Presence", "Client & Partners"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button
                            variant="outline"
                            className="bg-transparent text-foreground border-border hover:bg-white/10 hover:text-foreground rounded-full px-8 py-6 text-lg"
                        >
                            Contact Details
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
