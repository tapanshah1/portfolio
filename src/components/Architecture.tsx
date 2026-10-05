"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  KeyRound, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Architecture() {
  const architectures = [
    {
      id: "mdm-arch",
      title: "iOS Enterprise MDM & MicroMDM Infrastructure",
      badge: "MicroMDM Server (Golang) + Apple cfgutil CLI",
      icon: Cpu,
      iconColor: "text-blue-400",
      description: "Production enterprise MDM server ecosystem automating zero-touch iOS device enrollment, SCEP identity certificates, APNS push notifications, and custom payload profile distribution.",
      flow: ["Supervised Device", "Apple cfgutil CLI", "MicroMDM Server", "APNS Gateway", "SCEP Certificates", "MDM Payload Rules"]
    },
    {
      id: "vpn-arch",
      title: "Low-Latency iOS Network Tunnel & Go SOCKS5 Engine",
      badge: "NEPacketTunnelProvider + Go-Mobile Proxy",
      icon: ShieldCheck,
      iconColor: "text-cyan-400",
      description: "Low-overhead SOCKS5 proxy engine built in Go (Golang) linked with iOS NEPacketTunnelProvider via Go-Mobile cross-compiled C-Go wrappers, routing IP traffic with DNS over HTTPS (DoH) filtering.",
      flow: ["TUN Interface", "Swift PacketTunnel", "Go-Mobile SOCKS5 Proxy", "DoH DNS Resolver", "Remote Endpoint"]
    },
    {
      id: "macos-arch",
      title: "macOS C++ Universal Binary System Architecture",
      badge: "C++ (x86_64 + arm64) + WebRTC + gloox XMPP",
      icon: Terminal,
      iconColor: "text-emerald-400",
      description: "Native C++ and Objective-C dual-slice Universal Binary executing on Intel and Apple Silicon Macs without Rosetta overhead. Features 48kHz RtAudio capture, pre-compiled WebRTC engines, and gloox XMPP.",
      flow: ["RtAudio 48kHz Capture", "Native C++ Core", "WebRTC Video/Audio", "gloox XMPP Protocol", "AES-128 Storage"]
    },
    {
      id: "coreml-arch",
      title: "On-Device Core ML & Screen Broadcast Pipeline",
      badge: "Core ML (.mlmodelc) + ReplayKit Extension",
      icon: Zap,
      iconColor: "text-amber-400",
      description: "Real-time content detection pipeline using on-device Core ML model loading (.mlmodelc), Vision framework, ReplayKit Screen Broadcast Extension (RPBroadcastSampleHandler), and dynamic WKWebView DOM image blurring.",
      flow: ["ReplayKit Capture", "Vision Framework", "Core ML Classifier", "CoreImage Gaussian Blur", "DOM Filtering"]
    },
    {
      id: "security-arch",
      title: "Cross-Platform AES-128 Encryption & Payment Engine",
      badge: "CommonCrypto (CCCrypt) + App Store Server v2",
      icon: KeyRound,
      iconColor: "text-purple-400",
      description: "Cryptographic engine leveraging CommonCrypto (CCCrypt AES-128) with PKCS7 padding for secure string and file chunk encryption, alongside JWS signature verification for App Store Server Notifications v2.",
      flow: ["Raw Payload", "CommonCrypto CCCrypt", "PKCS7 Padding", "KeyChain Access", "App Store JWS Validation"]
    },
    {
      id: "spm-arch",
      title: "Modular Swift 6 SPM & XCFramework Architecture",
      badge: "Swift 6 Concurrency + os_log + SwiftUI AVFoundation",
      icon: Layers,
      iconColor: "text-pink-400",
      description: "Author of SwiftOSLogger & BarcodeScanner open-source packages. Engineered with Swift 6 strict concurrency, multi-destination background rotating loggers, and pure SwiftUI AVFoundation camera pipelines.",
      flow: ["Swift 6 Concurrency", "os_log Logger", "Thread-Safe Rotating Queue", "AVFoundation Pipeline", "SPM / XCFramework"]
    }
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#0a0b12]">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="glass-pill px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers size={14} className="text-blue-400" />
            <span>System Architecture & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Production-Grade <br />
            <span className="gradient-text-blue">System Architecture Blueprints</span>
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            High-performance architectural patterns built over 10+ years of engineering iOS Network Extensions, MicroMDM servers, C++ native modules, Core ML pipelines, and security infrastructure.
          </p>
        </div>

        {/* Architectures Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {architectures.map((arch, index) => {
            const IconComponent = arch.icon;
            return (
              <motion.div
                key={arch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-7 border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent size={24} className={arch.iconColor} />
                    </div>
                    <span className="glass-pill px-3 py-1 rounded-xl text-[11px] font-semibold text-blue-300 border-blue-500/20">
                      {arch.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                    {arch.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {arch.description}
                  </p>
                </div>

                {/* Data Flow Pills */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Zap size={12} className="text-amber-400" />
                    <span>Architectural Data Pipeline</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {arch.flow.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-center gap-1.5">
                        <span className="glass-pill px-2.5 py-1 rounded-lg text-[11px] text-gray-200 bg-white/5 border-white/10 font-mono">
                          {step}
                        </span>
                        {stepIdx < arch.flow.length - 1 && (
                          <span className="text-blue-400 font-bold text-[10px]">➔</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Freelance & Leadership Consulting Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-panel rounded-3xl p-8 sm:p-10 border-blue-500/30 relative overflow-hidden bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="glass-pill px-3 py-1 rounded-full inline-flex items-center gap-1.5 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Freelance & Senior Leadership Roles</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need System Architecture Expertise for Your Product?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
                Whether you are hiring for an **iOS Team Lead / Senior Systems Architect** position or seeking a **Freelance Technical Consultant** to architect enterprise MDM, VPN extensions, or Core ML computer vision solutions, I deliver production-ready systems.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>iOS MDM & MicroMDM Server Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>iOS VPN & Network Extensions (Go SOCKS5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>Core ML On-Device AI & Screen Broadcast</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>macOS C++ Universal Binary Development</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Hire for Freelance / Full-Time</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="px-6 py-3.5 rounded-2xl glass-card text-gray-200 hover:text-white font-semibold text-sm border-white/10 transition-all text-center"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
