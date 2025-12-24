import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
            {/* Mesh Gradient Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-100 pointer-events-none">
                <div className="mesh-blob blob-purple w-96 h-96 top-0 left-20 animate-pulse delay-75"></div>
                <div className="mesh-blob blob-cyan w-80 h-80 bottom-20 right-20 animate-pulse delay-1000"></div>
                <div className="mesh-blob blob-pink w-72 h-72 bottom-40 left-10 animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 glass-premium px-4 py-1.5 rounded-full mb-8 border border-white/10"
                >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-slate-300">The Next Gen AI Platform</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                    className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8"
                >
                    <span className="text-slate-100 block mb-2">Build Faster with</span>
                    <span className="text-gradient-accent">Neural Intelligence</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Unlock the power of advanced neural networks. Create, deploy, and scale
                    AI-driven applications with unprecedented speed and accuracy.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-shimmer px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 group"
                    >
                        Start Building
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl font-semibold text-slate-300 glass-premium flex items-center gap-2 transition-colors"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        Watch Demo
                    </motion.button>
                </motion.div>
            </div>

            {/* Floating UI Elements / Dashboard Preview */}
            <motion.div
                style={{ y, opacity }}
                className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none"
            />
        </section>
    );
};

export default Hero;
