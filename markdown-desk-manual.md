# Markdown Desk — User Manual

By Andrew Michelis / [KnackMentor](https://knackmentor.com) · Apache-2.0 · the in-app version badge (bottom-left) is the authoritative version

This is the practical companion to the [requirements specification](markdown-desk-spec.md). It walks through every feature as you'd use it.

## 1. Getting started

Open `markdown-desk.html` in **Chrome or Edge**. Everything below works locally — from your Downloads folder (`file://`) or from a website. The version badge (bottom-left) tells you which build you're running; hard-refresh (`Ctrl+F5`) if it looks stale after an update.

**Opening work:** `Ctrl+O` for files, drag-and-drop anywhere, or **Open folder…** in the sidebar to load a whole project — the tree scans recursively (skipping dotfiles and `node_modules`), and clicking any `.md` opens it in a tab. Relative links between your documents navigate in-app; images resolve from your folder.

**Tabs & session:** `Alt+←/→` cycle, `Alt+1–9` jump, `Alt+W` close, `Alt+N` new file. Your open tabs and positions restore on the next launch.

**Saving:** `Ctrl+S` writes straight back to disk. Saving a new file *into* your open project folder "adopts" it — its annotations then persist in a sidecar next to it (see §6).

## 2. Writing

Three modes — `Ctrl+1` edit, `Ctrl+2` split (preview on the **left**, source on the right), `Ctrl+3` preview.

**The editor styles itself live.** While you type plain markdown, the editor shows `**bold text**` in bold, `*italics*` italic, `~~strikeout~~` struck, `` `code` `` boxed, headings in bold accent, list/quote markers tinted — with every syntax character still visible and editable. It's still a plain-text editor; it just *looks* like where it's going. (Fenced code blocks are exempt, so code samples stay undecorated.)

**Toolbar** (edit & split): bold / italic / strike / inline code (all toggle — press again to remove), heading level H1–H4 or back to text, bulleted / numbered / task lists, quote, link, image, table template, code block, horizontal rule.

**Shortcuts:** `Ctrl+B` bold · `Ctrl+I` italic · `Ctrl+K` link · `Ctrl+Shift+X` strike · `Tab` indents.

**Undo everywhere:** `Ctrl+Z` / `Ctrl+Y` (or `Ctrl+Shift+Z`) walk your document's history in *any* mode — typing bursts, toolbar clicks, and preview-chip formatting are each one clean step, per document.

## 3. Reading

- **Outline** (sidebar, first section) — click headings to jump.
- **Width** — the `⬌` status-bar button cycles Narrow / Wide / X-Wide / Full; wide tables stop scrolling horizontally.
- **Zoom** — `A− / % / A+` in the status bar, 70–160 % (click the % to reset).
- **Tail space** — the `⇲` button controls the whitespace after your text: **Auto** keeps a full screen of drawing room on short documents but only a small tail on long ones; **Compact** packs to the text; **Half/Full page** add ink workspace. This is screen-only — it never adds PDF pages (§7).
- **Theme** — light/dark toggle; ink and highlights adapt.

## 4. Annotating text

Select any text in preview or split view and a chip appears:

- **🖍 Highlight** — marks the passage; highlights survive edits by re-anchoring to the best-matching occurrence.
- **＋Note** — quotes the selection into the document's notes panel (`Ctrl+.`).
- **B / I / S / `</>`** — formats that exact text *in the markdown source* and re-renders; press the same button on already-formatted text to remove it.

**Bookmarks:** `Ctrl+D` bookmarks your position; the sidebar lists them per document. They persist — and if you reopen the same file in a different context (with or without its project), the tool rescues the newest saved state so nothing appears lost.

## 5. The ink layer (stylus & mouse)

Toggle the pen with the ✏ button. Tools:

- **Pens & markers** — three translucent markers, red/blue/black pens. Number keys select them (`1` red, `2` blue, `3` black, `4/5/6` markers); `` ` `` toggles the **eraser** (your stylus barrel button also erases).
- **Shapes** — rectangle, ellipse, arrow.
- **Text labels (T)** — click, type, `Enter`. Choose font (Sans/Serif/Mono/Hand), size and color from the toolbar; double-click a label with the move tool to edit it; emptying its text deletes it.
- **Select & move (✥)** — click a stroke, or drag a box around several; `Shift`-click adds/removes; `Ctrl+A` selects everything. Drag moves the whole group; `Del` deletes it; a color swatch or number key **recolors the selection** (labels included); font/size controls restyle selected labels.
- **Clipboard** — `Ctrl+C/X/V` on selections. Pastes arrive selected and offset slightly; they work across documents **and across tool windows** (via the system clipboard — the browser asks once for permission).
- **Undo** — `Ctrl+Z/Y` in pen mode covers every ink action, group operations as single steps.

Everything is anchored to your content: change the width, zoom, or edit text above, and annotations follow their elements.

## 6. Where your data lives

| Data | Location |
|---|---|
| Doc state (scroll, notes, bookmarks, highlights, ink) | Browser IndexedDB, auto-saved |
| Project docs' annotations | **`<name>.md.mdesk`** sidecar beside each file + a root `.mdesk` — plain JSON, portable with the folder |
| Pasted images | Real files: `_assets/` beside the document, or (fallback) directly beside the `.md` named `<mdname>.<img>.png` — **never base64 inside the markdown** |
| UI preferences | localStorage (`mdesk-*`) |

`Ctrl+Shift+R` (or Help → Privacy) wipes all browser-side data after confirmation; files on disk are untouched.

**Important — open documents from the project tree to keep your annotations with the files.** Highlights, notes, bookmarks, ink and table layouts persist into `.mdesk` sidecars **only for documents opened from the left sidebar's project tree** (or adopted into the project via Save). A file opened through Ctrl+O / drag-and-drop outside a project keeps its annotations in this browser only — they won't travel with the file, and opening the same file on another machine (or after a browser wipe) starts clean. Rule of thumb: open the folder first, then the document from the tree.

## 7. Exporting

- **PDF** — the export button opens a print window that mirrors the screen exactly: your column width, highlights (optional), and ink/labels baked in per element. Sizing rule: **content first, ink second — empty tail space never creates pages.** The dashed **PDF-area guide** (pen toolbar) previews exactly what will be covered.
- **PNG** — pen toolbar; exports the ink layer alone on white.
- **ZIP snapshot** — package a project ("documents & references" collects every `.md`, everything they reference, and the sidecars; or take the whole folder). Import extracts to a folder — or opens **Review mode**, a read-only browse of the archive with all annotations visible.

## 8. Installing as an app (PWA)

Served over https, the tool is installable (browser menu → *Install page as app*). For reliable install prompts **and offline launches**, use **Help → Download PWA kit (zip)** and upload its four files (`mdesk.webmanifest`, two icons, `mdesk-sw.js`) into the same folder as the HTML. The console line `[mdesk pwa] {…}` confirms the active mode.

**Opening `.md` files straight from Windows:** with the PWA installed, right-click any `.md` file → **Open with → Choose another app → Markdown Desk** (tick "Always" to make it the default; it also appears under Settings → Apps → Default apps). The first time, the browser asks permission for the app to open files — after that, double-clicking a markdown file launches Markdown Desk with the file loaded and saveable in place. If Markdown Desk doesn't appear in the list, reinstall the PWA once from the deployed URL so Windows re-registers the file association. Note: manifest `start_url`/`id` assume the filename `markdown-desk.html` — edit them if you rename the file.

## 9. Known limitations

Review-mode annotations aren't persisted · browsers can't reveal real disk paths · PNG export excludes rendered text · files outside a project keep annotations browser-only · cross-window ink paste needs one-time clipboard permission · `file://` pages can't be installed as PWAs · ink is available across the whole document (up to 200 000 px).

## 10. Full shortcut reference

Open the in-app **Help** dialog — it's always current for your build, including everything listed here.

---
© Andrew Michelis (KnackMentor) · Apache License 2.0 · [knackmentor.com](https://knackmentor.com)
