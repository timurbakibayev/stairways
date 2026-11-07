# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A minimalist, easy-to-read sales website in Russian: the personal page of Артур, a welder in Almaty who specializes mainly in stairs. `README.md` holds the original brief. The site currently shows stairs only; other metalwork is left out until there are photos of it.

- Domain: `artur.commit.kz` (may still change; it appears only in the `<head>` and JSON-LD of `site/index.html`, plus the nginx vhost and `.github/workflows/deploy.yml`)
- **Every call to action must open WhatsApp +7 (708) 373-10-69 with a pre-filled message:** `https://wa.me/77083731069?text=<url-encoded message>`

## Running

There is no build step, framework, lint or test setup. `site/` is the whole deployable site:

```sh
python3 -m http.server 8000 --directory site
```

## Structure

- `site/index.html`: the single page, hand-editable. WhatsApp links are static, with the message already encoded in each `href`, so they work without JavaScript. Each stair type has its own message, and gallery items carry theirs in `data-wa`.
- `site/main.js`: progressive enhancement only (gallery filter, full-screen viewer, hiding the pinned phone button while the hero button is visible).
- `site/img/`: `<name>.webp` (full size, max 1400px) and `<name>-s.webp` (thumbnail). The gallery has 24 photos because that divides evenly into its 2, 3 and 4 column layouts.
- `image-sources.csv`: maps each site image to its original in `photos/`.

## Draft content to confirm with Артур

The site hasn't been shown to him yet. Only the 5 years of experience, that he gives a warranty, and working outside Almaty "if not far" came from the project owner. These are placeholders invented for the draft:

- 3-year warranty on welds and frame
- 120+ finished stairs
- 2–4 weeks from measuring to finished stair; 1–2 days for installation
- Free measuring within Almaty
- Works alone, with no middlemen; has his own workshop; photographs customers at handover
- Installs wooden treads
- `artur.webp` shows him: the owner thinks so but isn't sure

Prices are deliberately absent until Артур provides them.

## Photos

`photos/` holds 97 uncategorized originals (quote the filenames in shell commands; they contain spaces and parentheses). Keep these out of the site:

- Files sized 896×1168 (and possibly the 896×1184 one) look AI-generated or AI-edited. Don't present them as real work without Артур confirming.
- Duplicates, listing screenshots and collages.

Some usable photos have a phone stamp or Avito watermark burned in; crop these off first.
