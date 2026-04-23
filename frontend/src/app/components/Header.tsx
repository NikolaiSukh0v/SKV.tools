export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-cyan-500/20 backdrop-blur-xl bg-[#050509]/80">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
              <span className="text-cyan-400 font-mono" style={{ textShadow: '0 0 10px rgba(0, 242, 255, 0.5)' }}>S</span>
            </div>
          </div>
          <h1
            className="font-mono tracking-tight text-white/90"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              textShadow: '0 0 20px rgba(0, 242, 255, 0.3)'
            }}
          >
            SKV | jsmemo
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://sukhov.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm text-sm font-mono"
          >
            Portfolio
          </a>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-purple-500/30 text-white hover:from-cyan-500/30 hover:to-purple-600/30 transition-all duration-300 backdrop-blur-sm text-sm font-mono">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
