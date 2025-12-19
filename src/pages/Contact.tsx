import TerminalLayout from "../layouts/TerminalLayout";
import SystemPanel from "../components/SystemPanel";

export default function Contact() {
  return (
    <TerminalLayout
      left={
        <>
          <h2 className="hud-title mb-4">COMMUNICATION MODULE</h2>
          <p>SECURITY: ENABLED</p>
        </>
      }
      right={
        <SystemPanel title="OPEN CHANNELS">
          <div className="space-y-3">
            <button className="hud-button w-full">EMAIL</button>
            <button className="hud-button w-full">LINKEDIN</button>
            <button className="hud-button w-full">GITHUB</button>
            <button className="hud-button w-full">DOWNLOAD_CV</button>
          </div>
        </SystemPanel>
      }
    />
  );
}
