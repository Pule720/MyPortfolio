import TerminalLayout from "../layouts/TerminalLayout";
import SystemPanel from "../components/SystemPanel";

export default function Projects() {
  return (
    <TerminalLayout
      left={
        <>
          <h2 className="hud-title mb-4">PROJECT INDEX</h2>
          <p>TOTAL SYSTEMS: 3</p>
          <p>DOMAIN: Banking / ML</p>
        </>
      }
      right={
        <SystemPanel title="AVAILABLE MODULES">
          <ul className="space-y-3">
            <li className="hud-button">{"> CREDIT_RISK_ANALYTICS_v2"}</li>
            <li className="hud-button">{"> FRAUD_DETECTION_PIPELINE"}</li>
            <li className="hud-button">{"> MARKET_STRESS_SIMULATOR"}</li>
          </ul>
        </SystemPanel>
      }
    />
  );
}
