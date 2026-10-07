# Rainfield — Art round 2

Completed 2026-10-07, in this Lovable project only. No deployment, GitHub connection, package installation, package/lock version change, new route, backend or effect system.

## Source authority and preservation
Original rainy-lake artwork and motion source: `7b909e63eae00390626f23747fd1c8ca7a6bda05`. Owner's downstream published reference: https://pachin1919.github.io/rain-wallpaper-motion-preview/ at `99dbe8eb90f92714a996398ca3e4f97083944b37`. The reference identifies downstream authority; its published adapter was not modified or tested.

Original first screen, hero painting, water mask/UV alignment, glass drops, fine rain, Pause, two existing room images, four routes and incumbent factual copy preserved. First-screen styles, motion engine, language persistence, room component and stays content have no diff from the earlier delivery. Reused guide/packing lines rather than inventing new facts. The new interlude heading comes from Field Notes; only scene credits and image alternatives are newly authored bilingual text.

## Three new generated assets
| Portable JPEG | Actual dimensions | Bytes |
|---|---|---|
| `src/assets/tea-window.jpg` | 848 × 1264 | 127,598 |
| `src/assets/reed-path.jpg` | 1376 × 768 | 264,985 |
| `src/assets/evening-desk.jpg` | 1264 × 848 | 111,338 |

All are new AI-generated concept scenes made using Lovable's native image-edit/merge capability on 2026-10-07. Reference-guided generation, not retouched original photos, crops of the hero, stock imagery, SVG painting, screenshots or CDN pointers. No people, identifiable place, branding or booking claims.

- Tea window: Lake Room interior + original painting as palette/material references. Prompt requested an intimate vertical cup, washed linen, rain-streaked oak window, lake and reeds. Generation reference `b106b93c-fdab-45c9-9e5e-7f4b2fbb85c0`.
- Reed path: original painting + Reed Room as references. Prompt requested a new misty timber boardwalk scene, wet planks, restrained light and no real location. Generation reference `6b529feb-23b0-466c-9b49-d393f36b422f`.
- Evening desk: both interiors + original painting as references. Prompt requested an open book, modest timber desk, warm small lamp, linen and evening lake window. Generation reference `fb2a3ad8-9b78-4223-b868-b2cd44f2295f`.

Tool output arrived as PNG-encoded data despite .jpg filenames and dimensions differed from requested sizes. One corrective batch converted these with existing Pillow to progressive RGB JPEG (quality 86, optimized), and corrected width/height attributes to actual decoded dimensions. No new software installed. Final three assets total 503,921 bytes. Generated scene figures are lazy, asynchronously decoded and reserve geometry; localized alt text and modest concept credits are shared across routes.

### Original / generated / cropped distinction
- Original: `public/assets/rain-herbarium-clean.png`, unmodified; painting/source licenses and full self-hosted fonts retained.
- Previously generated, unmodified: `src/assets/lake-room.jpg`, `src/assets/reed-room.jpg`.
- Newly generated: only the three files above. They are local portable binaries.
- Cropped: presentation-only object-fit crops for the triptych, tea companion and panoramas. No extra crop binary was created or counted as a new scene. Original full images remain exportable.
- Evidence: images in `docs/art-round2/` are browser screenshots/stitched captures, not artwork or app assets.

## Chapter composition map
| Home chapter | Composition and visual rhythm |
|---|---|
| Original opening | Incumbent full viewport painting and single canvas engine, unchanged. |
| Mist/linen welcome | Small vertical tea scene on the left, broader editorial text on the right; muted linen surface. Mobile keeps a small inset portrait above the text. |
| Room spread | Dominant wide Lake Room image and smaller delayed portrait Reed Room; staggered baselines, unequal scale, unframed captions. Mobile Reed Room stays narrower and inset. |
| Daily rhythm | Dark lake-ink band with three differently sized photographs, staggered heights and time/caption strips. Mobile becomes three compact image/text timeline rows rather than a card grid. |
| Reed-path interlude | Edge-to-edge panorama leads; a short separate caption strip, no overlay text or parallax. |
| Field-note excerpt | Warm-paper reading spread, restrained heading and short intro, narrow ruled packing list, working `/field-notes` link. No repeated image banner. |
| Footer | Existing concept/fiction credit and links unchanged. |

