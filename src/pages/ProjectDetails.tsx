import { useState } from "react";
import TerminalLayout from "../layouts/TerminalLayout";
import SystemPanel from "../components/SystemPanel";
import { Info, Cpu, Activity, CheckCircle2, ArrowLeft } from "lucide-react";

interface Project {
  id: string;
  title: string;
  domain: string;
  role: string;
  stack: string;
  outcome: string;
  problem: string;
  execLogic: string;
  techLogic: string;
  impacts: string[];
}

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  const [isExecutive, setIsExecutive] = useState(true);

  return (
    <TerminalLayout
      left={
        <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[10px] text-cyan-500 hover:text-cyan-300 transition-colors uppercase mb-4 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Directory
          </button>

          <div className="border-l-4 border-cyan-400 pl-4">
            <h2 className="text-[10px] text-cyan-400/70 uppercase mb-1 tracking-widest">HUD Panel</h2>
            <div className="bg-cyan-500/20 p-1 px-2 rounded text-[10px] text-cyan-300 font-bold inline-block border border-cyan-400/40 mb-2">
              PROJECT:
            </div>
            <p className="text-xl text-cyan-200 font-bold tracking-tight drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
              {project.title}
            </p>
          </div>

          <div className="space-y-5 text-xs">
            <div>
              <p className="text-cyan-400/50 text-[9px] uppercase tracking-tighter">DOMAIN:</p>
              <p className="text-cyan-100 font-medium">{project.domain}</p>
            </div>
            <div>
              <p className="text-cyan-400/50 text-[9px] uppercase tracking-tighter">ROLE:</p>
              <p className="text-cyan-200">{project.role}</p>
            </div>
            <div>
              <p className="text-cyan-400/50 text-[9px] uppercase tracking-tighter">STACK:</p>
              <p className="text-cyan-300 italic">{project.stack}</p>
            </div>
            <div className="pt-4 border-t border-cyan-500/20">
              <p className="text-green-400/50 text-[9px] uppercase tracking-tighter">OUTCOME:</p>
              <p className="text-green-300 font-bold text-sm">{project.outcome}</p>
            </div>
          </div>
        </div>
      }
      right={
        <SystemPanel 
          title={`sys.output.stream --mode: ${isExecutive ? 'EXECUTIVE' : 'TECHNICAL'}`}
          onToggle={() => setIsExecutive(!isExecutive)}
          isExecutive={isExecutive}
        >
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* THE PROBLEM */}
            <div className="group border border-cyan-500/20 p-4 rounded bg-cyan-500/[0.02] hover:bg-cyan-500/[0.05] transition-all">
              <div className="flex justify-between items-center mb-2 text-[10px] text-cyan-400/80 uppercase font-bold">
                <span className="flex items-center gap-2"><Info size={12} /> THE_PROBLEM</span>
              </div>
              <p className="text-cyan-100 text-sm leading-relaxed">{project.problem}</p>
            </div>

            {/* APPROACH LOGIC */}
            <div className="group border border-cyan-500/20 p-4 rounded bg-cyan-500/[0.02] hover:bg-cyan-500/[0.05] transition-all">
              <div className="flex justify-between items-center mb-2 text-[10px] text-cyan-400/80 uppercase font-bold">
                <span className="flex items-center gap-2"><Cpu size={12} /> APPROACH_LOGIC</span>
              </div>
              <p className="text-cyan-100 text-sm leading-relaxed italic">
                {isExecutive ? project.execLogic : project.techLogic}
              </p>
            </div>

            {/* SYSTEM IMPACT */}
            <div className="group border border-cyan-500/20 p-4 rounded bg-cyan-500/[0.02] hover:bg-cyan-500/[0.05] transition-all">
              <div className="flex justify-between items-center mb-4 text-[10px] text-cyan-400/80 uppercase font-bold">
                <span className="flex items-center gap-2"><Activity size={12} /> SYSTEM_IMPACT</span>
              </div>
              <div className="space-y-2">
                {project.impacts.map((impact, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 p-2 rounded-full px-4">
                    <CheckCircle2 size={12} className="text-cyan-400" />
                    <span className="text-[11px] text-cyan-300">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SystemPanel>
      }
    />
  );
}

export { ProjectDetails };
