type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function TerminalLayout({ left, right }: Props) {
  return (
    <div className="min-h-screen px-8 py-6 text-gray-200">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-green-400 text-lg">INTELLIGENCE_TERMINAL_v1.0</h1>
          <p className="text-xs opacity-60">OPERATOR: GRAD_STUDENT_CS</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs opacity-60">EXECUTIVE_VIEW</span>
          <div className="w-10 h-5 bg-green-500 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-4 hud-panel p-5">{left}</aside>
        <section className="col-span-8 space-y-6">{right}</section>
      </div>
      <footer className="mt-6 text-xs opacity-40">CAUTION: INTERNAL ACCESS ONLY</footer>
    </div>
  );
}
