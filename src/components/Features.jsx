import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, Globe, Lock, Zap, Code } from 'lucide-react';

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            icon: <Brain className="w-6 h-6 text-purple-400" />,
            title: "Neural Engine",
            description: "Proprietary deep learning models offering 10x faster inference.",
            size: "lg:col-span-2 lg:row-span-2",
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            title: "Real-time Processing",
            description: "Sub-millisecond latency for mission-critical apps.",
            size: "lg:col-span-1",
        },
        {
            icon: <Lock className="w-6 h-6 text-cyan-400" />,
            title: "Encrypted Core",
            description: "End-to-end encryption for all data streams.",
            size: "lg:col-span-1",
        },
        {
            icon: <Globe className="w-6 h-6 text-pink-400" />,
            title: "Global Edge",
            description: "Deployed across 200+ edge locations worldwide.",
            size: "lg:col-span-1",
        },
        {
            icon: <Cpu className="w-6 h-6 text-blue-400" />,
            title: "Auto-Scaling",
            description: "Handle millions of requests without manual intervention.",
            size: "lg:col-span-1",
        },
        {
            icon: <Code className="w-6 h-6 text-emerald-400" />,
            title: "Developer First",
            description: "Intuitive SDKs and comprehensive documentation.",
            size: "lg:col-span-2",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1
            },
        },
    };

    return (
        <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        <span className="text-slate-100">Engineered for </span>
                        <span className="text-gradient-accent">Scale</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Everything you need to build world-class AI applications,
                        packaged in a powerful, developer-friendly platform.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`glass-premium rounded-2xl p-8 ${feature.size}`}
                        >
                            <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
