import ToolCard from '../components/ToolCard';
import CodePreview from '../components/CodePreview';
import { Code2, Cpu, Sparkles, Database, Zap, Terminal } from 'lucide-react';

export default function Home() {
    function getTools(){

    }
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <h2
          className="text-4xl mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono"
          style={{ textShadow: '0 0 30px rgba(0, 242, 255, 0.3)' }}
        >
          Developer Tools Ecosystem
        </h2>
        <p className="text-zinc-400 font-mono text-sm max-w-2xl">
          Ultra-modern suite of engineering tools built for precision, performance, and elegance.
          Select a tool to begin.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-3 gap-6 auto-rows-[280px]">
        <ToolCard
          title="JS.memo"
          description="Advanced JavaScript memoization playground with real-time performance analytics and optimization suggestions."
          icon={Code2}
          gradient="rgba(0, 242, 255, 0.15)"
          status="Coming Soon"
          size="large"
        >
          <CodePreview />
        </ToolCard>

        {/*<ToolCard*/}
        {/*  title="Logic Simulator"*/}
        {/*  description="Design and simulate digital circuits with an interactive gate-level editor and timing analysis."*/}
        {/*  icon={Cpu}*/}
        {/*  gradient="rgba(188, 19, 254, 0.15)"*/}
        {/*  status="Ready"*/}
        {/*>*/}
        {/*  <div className="flex items-center justify-center h-24 rounded-lg border border-purple-500/20 bg-purple-950/20">*/}
        {/*    <div className="flex gap-2">*/}
        {/*      <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">*/}
        {/*        <div className="w-6 h-6 rounded border-2 border-purple-400" />*/}
        {/*      </div>*/}
        {/*      <div className="flex flex-col gap-2">*/}
        {/*        <div className="w-8 h-1.5 rounded-full bg-purple-400/40" />*/}
        {/*        <div className="w-8 h-1.5 rounded-full bg-purple-400/40" />*/}
        {/*      </div>*/}
        {/*      <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center">*/}
        {/*        <div className="w-6 h-6 rounded-full border-2 border-purple-400" />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</ToolCard>*/}

      {/*  <ToolCard*/}
      {/*    title="Shader Lab"*/}
      {/*    description="WebGL shader development environment with live preview, GLSL syntax highlighting, and GPU profiling."*/}
      {/*    icon={Sparkles}*/}
      {/*    gradient="rgba(168, 85, 247, 0.15)"*/}
      {/*    status="Beta"*/}
      {/*  >*/}
      {/*    <div*/}
      {/*      className="h-24 rounded-lg border border-purple-500/20 overflow-hidden"*/}
      {/*      style={{*/}
      {/*        background: 'linear-gradient(45deg, rgba(0, 242, 255, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',*/}
      {/*        animation: 'gradient 3s ease infinite',*/}
      {/*        backgroundSize: '200% 200%'*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </ToolCard>*/}

      {/*  <ToolCard*/}
      {/*    title="API Tester"*/}
      {/*    description="REST & GraphQL endpoint testing with automated mock generation and response validation."*/}
      {/*    icon={Database}*/}
      {/*    gradient="rgba(34, 211, 238, 0.15)"*/}
      {/*    status="Active"*/}
      {/*  />*/}

      {/*  <ToolCard*/}
      {/*    title="Performance Monitor"*/}
      {/*    description="Real-time application metrics, memory profiling, and bundle size analysis dashboard."*/}
      {/*    icon={Zap}*/}
      {/*    gradient="rgba(250, 204, 21, 0.15)"*/}
      {/*    status="Active"*/}
      {/*  />*/}

      {/*  <ToolCard*/}
      {/*    title="Terminal Plus"*/}
      {/*    description="Enhanced terminal emulator with command history, custom themes, and integrated AI assistance."*/}
      {/*    icon={Terminal}*/}
      {/*    gradient="rgba(52, 211, 153, 0.15)"*/}
      {/*    status="Coming Soon"*/}
      {/*  />*/}
      </div>

      {/* Stats Footer */}
      <div className="mt-12 grid grid-cols-4 gap-4">
        {[
          // { label: 'Active Sessions', value: '1,247', color: 'cyan' },
          { label: 'Tools Available', value: '1', color: 'purple' },
          // { label: 'Uptime', value: '99.9%', color: 'emerald' },
          { label: 'Performance', value: 'Optimal', color: 'cyan' }
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-xl border border-cyan-500/10 bg-gradient-to-br from-[#050509]/60 to-indigo-950/10 backdrop-blur-sm"
          >
            <div className="text-xs text-zinc-500 font-mono mb-1">{stat.label}</div>
            <div className={`text-2xl font-mono text-${stat.color}-400`}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
