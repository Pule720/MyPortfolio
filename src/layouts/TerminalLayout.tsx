import Navigation from "../components/Navigation";

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function TerminalLayout({ left, right }: Props) {
  return (
    <main className="relative flex items-center justify-center p-4 md:p-8 min-h-screen z-10">
      <div className="w-full max-w-4xl bg-[#0a0a0a]/90 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 overflow-hidden backdrop-blur-sm">
        {/* NAVIGATION */}
        <Navigation />
        
        <div className="min-h-screen px-8 py-6 text-cyan-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-cyan-400 text-lg drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">INTELLIGENCE_TERMINAL_v1.0</h1>
              <p className="text-xs text-purple-400/70">OPERATOR: GRAD_STUDENT_CS</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-magenta-400/70">EXECUTIVE_VIEW</span>
              <div className="w-10 h-5 bg-cyan-500/30 rounded-full border border-cyan-400/50" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <aside className="col-span-4 hud-panel p-5">{left}</aside>
            <section className="col-span-8 space-y-6">{right}</section>
          </div>
          <footer className="mt-6 text-xs text-cyan-400/50">CAUTION: INTERNAL ACCESS ONLY</footer>
        </div>
      </div>
    </main>
  );
}
