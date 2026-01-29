'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Library, Layout, ArrowRight, Cpu, Zap, Activity } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <main className="min-h-screen relative flex flex-col items-center justify-center p-8 overflow-hidden">
            <div className="ghost-background" />
            <div className="ghost-grid" />
            <div className="scanline" />

            {/* Hero Section */}
            <div className="relative z-10 text-center mb-16 max-w-4xl mx-auto">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-3 text-cyan-400 mb-6 font-black uppercase tracking-[0.5em] text-xs md:text-sm"
                >
                    <Cpu size={16} /> System_Online_v2.0
                </motion.div>

                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none mb-8">
                    Ghost
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Micro
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/40 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
                >
                    The centralized nexus for high-fidelity IoT modules and mission-critical libraries.
                    Enter the ecosystem.
                </motion.p>
            </div>

            {/* Portals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-10">
                {/* Library Portal */}
                <Link href="/library" className="group">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="h-full glass-panel neon-border p-10 flex flex-col items-center text-center hover:bg-white/5 transition-all relative overflow-hidden group-hover:border-cyan-500/50"
                    >
                        <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Library size={40} className="text-cyan-400" />
                        </div>
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-cyan-400 transition-colors">
                            Library_Hub
                        </h2>
                        <p className="text-white/40 text-sm font-medium mb-8 leading-relaxed">
                            Access the core repositories. Drivers, protocols, and essential sensor libraries for the Ghost ecosystem.
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                            Access_Repository <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                </Link>

                {/* Projects Portal */}
                <Link href="/projects" className="group">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="h-full glass-panel neon-border p-10 flex flex-col items-center text-center hover:bg-white/5 transition-all relative overflow-hidden border-orange-500/20 group-hover:border-orange-500/50"
                    >
                        <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Layout size={40} className="text-orange-400" />
                        </div>
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-orange-400 transition-colors">
                            Project_Nodes
                        </h2>
                        <p className="text-white/40 text-sm font-medium mb-8 leading-relaxed">
                            Explore 15+ IoT mission modules. Comprehensive technical manuals, schematics, and tutorials.
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-400">
                            Initialize_Projects <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                </Link>
            </div>

            {/* Footer System Status */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-0 w-full text-center flex justify-center gap-8 text-[10px] font-bold text-white/10 uppercase tracking-[0.3em]"
            >
                <div className="flex items-center gap-2"><Activity size={10} /> Network_Stable</div>
                <div className="flex items-center gap-2"><Zap size={10} /> Core_Active</div>
            </motion.footer>
        </main>
    );
}
