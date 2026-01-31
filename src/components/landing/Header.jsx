"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="bg-gradient-to-br from-blue-600 to-red-600 p-1 rounded-lg">
                        <UserCircle className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Flux Bridge</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {["About Us", "Services", "Industries", "Global Presence", "Client & Partners"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button (Desktop) */}
                <Button
                    variant="outline"
                    className="hidden md:inline-flex bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white rounded-full px-6 transition-all hover:scale-105"
                >
                    Contact
                </Button>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`fixed inset-0 bg-[#020817] z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <nav className="flex flex-col items-center gap-6">
                        {["About Us", "Services", "Industries", "Global Presence", "Client & Partners"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-xl font-medium text-gray-300 hover:text-white transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <Button
                        variant="outline"
                        className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white rounded-full px-8 py-6 text-lg"
                    >
                        Contact Details
                    </Button>
                </div>
            </div>
        </header>
    );
}
