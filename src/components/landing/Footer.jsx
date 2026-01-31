export function Footer() {
    return (
        <footer className="bg-[#020817] border-t border-white/10 py-12 text-gray-400">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Flux Bridge. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
