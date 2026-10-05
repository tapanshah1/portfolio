"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Download,
  MessageSquare
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare size={14} />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="gradient-text-blue">Touch</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Available for **Full-Time Senior Roles** (iOS Team Lead, Apple Platforms Architect) and **Freelance / Contract Consulting** (iOS Network Extensions, Enterprise MDM, C++ Universal Binaries, Core ML AI Integrations).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Direct Connect</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl glass-pill border-white/5 hover:border-blue-500/30 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Email Address</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-pill border-white/5 hover:border-blue-500/30 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      linkedin.com/in/tapan-shah-ba455678
                    </span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass-pill border-white/5 hover:border-blue-500/30 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">GitHub Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      github.com/tapanshah1
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-white/10 bg-gradient-to-br from-blue-900/20 to-indigo-900/20">
              <h4 className="text-lg font-bold text-white mb-2">Executive Resume</h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Download a PDF copy of my complete resume including team leadership roles, technical skills, and educational qualifications.
              </p>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Tapan_Shah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <Download size={16} />
                <span>Download Tapan Shah Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center glass-pill rounded-2xl border-emerald-500/30"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-gray-300 mt-2">
                  Thank you for reaching out. I will get back to your inquiry promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-semibold text-blue-400 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full glass-pill rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full glass-pill rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="iOS Team Lead Opportunity / iOS MDM Consulting"
                    className="w-full glass-pill rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Tapan, I would love to discuss a project..."
                    className="w-full glass-pill rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 border-white/10 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
