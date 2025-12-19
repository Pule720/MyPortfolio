import { Fingerprint, ChevronRight, Shield } from "lucide-react";
import Navigation from "../components/Navigation";
import operatorPhoto from "../assets/pule_nedbank_pic.jpeg";

export default function About() {
  return (
    <main className="relative flex items-center justify-center p-4 md:p-8 min-h-screen z-10 font-mono overflow-hidden">
      
      {/* SUBTLE PARTICLE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-500 rounded-full animate-pulse"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 3 + 2 + 's',
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl bg-[#0a0a0a]/90 border border-cyan-900/50 rounded shadow-2xl overflow-hidden backdrop-blur-sm z-20">
        
        <Navigation />

        {/* SUB-HEADER STATUS */}
        <div className="border-b border-cyan-900/30 p-3 flex justify-between items-center bg-[#0d0d0d]">
          <div className="flex items-center gap-2">
            <Fingerprint size={14} className="text-cyan-500/50" />
            <span className="text-[10px] text-cyan-500/70 font-bold tracking-[0.2em] uppercase">
              Operator_Profile_v2.0
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[9px] text-cyan-100/40 uppercase">System_Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT PANEL: PROFILE HUD */}
          <aside className="lg:col-span-4 p-8 border-r border-cyan-900/30 bg-[#0d0d0d]/40 flex flex-col items-center">
            
            {/* MINIMALIST IMAGE CIRCLE */}
            <div className="relative mb-8">
              <div className="absolute -inset-2 border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="w-32 h-32 rounded-full bg-black border border-cyan-500/40 overflow-hidden relative shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <img 
                  src={operatorPhoto} 
                  alt="Operator" 
                  className="w-full h-full object-cover object-[center_18%] opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cyan-950 border border-cyan-500/50 px-3 py-0.5 rounded text-[8px] text-cyan-400 font-bold uppercase tracking-tighter shadow-lg">
                Uplink_Active
              </div>
            </div>

            {/* CORE METADATA */}
            <div className="w-full space-y-1">
              <div className="border-t border-cyan-900/30 py-4">
                <p className="text-[9px] text-cyan-500/50 uppercase tracking-widest mb-1">Background</p>
                <p className="text-[11px] text-cyan-100 font-medium">BSc (Hons) Computer Science </p>
              </div>
              <div className="border-t border-cyan-900/30 py-4">
                <p className="text-[9px] text-cyan-500/50 uppercase tracking-widest mb-1">Focus</p>
                <p className="text-[11px] text-cyan-100 font-medium uppercase tracking-tighter">Finance / ML Systems</p>
              </div>
              <div className="border-t border-cyan-900/30 py-4">
                <p className="text-[9px] text-cyan-500/50 uppercase tracking-widest mb-1">Location</p>
                <p className="text-[11px] text-cyan-100 font-medium uppercase tracking-tighter">Gauteng, ZA</p>
              </div>
            </div>
          </aside>

          {/* RIGHT PANEL: LOG ENTRIES */}
          <section className="lg:col-span-8 p-8 space-y-8 bg-black/20">
            
            <div className="space-y-4">
              <h3 className="text-[10px] text-cyan-500 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                <ChevronRight size={12} className="text-pink-500" /> Bio_Entry
              </h3>
              <p className="text-[13px] text-cyan-100/80 leading-relaxed font-sans border-l border-cyan-900/50 pl-6 py-1">
                Computer science honours student and Computer Science and Mathematics graduate interested in finance and data.
                Excited to use the skills I have gained in these spaces and make a tangible difference.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] text-cyan-500 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                <ChevronRight size={12} className="text-pink-500" /> Operational_Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-cyan-950/10 border border-cyan-900/30 rounded hover:border-cyan-500/30 transition-colors">
                  <p className="text-[10px] text-cyan-400 font-bold uppercase mb-2">Measure Impact</p>
                  <p className="text-[11px] text-cyan-100/60 leading-tight italic">
                    "Every action taken must serve a defined objective. I prioritize solutions that offer the highest degree of impact with the lowest margin of error."
                  </p>
                </div>
                <div className="p-4 bg-cyan-950/10 border border-cyan-900/30 rounded hover:border-cyan-500/30 transition-colors">
                  <p className="text-[10px] text-cyan-400 font-bold uppercase mb-2">Systems-First thinking</p>
                  <p className="text-[11px] text-cyan-100/60 leading-tight italic">
                    "Prioritize robust, reproducible methodologies over reactive trends. Build for long-term stability, clarity, and structural transparency"
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12">
               <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/30 via-cyan-500/10 to-transparent" />
               <p className="text-[7px] text-cyan-500/40 uppercase tracking-[0.4em] mt-4">
                 Scanning for additional telemetry...
               </p>
            </div>
          </section>
        </div>

        {/* FINAL FOOTER */}
        <div className="bg-[#050505] p-3 border-t border-cyan-900/30 flex justify-between items-center text-[9px] px-6 text-cyan-500/40 font-mono">
          <span className="flex items-center gap-2 uppercase tracking-tighter">
            <Shield size={10} className="text-pink-600"/> Authenticity_Verified
          </span>
          <span className="tracking-widest">PNX_BIO_HASH: 77291</span>
        </div>
      </div>
    </main>
  );
}