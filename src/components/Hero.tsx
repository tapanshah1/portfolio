"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  Layers,
  ChevronDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-44 sm:pt-36 lg:pt-40 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-blue-500/30 text-blue-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/10">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            iOS Team Lead & iOS MDM Specialist
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
            Crafting High-Performance <br className="hidden sm:inline" />
            <span className="gradient-text-blue block sm:inline mt-1 sm:mt-0">iOS Apps & MDM Solutions</span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-3xl mx-auto">
            {PERSONAL_INFO.bio}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Explore iOS Projects</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#experience"
            className="px-6 py-3.5 rounded-2xl glass-card text-gray-200 hover:text-white font-semibold text-sm border-white/10 transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Career Timeline</span>
          </a>
          
          <div className="flex items-center gap-2 pl-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl glass-pill text-gray-300 hover:text-white hover:border-blue-500/50 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl glass-pill text-gray-300 hover:text-white hover:border-blue-500/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        {/* Highlight Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 text-center border-white/10 hover:border-blue-500/30 transition-all flex flex-col items-center justify-center min-h-[110px]"
            >
              <div
                className={`font-extrabold text-white tracking-tight gradient-text-blue leading-snug px-1 ${
                  stat.value.length <= 4
                    ? "text-3xl sm:text-4xl"
                    : stat.value.length <= 14
                    ? "text-lg sm:text-xl font-extrabold"
                    : "text-sm sm:text-base font-bold"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-gray-400 mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3 text-xs text-gray-400"
        >
          <span className="glass-pill px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <Smartphone size={14} className="text-blue-400" />
            Swift 6 & SwiftUI
          </span>
          <span className="glass-pill px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-cyan-400" />
            iOS MDM & Network Extensions (VPN)
          </span>
          <span className="glass-pill px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <Layers size={14} className="text-purple-400" />
            MVVM & Clean Architecture
          </span>
          <span className="glass-pill px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <Terminal size={14} className="text-emerald-400" />
            App Store Connect & TestFlight
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 flex justify-center text-gray-500"
        >
          <a href="#experience" aria-label="Scroll Down">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
