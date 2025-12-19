import TerminalLayout from "../layouts/TerminalLayout";
import SystemPanel from "../components/SystemPanel";

export default function Landing() {
  return (
    <TerminalLayout
      left={
        <>
          <h2 className="hud-title mb-4">SYSTEM STATUS</h2>
          <p>ACCESS LEVEL: PUBLIC_READ</p>
          <p>OPERATOR: Pule Nxasana</p>
          <p>DOMAIN: ML / DATA / FINANCE</p>
        </>
      }
      right={
        <SystemPanel title="SYSTEM READY">
          <div className="space-y-4">
            <button className="hud-button w-full">
              VIEW_PROJECT_MODULES
            </button>
            <button className="hud-button w-full">
              ABOUT_OPERATOR
            </button>
            <button className="hud-button w-full">
              OPEN_COMMUNICATION_CHANNEL
            </button>
          </div>
        </SystemPanel>
      }
    />
  );
}
