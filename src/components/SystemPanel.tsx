type Props = {
    title: string;
    children: React.ReactNode;
    onToggle?: () => void;
    isExecutive?: boolean;
  };
  
  export default function SystemPanel({ title, children, onToggle, isExecutive }: Props) {
    return (
      <div className="hud-panel p-5">
        <div className="flex justify-between mb-3">
          <h3 className="hud-title text-cyan-300">{title}</h3>
          {onToggle && (
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={onToggle}
            >
              <span className="text-[10px] text-cyan-400/70 group-hover:text-magenta-400 uppercase">
                {isExecutive ? 'Executive_View' : 'Technical_View'}
              </span>
              <div className={`w-10 h-5 rounded-full relative border border-cyan-500/60 transition-colors ${isExecutive ? 'bg-cyan-500/20' : 'bg-purple-500/20'}`}>
                <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${isExecutive ? 'right-1 bg-cyan-400' : 'left-1 bg-magenta-400'}`} />
              </div>
            </div>
          )}
          {!onToggle && <span className="text-cyan-400 animate-pulse">●</span>}
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    );
  }
  