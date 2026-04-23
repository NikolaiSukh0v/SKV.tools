export default function CodePreview() {
  const code = `const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};`;

  return (
    <div className="relative rounded-lg border border-purple-500/20 bg-[#0a0a0f]/80 backdrop-blur-sm overflow-hidden">
      {/* Monaco-style tab */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-purple-500/10 bg-[#050509]/60">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-xs text-zinc-500 font-mono">memoize.js</span>
      </div>

      {/* Code content */}
      <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
        <pre className="text-zinc-300">
          {code.split('\n').map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-zinc-600 select-none w-6 text-right">{i + 1}</span>
              <span className="text-zinc-300">
                {line.includes('const') && <span className="text-purple-400">const</span>}
                {line.includes('return') && <span className="text-purple-400">return</span>}
                {line.includes('new Map') && <><span className="text-purple-400">new</span> <span className="text-cyan-400">Map</span></>}
                {line.includes('JSON.stringify') && <span className="text-cyan-400">JSON</span>}
                {!line.includes('const') && !line.includes('return') && !line.includes('new Map') && !line.includes('JSON.stringify') && line}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
