import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  status?: string;
  children?: ReactNode;
  size?: 'normal' | 'large' | 'wide';
}

export default function ToolCard({
  title,
  description,
  icon: Icon,
  gradient,
  status,
  children,
  size = 'normal'
}: ToolCardProps) {
  const sizeClasses = {
    normal: 'col-span-1 row-span-1',
    large: 'col-span-1 row-span-2',
    wide: 'col-span-2 row-span-1'
  };

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border border-cyan-500/20
        bg-gradient-to-br from-[#050509]/90 to-indigo-950/20
        backdrop-blur-xl transition-all duration-500
        hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,242,255,0.15)]
        ${sizeClasses[size]}
      `}
      style={{
        boxShadow: '0 0 1px 1px rgba(0, 242, 255, 0.1)'
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${gradient}, transparent 70%)`
        }}
      />

      {/* Glow effect */}
      <div className="absolute -inset-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
           style={{ background: gradient }} />

      <div className="relative h-full flex flex-col p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 className="font-mono text-white/90">{title}</h3>
              {status && (
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <span className="text-xs text-emerald-300 font-mono">{status}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 mb-4 font-mono leading-relaxed">
          {description}
        </p>

        {/* Content */}
        {children && (
          <div className="flex-1 mt-auto">
            {children}
          </div>
        )}

        {/* Action button */}
        <button className="mt-4 w-full py-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 text-sm font-mono group-hover:border-cyan-400/50">
          Launch Tool →
        </button>
      </div>
    </div>
  );
}
