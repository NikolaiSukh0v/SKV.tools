import { Code2, Cpu, Sparkles, Grid3x3, Settings, Home, Linkedin, Github, FileText } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Code2, label: 'JS.memo', href: '#jsmemo' },
    { icon: Cpu, label: 'Logic Sim', href: '#logic' },
    { icon: Sparkles, label: 'Shader Lab', href: '#shader' },
    { icon: Grid3x3, label: 'All Tools', href: '#tools' },
    { icon: Settings, label: 'Settings', href: '#settings' },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-cyan-500/20 backdrop-blur-xl bg-gradient-to-b from-indigo-950/40 to-[#050509]/80 z-40">
      <div className="h-full flex flex-col p-4">
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href || '#'}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                  ${item.active
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 text-cyan-300 shadow-[inset_0_0_20px_rgba(0,242,255,0.1)]'
                    : 'text-zinc-400 hover:text-cyan-300 hover:bg-cyan-500/5 border border-transparent hover:border-cyan-500/20'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${item.active ? 'text-cyan-400' : 'group-hover:text-cyan-400'} transition-colors`} />
                <span className="font-mono text-sm">{item.label}</span>
                {item.active && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4">
          {/* Social Links */}
          <div className="p-4 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-indigo-950/20 backdrop-blur-sm">
            <div className="text-xs font-mono text-zinc-400 mb-3">Connect</div>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono">GitHub</span>
              </a>
              <a
                href="/path-to-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <FileText className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono">Resume / CV</span>
              </a>
            </div>
          </div>

          {/* Status */}
          <div className="p-4 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-indigo-950/30 backdrop-blur-sm">
            <div className="text-xs font-mono text-zinc-400 mb-1">Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <span className="text-sm text-emerald-300 font-mono">All Systems Online</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
