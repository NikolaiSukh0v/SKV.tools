import { Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative ml-64 mt-16 border-t border-cyan-500/20 backdrop-blur-xl bg-gradient-to-b from-[#050509]/80 to-indigo-950/20">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-cyan-400 font-mono text-sm" style={{ textShadow: '0 0 10px rgba(0, 242, 255, 0.5)' }}>S</span>
                </div>
              </div>
              <span className="font-mono text-white/90">SKV.tools</span>
            </div>
            <p className="text-xs text-zinc-500 font-mono leading-relaxed max-w-xs">
              Ultra-modern developer tools ecosystem built for precision, performance, and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-mono text-zinc-400 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://sukhov.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-500 hover:text-cyan-400 transition-colors font-mono group"
              >
                <ExternalLink className="w-3 h-3 group-hover:text-cyan-400" />
                Portfolio - sukhov.dev
              </a>
              <a href="#tools" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors font-mono">
                All Tools
              </a>
              <a href="#documentation" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors font-mono">
                Documentation
              </a>
              <a href="#api" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors font-mono">
                API Reference
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-mono text-zinc-400 mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-zinc-500 hover:text-cyan-400 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-cyan-500/5 border border-cyan-500/20 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transition-all">
                  <Linkedin className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-mono">LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-zinc-500 hover:text-cyan-400 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-purple-500/5 border border-purple-500/20 group-hover:bg-purple-500/10 group-hover:border-purple-500/40 transition-all">
                  <Github className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                </div>
                <span className="font-mono">GitHub Repository</span>
              </a>
              <a
                href="/path-to-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-zinc-500 hover:text-cyan-400 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-indigo-500/5 border border-indigo-500/20 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/40 transition-all">
                  <FileText className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
                </div>
                <span className="font-mono">Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-cyan-500/10 flex items-center justify-between">
          <p className="text-xs text-zinc-600 font-mono">
            © 2026 SKV.tools - Engineered with precision
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="text-xs text-zinc-600 hover:text-cyan-400 transition-colors font-mono">
              Privacy
            </a>
            <a href="#terms" className="text-xs text-zinc-600 hover:text-cyan-400 transition-colors font-mono">
              Terms
            </a>
            <a
              href="https://sukhov.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-500/70 hover:text-cyan-400 transition-colors font-mono"
            >
              by Sukhov.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
