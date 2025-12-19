import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, FolderKanban, CheckCircle2, Shield } from "lucide-react";
import Navigation from "../components/Navigation";

export default function Landing() {
  const [isExecutive, setIsExecutive] = useState(true);

  return (
    <main className="relative flex items-center justify-center p-4 md:p-8 min-h-screen z-10">
      <div className="w-full max-w-4xl bg-[#0a0a0a]/90 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 overflow-hidden backdrop-blur-sm">
        
        {/* NAVIGATION */}
        <Navigation />
        
        {/* HEADER BAR */}
        <div className="border-b border-cyan-500/30 p-4 flex justify-between items-center bg-[#0d0d0d]/60">
          <div className="flex items-center gap-3">
            
          </div>
          
          <div className="flex items-center gap-3">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setIsExecutive(!isExecutive)}
            >
              <span className="text-[10px] text-cyan-400/70 uppercase font-medium">
                EXECUTIVE
              </span>
              <div className={`w-12 h-6 rounded-full relative border border-cyan-500/60 transition-colors ${isExecutive ? 'bg-cyan-500/20' : 'bg-purple-500/20'}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full transition-all ${isExecutive ? 'left-0.5 bg-cyan-400' : 'right-0.5 bg-magenta-400'}`} />
              </div>
              <span className="text-[10px] text-purple-400/70 uppercase font-medium">
                TECHNICAL
              </span>
            </div>
            <span className="text-[10px] text-cyan-400 ml-2">
              mode: <span className="uppercase font-bold text-magenta-400">{isExecutive ? 'EXECUTIVE' : 'TECHNICAL'}</span>
            </span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT: HUD PANEL */}
          <aside className="lg:col-span-4 p-6 border-r border-cyan-500/30 bg-cyan-500/[0.02]">
            <h2 className="text-2xl text-cyan-300 uppercase mb-6 font-bold tracking-wide drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">HUD PANEL</h2>
            <div className="space-y-4 text-sm">
              
              <div className="border-l-4 border-cyan-400 pl-3">
                <p className="text-cyan-100 font-mono">OPERATOR: <span className="text-cyan-400 font-bold">Pule Nxasana</span></p>
              </div>
              <div className="border-l-4 border-purple-400 pl-3">
                <p className="text-cyan-100 font-mono">DOMAIN: <span className="text-purple-400 font-bold">ML / Data / Finance</span></p>
              </div>
              <div className="border-l-4 border-pink-400 pl-3">
                <p className="text-cyan-100 font-mono">ROLE: <span className="text-pink-400 font-bold">Student</span></p>
              </div>
            </div>
          </aside>

          {/* RIGHT: DATA STREAM */}
          <section className="lg:col-span-8 p-6 bg-[#0d0d0d]/40">
            <div className="flex justify-between items-center mb-6 bg-purple-950/20 p-2 border border-cyan-500/20 rounded">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <span className="text-[10px] text-cyan-400/80 italic">
                sys.output.stream --mode: <span className="text-magenta-400 uppercase font-bold">{isExecutive ? 'Executive' : 'Technical'}</span>
              </span>
            </div>

            <div className="space-y-6">
              {/* MODULE 01: SYSTEM STATUS */}
              <div className="group border border-cyan-500/20 p-4 rounded hover:bg-cyan-500/[0.05] hover:border-cyan-400/40 transition-all">
                <div className="flex items-center gap-2 mb-2 text-[10px] text-cyan-400/80">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(0,255,255,0.8)]" />
                  <span className="font-bold">SYSTEM_STATUS</span>
                </div>
                <p className="text-cyan-100 text-sm leading-relaxed">
                  {isExecutive 
                    ? "Portfolio terminal initialized. All systems operational."
                    : "React 18.3.1 | Vite 7.2.4 | TypeScript 5.9.3 | Tailwind CSS 4.0.0"}
                </p>
              </div>

              {/* MODULE 02: NAVIGATION MODULES */}
              <div className="group border border-purple-500/20 p-4 rounded hover:bg-purple-500/[0.05] hover:border-purple-400/40 transition-all">
                <div className="flex justify-between items-center mb-4 text-[10px] text-purple-400/80">
                  <span className="flex items-center gap-2 font-bold"><FolderKanban size={12}/> NAVIGATION_MODULES</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    to="/projects"
                    className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 p-3 rounded-lg px-4 hover:bg-magenta-500/20 hover:border-magenta-400/50 transition-all group"
                  >
                    <FolderKanban size={14} className="text-cyan-400" />
                    <span className="text-[11px] text-cyan-300 group-hover:text-magenta-300 font-medium">VIEW_PROJECT_MODULES</span>
                  </Link>
                  <Link 
                    to="/projects"
                    className="flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg px-4 hover:bg-magenta-500/20 hover:border-magenta-400/50 transition-all group"
                  >
                    <FolderKanban size={14} className="text-yellow-400" />
                    <span className="text-[11px] text-yellow-300 group-hover:text-magenta-300 font-medium">VIEW_EXPERIENCE_LOGS</span>
                  </Link>
                  <Link 
                    to="/about"
                    className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 p-3 rounded-lg px-4 hover:bg-pink-500/20 hover:border-pink-400/50 transition-all group"
                  >
                    <User size={14} className="text-purple-400" />
                    <span className="text-[11px] text-purple-300 group-hover:text-pink-300 font-medium">ABOUT_OPERATOR</span>
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex items-center gap-3 bg-pink-500/10 border border-pink-500/30 p-3 rounded-lg px-4 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all group"
                  >
                    <Mail size={14} className="text-pink-400" />
                    <span className="text-[11px] text-pink-300 group-hover:text-cyan-300 font-medium">OPEN_COMMUNICATION_CHANNEL</span>
                  </Link>
                </div>
              </div>

              {/* MODULE 03: QUICK STATS */}
              <div className="group border border-magenta-500/20 p-4 rounded hover:bg-magenta-500/[0.05] hover:border-magenta-400/40 transition-all">
                <div className="flex justify-between items-center mb-4 text-[10px] text-magenta-400/80">
                  <span className="flex items-center gap-2 font-bold"><CheckCircle2 size={12}/> QUICK_STATS</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-full px-4">
                    <CheckCircle2 size={12} className="text-cyan-400" />
                    <span className="text-[11px] text-cyan-300">Portfolio system operational</span>
                  </div>
                  <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 p-2 rounded-full px-4">
                    <CheckCircle2 size={12} className="text-green-400" />
                    <span className="text-[11px] text-green-300">All modules accessible</span>
                  </div>
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/40 p-2 rounded-full px-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(255,0,0,0.8)]" />
                    <span className="text-[11px] text-red-400 font-bold">CAUTION: INTERNAL ACCESS ONLY</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <div className="bg-[#0d0d0d] p-2 border-t border-cyan-500/20 flex justify-between items-center text-[9px] text-cyan-400/60 px-6">
          <span className="flex items-center gap-2 uppercase tracking-tighter">
            <Shield size={10} className="text-magenta-400"/> Caution: Internal Access Only
          </span>
          <span className="tracking-[0.2em] uppercase text-purple-400/60">© 2025 Portfolio_OS</span>
        </div>
      </div>
    </main>
  );
}
