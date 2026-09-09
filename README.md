# Markdown Desk

**A complete markdown reading, writing & annotation desk — in one HTML file.**

By [Andrew Michelis](https://knackmentor.com) · KnackMentor open tools · Apache-2.0 licensed

Markdown Desk is a single self-contained `markdown-desk.html` (one HTML file, zero dependencies, zero telemetry) that turns Chrome or Edge into a Joplin-style workspace for your **local** markdown files: project trees, live-styled editing, highlights, notes, bookmarks, stylus ink and text labels, WYSIWYG PDF export, ZIP snapshots, and PWA installation. Everything stays on your machine.

## Why

Plain text is the most durable format there is — Markdown Desk is built around keeping it that way. Your `.md` files remain clean, human-readable text forever (pasted images become real files beside them, never base64 blobs); annotations live in transparent `.mdesk` JSON sidecars that travel with your folders; and the tool itself needs no server, no account, no install, no build step. Open the file, open your folder, work.

## Highlights

- **Write** — three-pane modes (edit / split / preview, preview on the left), a full formatting toolbar, and **live markdown styling right in the plain-text editor**: `**bold**` looks bold, headings stand out, syntax characters stay visible.
- **Read** — project folder tree, outline, adjustable article width & zoom, light/dark themes, in-app link navigation.
- **Annotate** — text highlights with robust re-anchoring, per-document notes, bookmarks, and a real ink layer: markers, pens, shapes, **text labels** with font/size/color — all element-anchored so they track your text through reflows, with group selection, cross-window copy/paste, and deep undo.
- **Export** — pixel-faithful PDF with your annotations baked in, ink-layer PNG, and one-file ZIP snapshots of a whole project (with a read-only Review mode for received snapshots).
- **Own your data** — IndexedDB + sidecar files only; a one-shortcut privacy wipe; nothing ever leaves the browser.

## Quick start

1. Download `markdown-desk.html`.
2. Open it in **Chrome or Edge** (the File System Access API is required for folders and saving).
3. `Ctrl+O` a file — or open a whole folder from the sidebar and let it map your docs.
4. Press `F1`-style Help (the **?** button) for the complete shortcut table.

Works from `file://` or any static host. To install it as an app (PWA) with offline support, serve it over https and upload the four files from **Help → Download PWA kit** next to it — the tool detects them automatically.

## Documentation

- **[User manual](markdown-desk-manual.md)** — every feature, workflow, and shortcut.
- **[Requirements specification](markdown-desk-spec.md)** — the full engineering spec: 100+ numbered requirements, regression guards, and the testing strategy this project is developed against.

## Privacy

No network calls for core function, no analytics, no accounts. Data lives in your browser (IndexedDB / localStorage) and in `.mdesk` sidecar files you can read, diff, and delete yourself. `Ctrl+Shift+R` inside the tool wipes everything browser-side.

## Related tools

Part of a small suite of open tools by [Andrew Michelis](https://knackmentor.com). See them all at **[knackmentor.com/work](https://knackmentor.com/work/)**.

- **[av-integrity](https://github.com/andrewmichelis/av-integrity)**: detect when a vehicle's sensors are lying (an open AV sensor-fusion and integrity monitor).
- **[WebClip](https://github.com/andrewmichelis/webclip)**: save any web page exactly as you saw it (a pixel-faithful page-to-PDF Chrome extension).
- **[HashTag Language](https://github.com/andrewmichelis/hashtag-lang)**: a small notation for facts, queries, and provenance (the shared substrate these tools speak).

<sub>Built in the open, verified before shipping. The standard behind [KnackMentor](https://knackmentor.com).</sub>

## Verifying a release

Every release is tagged and signed under the author's key, and the full source is public here, so you can build from source and compare. Authorship and first-conception are independently timestamped (RFC-3161 / OpenTimestamps) as part of the author's provenance process. Release-artifact attestation via [Sigstore](https://www.sigstore.dev/) is planned. Any certification or curation offered on top stays opt-in, self-hosting is always allowed, and there is no certificate authority you are required to trust.

## License, attribution & citation

Apache License 2.0 — see [LICENSE](LICENSE). Copyright © Andrew Michelis (KnackMentor). If this tool is useful in your work, a citation is appreciated: GitHub's *Cite this repository* button uses [CITATION.cff](CITATION.cff).

Embedded libraries: [marked](https://github.com/markedjs/marked) 12.0.2 (MIT), [DOMPurify](https://github.com/cure53/DOMPurify) 3.1.6 (Apache-2.0/MPL-2.0).

Give it a try [here](https://knackmentor.com/mdesk.html)

---
*Built and maintained by [KnackMentor](https://knackmentor.com) — automation & systems-integration consulting, Athens, GR.*
