import type { ReactNode } from "react";

export default function Terminal({ children }: { children: ReactNode }) {
  return (
    <div className="terminal rounded-2xl p-8 max-w-3xl mx-auto">
      {children}
    </div>
  );
}
