import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  ChevronLeft, 
  GraduationCap, 
  BarChart3, 
  Zap,
  Shield,
  Activity
} from "lucide-react";
import Navigation from "../components/Navigation";

export default function Experience() {
  const [isExecutive, setIsExecutive] = useState(true);

  const logs = [
    {
      id: "LOG_001",
      title: "MiWay Hackathon",
      org: "MiWay Insurance",
      date: "JUN 2025",
      loc: "Pretoria, GP",
      type: "CORPORATE",
      color: "border-red-500",
      glow: "shadow-[0_0_10px_rgba(6,182,212,0.3)]",
      text: "Selected to participate in the MiWay Actuarial Hackathon 2025, a competitive, week-long event focused on solving real-world insurance challenges through data-driven modelling and strategic pricing.",
      tech: ["Actuarial Modelling", "Strategic Pricing", "Risk Assessment"]
    },
    {
      id: "LOG_002",
      title: "Quants Exploration Programme",
      org: "Nedbank",
      date: "DEC 2023",
      loc: "Johannesburg, GP",
      type: "QUANTITATIVE",
      color: "border-purple-500",
      glow: "shadow-[0_0_10px_rgba(168,85,247,0.3)]",
      text: "Part of a team developing a data-driven property investment model, leveraging advanced analytics and quantitative risk management techniques to assess investment viability. Analysed real-world financial scenarios while collaborating with industry professionals.",
      tech: ["Investment Models", "Quantitative Risk", "Analytics"]
    },
    {
      id: "LOG_003",
      title: "SI Facilitator",
      org: "North-West University",
      date: "JUL 2023 — NOV 2023",
      loc: "Potchefstroom, NW",
      type: "ACADEMIC",
      color: "border-yellow-500",
      glow: "shadow-[0_0_10px_rgba(217,70,239,0.3)]",
      text: "Conducted structured review sessions for groups of up to 30 first-year Computer Science students. Enhanced student engagement by introducing interactive learning techniques, leading to higher retention rates.",
      tech: ["Computer Science", "Pedagogy", "Leadership"]
    },
    {
      id: "LOG_004",
      title: "Student Assistant",
      org: "North-West University",
      date: "AUG 2023 — NOV 2023",
      loc: "Potchefstroom, NW",
      type: "ACADEMIC",
      color: "border-green-500",
      glow: "shadow-[0_0_10px_rgba(217,70,239,0.3)]",
      text: "Graded 100+ Mathematics and Applied Mathematics first-year assignments per week. Maintained detailed and organized records of student performance for over 100 students to improve academic tracking.",
      tech: ["Data Management", "High-Volume Processing", "Math Ops"]
    }
  ];

  return (
    <main className="relative flex items-center justify-center p-4 md:p-8 min-h-screen z-10 font-mono">
      <div className="w-full max-w-4xl bg-[#0a0a0a]/90 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 overflow-hidden backdrop-blur-sm">
        
        <Navigation />

        {/* DATA HEADER */}
        <div className="border-b border-cyan-500/30 p-4 flex justify-between items-center bg-[#0d0d0d]/60">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-[10px] text-cyan-400 font-bold tracking-[0.2em] uppercase">Experience_Matrix_Scan</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsExecutive(!isExecutive)}>
                <span className={`text-[9px] ${isExecutive ? 'text-cyan-400' : 'text-cyan-400/40'}`}>EXEC</span>
                <div className="w-8 h-4 border border-cyan-500/50 rounded-full relative">
                  <div className={`absolute top-0.5 w-2.5 h-2.5 rounded-full transition-all ${isExecutive ? 'left-1 bg-cyan-400' : 'left-4 bg-purple-400'}`} />
                </div>
                <span className={`text-[9px] ${!isExecutive ? 'text-purple-400' : 'text-purple-400/40'}`}>TECH</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 h-[65vh]">
          {/* LEFT HUD: LEGEND */}
          <aside className="lg:col-span-3 p-6 border-r border-cyan-500/30 bg-cyan-500/[0.02] space-y-8">
            <div>
              <h3 className="text-[10px] text-cyan-400 font-bold mb-4 uppercase tracking-widest border-b border-cyan-500/20 pb-1">Type_Legend</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[9px] text-cyan-100/60"><Zap size={10} className="text-orange-400"/> CORPORATE</div>
                <div className="flex items-center gap-2 text-[9px] text-cyan-100/60"><BarChart3 size={10} className="text-purple-400"/> QUANTITATIVE</div>
                <div className="flex items-center gap-2 text-[9px] text-cyan-100/60"><GraduationCap size={10} className="text-pink-400"/> ACADEMIC</div>
              </div>
            </div>
            
            <div className="p-3 border border-cyan-500/10 bg-cyan-500/5 rounded">
              <p className="text-[8px] text-cyan-400/70 leading-relaxed italic uppercase font-bold">
                System_Note: High performance detected in academic and quantitative data processing.
              </p>
            </div>
          </aside>

          {/* MAIN STREAM: LOGS */}
          <section className="lg:col-span-9 p-6 overflow-y-auto custom-scrollbar bg-[#0d0d0d]/20">
            <div className="space-y-6">
              {logs.map((log) => (
                <div key={log.id} className={`group border border-transparent hover:border-cyan-500/20 transition-all duration-300 p-4 rounded-lg bg-white/[0.01]`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 w-1.5 h-4 border-l-2 ${log.color} ${log.glow}`} />
                      <div>
                        <span className="text-[8px] text-cyan-500/40 font-mono tracking-widest uppercase">{log.id}</span>
                        <h4 className="text-cyan-100 text-xs font-bold uppercase tracking-wider">{log.title}</h4>
                        <p className="text-cyan-400/80 text-[10px] font-bold">{log.org}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-cyan-100/40 font-mono tracking-tighter">{log.date}</p>
                      <p className="text-[8px] text-cyan-500/30 uppercase tracking-tighter">{log.loc}</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-cyan-100/70 leading-relaxed my-3 font-sans">
                    {log.text}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {log.tech.map((tag) => (
                      <span key={tag} className="text-[8px] px-2 py-0.5 border border-cyan-500/10 rounded text-cyan-500 bg-cyan-500/5 uppercase font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <div className="bg-[#0d0d0d] p-3 border-t border-cyan-500/20 flex justify-between items-center text-[9px] text-cyan-400/60 px-6">
          <span className="flex items-center gap-2 uppercase tracking-tighter">
            <Shield size={10} className="text-magenta-400"/> Operational_Node: 27.0.0.1
          </span>
          <span className="tracking-[0.2em] uppercase text-purple-400/60 font-bold">Authenticated_Access</span>
        </div>
      </div>
    </main>
  );
}