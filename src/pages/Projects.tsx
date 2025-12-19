import { useState } from "react";
import TerminalLayout from "../layouts/TerminalLayout";
import SystemPanel from "../components/SystemPanel";
import ProjectDetails from "./ProjectDetails"; // Import the reusable component
import { ChevronRight } from "lucide-react";

const PROJECTS_DATA = [
  
  {
    id: "uav_path_planning",
    title: "GP+SAC_UAV_PATH_PLANNING",
    domain: "Aerospace / Robotics / AI",
    role: "Researcher & Co-Author",
    stack: "Python | PyTorch | Genetic Programming | SAC",
    outcome: "Accelerated Convergence via Warm-Start Policy",
    problem: "Deep Reinforcement Learning (DRL) for UAVs often suffers from slow convergence and unstable training dynamics in unknown environments.",
    execLogic: "Introduced a Genetic Programming-seeded Soft Actor-Critic (GP+SAC) approach where GP 'warm-starts' the agent to prevent wasteful early exploration.",
    techLogic: "GP produces high-quality initial trajectories which are injected into the SAC replay buffer, optimizing entropy-regularized reinforcement learning without sacrificing path length (30.55 mean units).",
    impacts: [
      "Published in Journal of Intelligent Communication (Sept 2025).",
      "Outperformed FA-DQN baseline in convergence speed.",
      "Validated 0% tradeoff between rapid convergence and path efficiency."
    ]
  },
  // Add more project objects here...
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const activeProject = PROJECTS_DATA.find(p => p.id === selectedProjectId);

  // If a project is selected, show the detail view
  if (activeProject) {
    return (
      <ProjectDetails 
        project={activeProject} 
        onBack={() => setSelectedProjectId(null)} 
      />
    );
  }

  // Otherwise, show the directory list
  return (
    <TerminalLayout
      left={
        <div className="space-y-4">
          <h2 className="text-cyan-400 font-bold tracking-widest text-xs uppercase underline">System_Directory</h2>
          <p className="text-cyan-100/60 text-[11px]">Select a module to initialize deep-scan...</p>
          <div className="pt-4 border-t border-cyan-500/20 text-[10px] text-cyan-500/40">
            STATUS: READY<br/>
            FILESYSTEM: PORTFOLIO_OS_v1
          </div>
        </div>
      }
      right={
        <SystemPanel title="AVAILABLE_PROJECT_MODULES">
          <div className="space-y-3">
            {PROJECTS_DATA.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className="w-full flex items-center justify-between p-4 border border-cyan-500/20 bg-cyan-500/[0.02] hover:bg-cyan-500/[0.08] hover:border-cyan-400 group transition-all"
              >
                <span className="text-cyan-300 font-mono text-sm tracking-tighter flex items-center gap-3">
                  <ChevronRight size={14} className="text-cyan-500 group-hover:translate-x-1 transition-transform" />
                  {project.title}
                </span>
                <span className="text-[10px] text-cyan-500/50 uppercase">{project.domain}</span>
              </button>
            ))}
          </div>
        </SystemPanel>
      }
    />
  );
}