import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="py-12 relative z-10 border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
            TS
          </div>
          <span className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with Next.js 15, TypeScript & Tailwind CSS.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-gray-400">
          <a href="#hero" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
