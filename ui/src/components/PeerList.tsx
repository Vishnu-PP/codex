const peers = [
  { id: "1", name: "Design-Laptop", online: true },
  { id: "2", name: "QA-Desktop", online: true },
  { id: "3", name: "Ops-MacMini", online: false }
];

export function PeerList() {
  return (
    <div style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>Peers</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {peers.map((peer) => (
          <li key={peer.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{peer.name}</span>
            <span style={{ color: peer.online ? "#34d399" : "#f87171" }}>
              {peer.online ? "Online" : "Offline"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
