"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Layers, 
  CreditCard, 
  Wifi, 
  Activity, 
  Terminal, 
  ExternalLink, 
  ArrowUpRight,
  Sparkles,
  Smartphone
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

const ICON_MAP: Record<string, any> = {
  ShieldCheck,
  Layers,
  CreditCard,
  Wifi,
  Activity,
  Terminal
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "all", label: "All Works" },
    { id: "ios", label: "iOS Applications" },
    { id: "mdm", label: "iOS MDM & VPN Extensions" },
    { id: "architecture", label: "Architecture & Open Source" }
  ];

  const filteredProjects = activeTab === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            Featured iOS Apps & MDM Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="gradient-text-blue">iOS Engineering Portfolio</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Published iOS applications, enterprise iOS MDM profile configurations, Network Extension VPN filters, and clean architectures.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all relative ${
                  isActive
                    ? "text-white shadow-lg shadow-blue-600/20"
                    : "text-gray-400 hover:text-white glass-pill border-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const IconComponent = ICON_MAP[project.iconName] || Smartphone;
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass-card rounded-3xl p-6 border-white/10 hover:border-blue-500/40 cursor-pointer flex flex-col justify-between group transition-all"
                >
                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                        <IconComponent size={24} />
                      </div>
                      <span className="glass-pill px-3 py-1 rounded-xl text-[11px] font-semibold text-blue-300 border-blue-500/20">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={18}
                        className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </h3>
                    <p className="text-xs text-blue-400 font-medium mt-1">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed mt-3 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tech Tags & Action */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    {project.metrics && (
                      <div className="mb-3 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {project.metrics}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="glass-pill px-2.5 py-1 rounded-lg text-[10px] text-gray-300 border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="glass-pill px-2 py-1 rounded-lg text-[10px] text-gray-400">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
