# SwiftLan (Rust + JS)

A modern, platform-independent LAN messenger inspired by IP Messenger, rebuilt with a **Rust networking core** and a **JavaScript/React UI**.

## Why this approach

Your requirements map cleanly to this split architecture:

- **Platform independent**: Rust core compiles for Windows/macOS/Linux.
- **Modern UI/UX**: React + TypeScript + Tailwind provides fast, polished desktop UI iteration.
- **Fast file sharing**: Rust async I/O with chunked transfer, resume support, and optional QUIC transport.

## Proposed stack

- **Desktop shell**: Tauri (Rust + web frontend)
- **Networking core**: Rust (`tokio`, `quinn`, `serde`, `blake3`)
- **Frontend**: React + TypeScript
- **State & data**: TanStack Query + Zustand + SQLite (via Rust side)
- **Security**: TLS (QUIC), device identity keys, optional E2E room encryption

## Product blueprint

1. Device auto-discovery on LAN (mDNS + UDP broadcast fallback)
2. Real-time messaging with delivery/read status
3. Fast file/folder transfer with drag-drop and progress
4. Resume interrupted transfer + integrity checks
5. Clean, keyboard-first UX

See `docs/ARCHITECTURE.md` and `docs/ROADMAP.md` for deeper details.

## Repo layout

- `rust-core/` Rust networking and transfer engine
- `ui/` React app for desktop shell
- `docs/` architecture and roadmap

## Next build steps

1. Wire Rust core as Tauri commands/events.
2. Implement discovery service and transfer sessions.
3. Add responsive chat/file-transfer UI flows.
4. Package cross-platform desktop binaries.
