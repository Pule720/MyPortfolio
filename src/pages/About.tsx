import TerminalLayout from "../layouts/TerminalLayout";
import SystemPanel from "../components/SystemPanel";

export default function About() {
  return (
    <TerminalLayout
      left={
        <>
          <h2 className="hud-title mb-4">OPERATOR PROFILE</h2>
          <p>BACKGROUND: CS (Hons)</p>
          <p>FOCUS: ML & Finance</p>
          <p>STATUS: ACTIVE</p>
        </>
      }
      right={
        <>
          <SystemPanel title="OPERATOR_LOG">
            Graduate computer scientist focused on building transparent,
            data-driven systems for finance and decision-making.
          </SystemPanel>

          <SystemPanel title="SYSTEM PHILOSOPHY">
            Engineering-first mindset. Measure impact. Reduce risk.
          </SystemPanel>
        </>
      }
    />
  );
}
