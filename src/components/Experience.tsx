"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Award } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase size={14} />
            Career History & Impact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            10+ Years of <span className="gradient-text-blue">Technical Leadership</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            A decade of leading iOS & macOS engineering teams at Vartit Technology, building scalable architecture, and deploying high-impact Apple platform products.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-blue-500/20 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12 mb-20">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 ${
                  exp.isCurrent
                    ? "bg-blue-500 border-blue-900 shadow-lg shadow-blue-500/50 animate-pulse"
                    : "bg-slate-800 border-slate-900 group-hover:border-blue-500"
                } transition-colors`}
              />

              {/* Date Badge on Desktop Left Side */}
              <div className="hidden md:block absolute -left-44 top-1 w-32 text-right">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase block">
                  {exp.period}
                </span>
                <span className="text-[11px] text-gray-500 block mt-0.5">
                  {exp.location}
                </span>
              </div>

              {/* Glassmorphic Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border-white/10 hover:border-blue-500/30 transition-all">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-blue-400 font-semibold text-base mt-1">
                      {exp.company}
                    </div>
                  </div>

                  {/* Mobile Date indicator */}
                  <div className="md:hidden flex flex-col text-xs text-gray-400">
                    <span className="flex items-center gap-1 font-medium text-blue-400">
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-3 mb-6">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="glass-pill px-3 py-1 rounded-xl text-xs text-gray-300 border-white/5 hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section Header */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-6">
            <GraduationCap size={18} />
            <span>Academic Background & Qualifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{edu.degree}</h4>
                  <p className="text-xs font-medium text-blue-300 mt-0.5">{edu.field}</p>
                  <p className="text-xs text-gray-400 mt-2">{edu.institution} • {edu.location}</p>
                  <span className="inline-block mt-3 glass-pill px-2.5 py-0.5 rounded-lg text-[10px] font-semibold text-gray-300">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
