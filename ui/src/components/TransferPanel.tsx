export function TransferPanel() {
  return (
    <div style={{ border: "1px solid #1f2937", borderRadius: 12, padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>Quick Send</h2>
      <div style={{ border: "1px dashed #374151", borderRadius: 10, padding: 24, textAlign: "center", marginBottom: 12 }}>
        Drag files here or click to choose
      </div>
      <div style={{ background: "#111827", borderRadius: 8, padding: 12 }}>
        <strong>transfer-demo.iso</strong>
        <div style={{ height: 8, background: "#1f2937", borderRadius: 6, marginTop: 8 }}>
          <div style={{ width: "62%", height: "100%", background: "#60a5fa", borderRadius: 6 }} />
        </div>
        <small style={{ opacity: 0.8 }}>62% • 84 MB/s • ETA 00:19</small>
      </div>
    </div>
  );
}
