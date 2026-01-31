import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
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
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <Button
                    variant="outline"
                    className="hidden md:inline-flex bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white rounded-full px-6"
                >
                    Contact
                </Button>
            </div>
        </header>
    );
}
