// 1. IMPORT the PDF at the top
import resumeFile from "../assets/Pule_resume_ minimum(1) (5) (1).pdf";

import { Mail, Linkedin, Github, FileText, Share2, Shield, ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";

export default function Contact() {
  const channels = [
    { label: "EMAIL_LINK", icon: Mail, detail: "nxasanapule@gmail.com", path: "mailto:nxasanapule@gmail.com" },
    { label: "LINKEDIN_UPLINK", icon: Linkedin, detail: "linkedin.com/in/pulenxasana", path: "https://www.linkedin.com/in/pulenxasana/" },
    { label: "GITHUB_REPO", icon: Github, detail: "github.com/Pule720", path: "https://github.com/Pule720/" },
    // 2. Use the imported variable here
    { label: "DOWNLOAD_CV", icon: FileText, detail: "PDF_VER_2025.01", path: resumeFile, isDownload: true },
  ];

  return (
    <main className="relative flex items-center justify-center p-4 md:p-8 min-h-screen z-10 font-mono overflow-hidden ">
      
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

        <div className="border-b border-cyan-900/30 p-3 flex justify-between items-center bg-[#0d0d0d]">
          <div className="flex items-center gap-2">
            <Share2 size={14} className="text-cyan-500/50" />
            <span className="text-[10px] text-cyan-500/70 font-bold tracking-[0.2em] uppercase">
              Communication_Module_v1.0
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[9px] text-cyan-100/40 uppercase">Signal_Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <aside className="lg:col-span-4 p-8 border-r border-cyan-900/30 bg-[#0d0d0d]/40 flex flex-col">
            <h2 className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest mb-8 border-b border-cyan-900/30 pb-2">
              Uplink_Stats
            </h2>
            
            <div className="space-y-6">
              <div className="group">
                <p className="text-[9px] text-cyan-500/50 uppercase tracking-widest mb-2">Protocol</p>
                <p className="text-[11px] text-cyan-100 font-medium">SECURE_ENCRYPTED_v3</p>
              </div>
              
              <div className="group">
                <p className="text-[9px] text-cyan-500/50 uppercase tracking-widest mb-2">Availability</p>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                   <p className="text-[11px] text-cyan-100 font-medium uppercase">High_Priority</p>
                </div>
              </div>

              <div className="pt-8 border-t border-cyan-900/30">
                <p className="text-[8px] text-cyan-500/40 leading-relaxed uppercase italic">
                  Establishing direct peer-to-peer connection for professional inquiries. Data persistence verified.
                </p>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-8 p-8 space-y-8 bg-black/20">
            <div className="space-y-6">
              <h3 className="text-[10px] text-cyan-500 font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                <ChevronRight size={12} className="text-pink-500" /> Active_Channels
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {channels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a 
                      key={item.label}
                      href={item.path}
                      // 3. Conditional target and download attributes
                      target={item.isDownload ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      download={item.isDownload ? "Pule_Nxasana_Resume.pdf" : undefined}
                      className="group flex items-center justify-between p-4 bg-cyan-950/10 border border-cyan-900/30 rounded hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 border border-cyan-500/20 rounded bg-black/40 text-cyan-400 group-hover:text-pink-500 transition-colors">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] text-cyan-100 font-bold tracking-widest uppercase">{item.label}</p>
                          <p className="text-[9px] text-cyan-500/50 font-mono mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                      <ChevronRight size={14} className="text-cyan-900 group-hover:text-cyan-400 transition-colors translate-x-0 group-hover:translate-x-1" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6">
               <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/30 via-cyan-500/10 to-transparent" />
               <p className="text-[7px] text-cyan-500/40 uppercase tracking-[0.4em] mt-4">
                 Waiting for user input...
               </p>
            </div>
          </section>
        </div>

        <div className="bg-[#050505] p-3 border-t border-cyan-900/30 flex justify-between items-center text-[9px] px-6 text-cyan-500/40 font-mono">
          <span className="flex items-center gap-2 uppercase tracking-tighter">
            <Shield size={10} className="text-pink-600"/> Handshake_Success
          </span>
          <span className="tracking-widest">TRACE_ID: 0xCF_883</span>
        </div>
      </div>
    </main>
  );
}