The home below-fold contains five distinct chapter skeletons. `/stays` deliberately retains the incumbent useful two-room presentation. Lake Room retains its original cover, adds an inset tea companion to the facts and a wider evening still life after the prose. Field Notes replaces repeated hero artwork with the reed path and adds the evening desk beside the staying-in reading chapter. No new routes or workflow.

## Localization and fonts
All new alt text and credits have natural EN/ZH equivalents. Existing language persistence and document lang continue unchanged. Read full rendered main copy for all four routes in both languages. No new factual claims or real inventory. The existing **complete** Noto Serif SC WOFF2 has 30,928 cmap entries and covers all **443 distinct authored Chinese characters**, zero missing. This project does not use an Ink subset, so no subset regeneration or font modification was needed. Coverage was checked with existing fontTools and existing system Brotli via an in-memory decoder; no installation. Licenses retained.

## Actual QA findings
One batched inspection at 1440×900 and 390×844, EN and ZH, full scroll, all four direct-entry routes; one corrective batch for image format/dimensions; one final batched confirmation. Latest platform diagnostic: **build OK, 2026-10-07T03:16:59Z**. Existing Vitest suite: **2 files / 5 tests passed**. No lint or optional polish loop.

- 16 page/language/viewport combinations: **0 horizontal overflows, 0 broken images, 0 page errors, 0 HTTP resources ≥400**.
- Unique incumbent titles/description/Open Graph metadata remain on all four content routes. Bundled images are relative; no fake social-image URLs.
- 28 actual internal link clicks across desktop/mobile reached the expected existing route. Language persists through those navigations.
- Desktop pointer and emulated touch Pause stopped loops and froze frames. Keyboard Enter on Resume restored one loop; computed focus outline was solid.
- Scroll below the hero: one engine, zero active loops.
- Four home → stays → Lake Room → stays → home cycles on **each** viewport: every return had exactly one engine and one loop, disposals 2/4/6/8. No duplicate effects added.
- Reduced motion: still control disabled on both viewports. A fresh dedicated check confirmed one engine, **zero loops and zero frames**, with frames frozen. The batched immediate diagnostic snapshot was too early (`{}`); this is a measurement timing limit, not a claimed loop count.
- Original mobile 20 drops/36 streaks and desktop 32/64, resolution cap min(1.2, 960 / viewport width), cleanup and hidden-tab behavior remain in unchanged code. OS background-tab behavior was not re-tested this round.
- Full-scroll images and two representative chapter captures were visually reviewed; no overlapping content or clipping observed.

Limits: Chromium only, touch emulation rather than a physical device; no Safari/Firefox, physical accessibility audit or downstream GitHub Pages adapter run. No production publishing performed.

## Repository evidence
`docs/art-round2/` contains `desktop-{en,zh}-{home,stays,lake-room,field-notes}.jpg` and the corresponding `mobile-...jpg` (16 complete scroll captures), `room-spread.png`, `daily-rhythm.png`, and `qa-results.json`. Complete-scroll captures stitch fixed viewport screenshots at actual scroll positions; no full-page browser screenshot or enlarged viewport. All evidence stays outside public and is not imported into the app.

## Text-safe export
Manifest: `.export/art-round2/manifest.json`. It lists only the **3 new visual artwork files + 18 new visual evidence files**. Original painting, old interiors, fonts, favicon, documentation and existing room export are excluded. The manifest stores exact path, byte size, SHA-256 and ordered chunk paths. Each UTF-8 chunk under `.export/art-round2/chunks/` contains only ASCII base64, no newline, at most 32,000 characters and a length divisible by four. Decode in manifest order; local strict base64 decode matched every complete binary byte and SHA-256. Evidence entries are included to make repository screenshots text-retrievable too, not to count them as generated artwork. Export stays outside public and is never imported or served by the app.

Observed saved implementation commit before this documentation/export save: `8ae5e944921a3ec1377d6aa8e7a407c58f927811`. Lovable saves subsequent evidence/document/export revisions automatically; this is an observed commit, not a claim of the final future auto-save SHA.
