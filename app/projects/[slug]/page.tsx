'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu, Zap, ArrowLeft, ChevronRight, Package,
    BookOpen, Code, Info, CircuitBoard, List, Shield
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PROJECTS } from '@/lib/projects';

export default function ProjectManual() {
    const { slug } = useParams();
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white font-black uppercase">
                <div className="ghost-background" />
                <div className="ghost-grid" />
                <div className="text-center">
                    <h1 className="text-4xl mb-4">404 // NODE_NOT_FOUND</h1>
                    <Link href="/projects" className="text-orange-400 hover:underline">Return to Hub</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen p-8 md:p-16 relative">
            <div className="ghost-background" />
            <div className="ghost-grid" />
            <div className="scanline" />

            <div className="max-w-5xl mx-auto">
                <header className="mb-12">
                    <Link href="/projects" className="text-[10px] font-black uppercase flex items-center gap-2 text-white/40 hover:text-orange-400 transition-colors mb-8">
                        <ArrowLeft size={14} /> Back to Projects
                    </Link>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <div className="flex items-center gap-4 text-orange-400 mb-2 font-black uppercase tracking-widest text-[10px]">
                                <span className="flex items-center gap-2"><BookOpen size={14} /> Technical_Manual_v1.0</span>
                                <span className="w-1 h-1 bg-white/20 rounded-full" />
                                <span className={`px-2 py-0.5 border border-orange-500/20 rounded text-[9px] ${project.difficulty === 'Beginner' ? 'text-emerald-400' :
                                    project.difficulty === 'Intermediate' ? 'text-yellow-400' : 'text-rose-400'
                                    }`}>
                                    {project.difficulty}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">
                                {project.name.split(' ').map((word, i) => (
                                    <span key={i} className={i === project.name.split(' ').length - 1 ? 'text-orange-400' : ''}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>
                        </div>
                        <div className="px-4 py-2 border border-white/10 rounded-lg glass-panel text-[10px] font-black uppercase tracking-widest text-white/40">
                            Slug: {project.slug}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section className="glass-panel neon-border p-8 border-orange-500/20">
                            <h2 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm mb-6">
                                <Info size={18} className="text-orange-400" />
                                Project_Overview
                            </h2>
                            <p className="text-white/60 leading-relaxed font-medium">
                                {project.description}
                            </p>
                        </section>

                        {/* Custom Sections */}
                        {project.sections && project.sections.map((section, idx) => (
                            <section key={idx} className="glass-panel p-8 border border-white/10">
                                <h2 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm mb-6 text-orange-400">
                                    {section.title}
                                </h2>
                                <p className="text-white/60 leading-relaxed font-medium">
                                    {section.content}
                                </p>
                            </section>
                        ))}

                        {/* Circuit Diagram Placeholder */}
                        <section className="glass-panel p-8 border border-white/10">
                            <h2 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm mb-6">
                                <CircuitBoard size={18} className="text-orange-400" />
                                Wiring_Diagram
                            </h2>
                            <div className="aspect-video bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                                <CircuitBoard size={64} className="text-white/10 group-hover:text-orange-500/20 transition-colors" />
                                <span className="text-[10px] font-black uppercase text-white/20 mt-4 tracking-[0.5em]">Schematic_Preview_Offline</span>
                                {/* Decorative lines */}
                                <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
                                <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
                            </div>
                        </section>

                        {/* Instructions */}
                        <section className="glass-panel p-8 border border-white/10">
                            <h2 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm mb-8">
                                <List size={18} className="text-orange-400" />
                                Assembly_Instructions
                            </h2>
                            <div className="space-y-6">
                                {project.instructions.map((step, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="text-2xl font-black italic text-orange-400/20 group-hover:text-orange-400 transition-colors">
                                            {(i + 1).toString().padStart(2, '0')}
                                        </div>
                                        <div className="pt-2">
                                            <p className="text-white/60 font-medium leading-relaxed group-hover:text-white transition-colors">
                                                {step}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Code Snippet if exists */}
                        {project.code && (
                            <section className="glass-panel p-8 border border-white/10">
                                <h2 className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm mb-6">
                                    <Code size={18} className="text-orange-400" />
                                    Firmware_Implementation
                                </h2>
                                <div className="bg-black/50 rounded-xl p-6 border border-white/5 font-mono text-xs md:text-sm overflow-x-auto">
                                    <pre className="text-cyan-400/80">
                                        <code>{project.code}</code>
                                    </pre>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Prerequisite Section */}
                        {project.requirements && project.requirements.length > 0 && (
                            <div className="glass-panel p-6 border border-white/10 border-l-orange-500/50">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-4 flex items-center gap-2">
                                    <Shield size={14} /> Prerequisites
                                </h3>
                                <ul className="space-y-3">
                                    {project.requirements.map((req, i) => (
                                        <li key={i} className="text-[11px] font-bold text-white/50 leading-tight">
                                            • {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="glass-panel p-6 border border-white/10 neon-border border-orange-500/10">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                                <Package size={14} className="text-orange-400" /> Components_List
                            </h3>
                            <ul className="space-y-3">
                                {project.components.map((comp, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-white/70">
                                        <div className="w-1 h-1 bg-orange-400 rounded-full" />
                                        {comp}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-panel p-6 border border-white/10">
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                                <Zap size={14} className="text-cyan-400" /> Quick_Specs
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase">
                                    <span className="text-white/20">Voltage</span>
                                    <span className="text-white/60">3.3V - 5V</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold uppercase">
                                    <span className="text-white/20">Protocol</span>
                                    <span className="text-white/60">I2C / SPI</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold uppercase">
                                    <span className="text-white/20">Status</span>
                                    <span className="text-white/60 text-emerald-400">Stable</span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/projects"
                            className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 py-4 rounded-xl text-[10px] font-black uppercase hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all group"
                        >
                            All Projects <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <footer className="mt-24 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2"><Zap size={10} className="text-orange-400" /> Manual_Loaded</span>
                        <span className="flex items-center gap-2"><Cpu size={10} className="text-purple-400" /> GhostMicro_Protocol_Core</span>
                    </div>
                    <div>2026 // Technical Documentation</div>
                </footer>
            </div>
        </main>
    );
}
