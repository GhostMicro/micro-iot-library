'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Zap, Search, ChevronRight, Layout, ArrowLeft,
    Settings, Shield, Activity, Monitor, Package
} from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

const CategoryBadge = ({ category }: { category: string }) => {
    const colors: Record<string, string> = {
        'Hub': 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
        'Sensor': 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
        'Security': 'text-rose-400 border-rose-400/20 bg-rose-400/5',
        'Power': 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
        'Actuator': 'text-orange-400 border-orange-400/20 bg-orange-400/5',
        'UI': 'text-purple-400 border-purple-400/20 bg-purple-400/5',
        'Network': 'text-blue-400 border-blue-400/20 bg-blue-400/5',
        'Control': 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
        'Web Server': 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
        'Sensors': 'text-teal-400 border-teal-400/20 bg-teal-400/5',
        'Cloud/IoT': 'text-sky-400 border-sky-400/20 bg-sky-400/5',
        'Power Management': 'text-amber-400 border-amber-400/20 bg-amber-400/5',
        'Communication': 'text-blue-400 border-blue-400/20 bg-blue-400/5',
        'Video': 'text-rose-400 border-rose-400/20 bg-rose-400/5',
        'Data Storage': 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',
        'Home Automation': 'text-fuchsia-400 border-fuchsia-400/20 bg-fuchsia-400/5',
    };
    return (
        <span className={`text-[10px] font-black uppercase px-2 py-0.5 border rounded-sm ${colors[category] || 'text-white'}`}>
            {category}
        </span>
    );
};

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
    const colors: Record<string, string> = {
        'Beginner': 'text-emerald-400',
        'Intermediate': 'text-yellow-400',
        'Advanced': 'text-rose-400',
    };
    return (
        <span className={`text-[8px] font-bold uppercase tracking-widest ${colors[difficulty] || 'text-white/40'}`}>
            {difficulty}
        </span>
    );
};

export default function ProjectsHub() {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

    const filtered = PROJECTS.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = filtered.slice(startIndex, startIndex + itemsPerPage);

    // Reset to page 1 when filter changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [search, selectedCategory]);

    return (
        <main className="min-h-screen p-8 md:p-16 relative">
            <div className="ghost-background" />
            <div className="ghost-grid" />
            <div className="scanline" />

            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex items-center gap-3 text-orange-400 mb-2"
                        >
                            <Layout size={20} />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Module_Ecosystem</span>
                        </motion.div>
                        <h1 className="text-6xl font-black italic tracking-tighter text-white uppercase leading-none">
                            Project<span className="text-orange-400">Nodes</span>_V1
                        </h1>
                        <div className="flex items-center gap-4 mt-4">
                            <Link href="/" className="text-[10px] font-black uppercase flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors">
                                <ArrowLeft size={14} /> Main System
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-96 space-y-4">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-orange-400 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all font-mono"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border transition-all
                                        ${selectedCategory === cat ? 'bg-orange-500 border-orange-500 text-black' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <AnimatePresence mode="popLayout">
                        {paginatedProjects.map((project, idx) => (
                            <motion.div
                                layout
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: (idx % itemsPerPage) * 0.05 }}
                                className="glass-panel neon-border p-8 group relative overflow-hidden border-orange-500/20 hover:border-orange-500/50 transition-all"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Package size={80} />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex flex-col gap-2">
                                            <CategoryBadge category={project.category} />
                                            <DifficultyBadge difficulty={project.difficulty} />
                                        </div>
                                        <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest font-mono">NODE: {idx.toString().padStart(3, '0')}</div>
                                    </div>

                                    <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter mb-2 group-hover:text-orange-400 transition-colors">
                                        {project.name}
                                    </h3>

                                    <p className="text-sm text-white/40 mb-8 flex-1 font-medium leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] font-bold text-white/20 font-mono">
                                            v1.0.0
                                        </div>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs font-black uppercase hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all group/btn"
                                        >
                                            View Manual
                                            <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Pagination UI */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-12 mb-24">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            className="w-10 h-10 flex items-center justify-center rounded bg-white/5 border border-white/10 text-white/40 hover:border-orange-500/50 hover:text-orange-400 disabled:opacity-20 disabled:pointer-events-none transition-all"
                        >
                            <ArrowLeft size={16} />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 flex items-center justify-center rounded font-black text-xs transition-all border
                  ${currentPage === page
                                        ? 'bg-orange-500 border-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                                        : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white'}`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            className="w-10 h-10 flex items-center justify-center rounded bg-white/5 border border-white/10 text-white/40 hover:border-orange-500/50 hover:text-orange-400 disabled:opacity-20 disabled:pointer-events-none transition-all"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}

                <footer className="mt-24 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2"><Zap size={10} className="text-orange-400" /> Modules_Online</span>
                        <span className="flex items-center gap-2"><Cpu size={10} className="text-purple-400" /> {PROJECTS.length}_Nodes_Registered</span>
                    </div>
                    <div>2026 // GhostMicro Projects</div>
                </footer>
            </div>
        </main>
    );
}
