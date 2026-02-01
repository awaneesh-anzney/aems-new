"use client";

import { UserCircle, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer id="contact" className="bg-background border-t border-border pt-20 pb-10 text-muted-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Logo & Description */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-16 w-32">
                                <Image
                                    src="/aems-n.png"
                                    alt="PEMS Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <span className="text-xl font-bold text-foreground tracking-tight">Professional Executive Management Services Pvt Ltd.</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Professional Executive Management Services Pvt Ltd. is a global Human Capital Advisory firm.
                            Since 2009, we've partnered with 100+ clients across 14+ countries, helping organizations
                            transform people, processes, and technology for sustainable success.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-foreground font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            {["About Us", "Services", "Industries", "Global Presence", "Client & Partners"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-foreground font-semibold text-lg">Contact Info</h3>
                        <div className="space-y-6 text-sm">
                            <div className="space-y-2">
                                <h4 className="text-foreground font-medium">Headquarters</h4>
                                <p className="leading-relaxed">
                                    D/SH 73, Elco Arcade, Behind ELCO Hotel<br />
                                    46 Hill Road, Bandra West<br />
                                    Mumbai 400050, India
                                </p>
                                <div className="mt-2 text-xs opacity-80 grid gap-1">
                                    <p>GSTIN : 27AAFCP2909R1ZT</p>
                                    <p>PAN No:AAFCP2909R</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subscribe & Social */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold text-lg">Subscribe to Our Newsletter</h3>
                            <div className="flex flex-col gap-2">
                                <div className="relative">
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-card border-border focus:border-secondary h-12 rounded-lg pr-28"
                                    />
                                    <Button className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-6 h-auto">
                                        Subscribe
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-foreground font-semibold text-lg">Follow Us</h3>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} Professional Executive Management Services Pvt Ltd. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <span className="text-border">|</span>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
