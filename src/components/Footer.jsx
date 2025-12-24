import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const links = {
        Product: ['Features', 'Integration', 'Pricing', 'Changelog'],
        Company: ['About Us', 'Careers', 'Blog', 'Contact'],
        Compare: ['Vs TensorFlow', 'Vs PyTorch', 'Vs OpenAI', 'Vs Anthropic'],
        Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
    };

    return (
        <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/5 bg-black/40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">NeuralAI</h3>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            Empowering the next generation of artificial intelligence applications with high-performance infrastructure.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="https://github.com/bablu456"
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(links).map(([title, items], idx) => (
                        <div key={title} className="col-span-1">
                            <h4 className="font-semibold text-white mb-4">{title}</h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5">
                    <p className="text-slate-500 text-sm">© 2025 Bablukumar Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-slate-300 text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
