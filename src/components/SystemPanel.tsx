type Props = {
    title: string;
    children: React.ReactNode;
  };
  
  export default function SystemPanel({ title, children }: Props) {
    return (
      <div className="hud-panel p-5">
        <div className="flex justify-between mb-3">
          <h3 className="hud-title">{title}</h3>
          <span className="text-green-400">●</span>
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    );
  }
  