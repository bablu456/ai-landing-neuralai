import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Product', href: '#features' },
        { name: 'Solutions', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Docs', href: '#' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'py-4 glass-premium border-b border-white/5'
                        : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                                <Sparkles className="w-8 h-8 text-cyan-400 relative z-10" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Neural<span className="text-cyan-400">AI</span>
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                                </a>
                            ))}
                            <button className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105">
                                Sign In
                            </button>
                            <button className="btn-shimmer px-5 py-2 rounded-lg text-sm font-bold shadow-lg hover:shadow-cyan-500/25">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-slate-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-[280px] bg-[#0a0a0a] border-l border-white/10 z-[60] p-6 md:hidden"
                        >
                            <div className="flex justify-end mb-8">
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-lg bg-white/5 text-slate-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="h-px bg-white/10 my-2" />
                                <button className="w-full py-3 rounded-lg bg-white/5 text-white font-medium">
                                    Sign In
                                </button>
                                <button className="w-full py-3 rounded-lg btn-shimmer font-bold">
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
