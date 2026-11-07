# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current state

No site code yet: no framework, build, lint or test setup. Add commands and architecture here once a stack is chosen. `README.md` holds the original brief (in Russian); only `README.md` is committed so far.

## Project

A minimalist, easy-to-read sales website: the personal page of Артур, a welder in Almaty who specializes mainly in stairs but welds any metal structure.

- Domain: `lestnicy-metal-almaty.kz` (may still change, so keep it in one place)
- **Every call to action must open WhatsApp +7 (708) 373-10-69 with a pre-filled message:** `https://wa.me/77083731069?text=<url-encoded message>`

## Assets

- `logo.jpeg`: 1254×1254, «Лестницы Металл Алматы», white and steel-grey lettering with an amber «Алматы» on black. It has a solid black background, so it won't sit cleanly on a light page without a transparent version.
- `photos/`: 97 WhatsApp JPEGs of the work, with auto-generated names and no captions or categories. Look at them to see which structures are advertised. Filenames contain spaces and parentheses, so quote them in shell commands and rename any used on the site to URL-safe names.
