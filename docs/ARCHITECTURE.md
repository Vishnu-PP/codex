# Architecture (Updated IP Messenger-style app)

## Goals

- Cross-platform desktop app
- Modern, intuitive UI
- Fast and reliable peer-to-peer file sharing
- Strong security defaults

## High-level design

```text
+-----------------------------+
| React/TS UI (Tauri WebView) |
+-------------+---------------+
              |
              | Tauri commands/events
              v
+-----------------------------+
| Rust Core Services          |
| - Discovery Engine          |
| - Messaging Engine          |
| - File Transfer Engine      |
| - Crypto/Identity           |
+-------------+---------------+
              |
              v
+-----------------------------+
| LAN / P2P Transport         |
| UDP Broadcast/mDNS + QUIC   |
+-----------------------------+
```

## Networking strategy

- **Discovery**: mDNS first, UDP broadcast fallback.
- **Messaging**: low-latency channel over QUIC streams.
- **File transfer**:
  - Chunked transfer (adaptive chunk size)
  - Parallel streams per file
  - Resume via chunk bitmap
  - `blake3` per-chunk and final hash verification

## UX principles

- Zero-config onboarding (shows peers instantly on same LAN)
- Send files in 1 click (or drag/drop)
- Clear transfer status with speed + ETA
- Keyboard shortcuts for power users
- Non-blocking toasts instead of modal interruptions

## Security model

- Per-device identity keypair on first launch
- Trust-on-first-use with key fingerprint display
- Optional verified contacts
- Encrypted transport by default

## Why Rust + JS is ideal here

- Rust handles networking + filesystem safely and efficiently.
- JS/React keeps the interface modern and easy to evolve.
- Tauri avoids Electron-level memory overhead while staying cross-platform.
