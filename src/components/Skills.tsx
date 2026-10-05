"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  FileCode, 
  Terminal, 
  Cpu, 
  Settings, 
  KeyRound, 
  Share2, 
  Boxes, 
  Package, 
  CheckCircle2, 
  Zap, 
  TestTube2, 
  CloudUpload, 
  GitBranch, 
  Wrench,
  Search,
  Code
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

const SKILL_ICONS: Record<string, any> = {
  Code2,
  Layout,
  FileCode,
  Terminal,
  Cpu,
  Settings,
  KeyRound,
  Share2,
  Boxes,
  Package,
  CheckCircle2,
  Zap,
  TestTube2,
  CloudUpload,
  GitBranch,
  Wrench
};

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code size={14} />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Core <span className="gradient-text-blue">Skills & Ecosystem</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A comprehensive matrix of technical proficiencies across modern Swift, low-level macOS APIs, system architecture, and release engineering.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative glass-card rounded-2xl border-white/10 p-1 flex items-center">
            <Search size={18} className="text-gray-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Swift, MDM, Combine, XCTest)..."
              className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const filteredSkills = cat.skills.filter(
              (s) =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.description.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredSkills.length === 0 && searchQuery) return null;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border-white/10"
              >
                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {cat.category}
                </h3>
                <p className="text-xs text-gray-400 mb-6">{cat.description}</p>

                <div className="space-y-4">
                  {filteredSkills.map((skill) => {
                    const IconComponent = SKILL_ICONS[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="p-4 rounded-2xl glass-pill border-white/5 hover:border-blue-500/30 transition-all flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                                skill.level === "Expert"
                                  ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                  : skill.level === "Advanced"
                                  ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                  : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
