import { PeerList } from "./components/PeerList";
import { TransferPanel } from "./components/TransferPanel";

export default function App() {
  return (
    <main style={{ fontFamily: "Inter, system-ui", padding: 24, color: "#e5e7eb", background: "#0b1020", minHeight: "100vh" }}>
      <h1 style={{ marginTop: 0 }}>SwiftLan</h1>
      <p style={{ opacity: 0.8, maxWidth: 720 }}>
        A modern, cross-platform LAN messenger with fast, resumable file transfer.
      </p>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 16 }}>
        <PeerList />
        <TransferPanel />
      </section>
    </main>
  );
}
