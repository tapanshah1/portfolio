"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, CheckCircle2, Layers, Award } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border-white/15 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white glass-pill border-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>

          {/* Header Badge */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <ShieldCheck size={16} />
            <span>{project.categoryLabel}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pr-10">
            {project.title}
          </h3>
          <p className="text-blue-300 text-sm font-medium mt-1">
            {project.subtitle}
          </p>

          {/* Metrics Banner */}
          {project.metrics && (
            <div className="mt-4 glass-pill px-4 py-2 rounded-xl inline-flex items-center gap-2 border-blue-500/30 text-amber-300 text-xs font-semibold">
              <Award size={16} className="text-amber-400" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Body Content */}
          <div className="mt-6 space-y-6 text-gray-300 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Overview & System Purpose
              </h4>
              <p>{project.fullDescription}</p>
            </div>

            {/* Architecture Diagram Steps */}
            {project.architectureDiagram && (
              <div className="glass-card rounded-2xl p-5 border-white/10">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Layers size={14} /> System Architecture Flow
                </h4>
                <div className="space-y-2">
                  {project.architectureDiagram.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-gray-200">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technical Highlights */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Key Technical Accomplishments
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="glass-pill px-3 py-1.5 rounded-xl text-xs text-blue-300 border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>App Store Link</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl glass-card text-gray-200 hover:text-white font-semibold text-xs border-white/10 transition-all flex items-center gap-2"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl glass-pill text-gray-400 hover:text-white font-semibold text-xs"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
