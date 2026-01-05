'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download, Search, Cpu, Zap, Library, Archive,
  ChevronRight, ExternalLink, Filter, Code, Info
} from 'lucide-react';

const LIBRARIES = [
  { name: 'Adafruit_BME280', file: 'Adafruit_BME280_Library-master.zip', category: 'Sensor', desc: 'Driver for BME280 Humidity, Barometric Pressure & Temp Sensor.' },
  { name: 'Adafruit_GFX', file: 'Adafruit-GFX-Library-master.zip', category: 'Display', desc: 'Core graphics library for all Adafruit displays.' },
  { name: 'Adafruit_Sensor', file: 'Adafruit_Sensor-master.zip', category: 'Core', desc: 'Common sensor abstraction layer used by many Adafruit drivers.' },
  { name: 'Adafruit_SSD1306', file: 'Adafruit_SSD1306-master.zip', category: 'Display', desc: 'Driver for SSD1306 OLED displays (128x64, 128x32).' },
  { name: 'ArduinoJson', file: 'ArduinoJson-7.x.zip', category: 'Data', desc: 'Efficient JSON serialization/deserialization for embedded systems.' },
  { name: 'DallasTemperature', file: 'Arduino-Temperature-Control-Library-master.zip', category: 'Sensor', desc: 'Control library for DS18B20 temperature sensors.' },
  { name: 'DHT Sensor', file: 'DHT-sensor-library-master.zip', category: 'Sensor', desc: 'Arduino library for DHT11, DHT22 and similar sensors.' },
  { name: 'ESP32Servo', file: 'ESP32Servo-master.zip', category: 'Actuator', desc: 'Servo motor control specifically optimized for ESP32.' },
  { name: 'LiquidCrystal_I2C', file: 'LiquidCrystal_I2C-master.zip', category: 'Display', desc: 'Driver for I2C character LCDs (16x2, 20x4).' },
  { name: 'OneWire', file: 'OneWire-master.zip', category: 'Protocol', desc: 'Protocol library for Maxim/Dallas 1-Wire devices.' },
  { name: 'PubSubClient', file: 'pubsubclient-master.zip', category: 'Network', desc: 'MQTT 3.1.1 client for Arduino/ESP32 platforms.' },
  { name: 'PZEM-004T v3', file: 'PZEM-004T-v30-master.zip', category: 'Power', desc: 'Interface library for PZEM-004T V3.0 Energy Monitors.' },
  { name: 'MFRC522 (RFID)', file: 'rfid-master.zip', category: 'Security', desc: 'Library for MFRC522 based RFID readers.' },
];

const CategoryBadge = ({ category }: { category: string }) => {
  const colors: Record<string, string> = {
    'Sensor': 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
    'Display': 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
    'Data': 'text-purple-400 border-purple-400/20 bg-purple-400/5',
    'Actuator': 'text-orange-400 border-orange-400/20 bg-orange-400/5',
    'Network': 'text-blue-400 border-blue-400/20 bg-blue-400/5',
    'Power': 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
    'Protocol': 'text-rose-400 border-rose-400/20 bg-rose-400/5',
    'Core': 'text-slate-400 border-slate-400/20 bg-slate-400/5',
  };
  return (
    <span className={`text-[10px] font-black uppercase px-2 py-0.5 border rounded-sm ${colors[category] || 'text-white'}`}>
      {category}
    </span>
  );
};

export default function LibraryHub() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(LIBRARIES.map(l => l.category)))];

  const filtered = LIBRARIES.filter(lib => {
    const matchesSearch = lib.name.toLowerCase().includes(search.toLowerCase()) ||
      lib.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || lib.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen p-8 md:p-16 relative">
      <div className="ghost-background" />
      <div className="ghost-grid" />
      <div className="scanline" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-3 text-cyan-400 mb-2"
            >
              <Library size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Centralized_Repository</span>
            </motion.div>
            <h1 className="text-6xl font-black italic tracking-tighter text-white uppercase leading-none">
              Ghost<span className="text-cyan-400">Library</span>_V1
            </h1>
            <p className="text-white/40 mt-4 max-w-lg text-sm font-medium">
              The centralized hub for mission-critical Arduino libraries. Optimized for GhostMicro ecosystems and high-fidelity sensor integration.
            </p>
          </div>

          <div className="w-full md:w-96 space-y-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search modules or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-xl text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-mono"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border transition-all
                                        ${selectedCategory === cat ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((lib, idx) => (
              <motion.div
                layout
                key={lib.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-panel neon-border p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Archive size={80} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <CategoryBadge category={lib.category} />
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest font-mono">ID: {idx.toString().padStart(3, '0')}</div>
                  </div>

                  <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
                    {lib.name}
                  </h3>

                  <p className="text-sm text-white/40 mb-8 flex-1 font-medium leading-relaxed">
                    {lib.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-bold text-white/20 font-mono">
                      {lib.file.length > 20 ? lib.file.substring(0, 17) + '...' : lib.file}
                    </div>
                    <a
                      href={`/libraries/${lib.file}`}
                      download
                      className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs font-black uppercase hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all group/btn"
                    >
                      <Download size={14} className="group-hover/btn:animate-bounce" />
                      Download
                    </a>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Status */}
        <footer className="mt-24 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><Zap size={10} className="text-cyan-400" /> System_Ready</span>
            <span className="flex items-center gap-2"><Code size={10} className="text-purple-400" /> v1.0.2_Production</span>
          </div>
          <div>2026 // GhostMicro Ecosystem</div>
        </footer>
      </div>
    </main>
  );
}
