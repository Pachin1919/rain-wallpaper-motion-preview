# Historical Lovable build evidence

Original Lovable-managed preview, before GitHub Pages adaptation. Current deployment: docs/GITHUB-PAGES.md.

# Rainfield — delivery

## Preview
https://id-preview--fc2fd260-5f28-437f-b023-de5c9ee9ffb0.lovable.app

Completed for review only. Not published. No push or changes to the owner's other repositories or the separate PACHIN website.

## Source authority
- Owner-supplied rain-wallpaper-public-preview-source.zip and rain-original-reference.png inspected before implementation.
- Source reference commit: **7b909e63eae00390626f23747fd1c8ca7a6bda05**.
- Repository: https://github.com/Pachin1919/rain-wallpaper-motion-preview
- Original artwork SHA-256: 5ea1b040374cefd212cb5db62ea140cb4168ce7ede9ead9bc3a426d33be8c0aa
- Original app.js SHA-256: 2dc35c5930b37fd9ba46a07e7be9f00dc19f46d31cf54b44a683dedbf71fc4f5
- Source reference SHA is owner-provided; ZIP has no Git history. The supplied bytes were used directly, not a screenshot reconstruction.

## Implemented routes
- `/`: original painted lake and adapted masked moving water, streaks, refracting glass drops, Pause/Resume; editorial welcome, asymmetrical stays, daily rhythm, guide excerpt and concept credits.
- `/stays`: two room studies with layout, materials and intended use; Lake Room detail link.
- `/stays/lake-room`: complete room narrative, material/layout notes, comfort and accessibility-design caveat, return to stays and guide.
- `/field-notes`: slow mornings, safe rain walks, packing and staying in; return home and stays.
- Persistent English/Chinese switching across navigation and reload; self-hosted full CJK font. Unique leaf metadata on all four pages.

## Asset provenance and portability
All delivered artwork/fonts are **portable binaries**, not Lovable-only asset pointers. No remote stock or runtime font requests.
- `public/assets/rain-herbarium-clean.png`: exact original painting from supplied ZIP; by PACHIN, owner-authorized use.
- `public/assets/source/`: original HTML/CSS/JS/README retained for comparison. They are reference files, not the running application.
- Original Barlow Condensed and IBM Plex Sans WOFF2 and license notices preserved in `public/assets/fonts/`; Plex supplies UI text. Original Barlow is preserved but not used for Rainfield's editorial headings.
- `noto-serif-sc-400.woff2`: full Noto Serif SC, downloaded from google/fonts; static weight 400 instantiated and losslessly WOFF2-compressed, no glyph subset. SIL OFL retained as noto-serif-sc-OFL.txt. Source: https://github.com/google/fonts/tree/main/ofl/notoserifsc
- EN serif: local system Georgia/Times serif stack, with complete CJK fallback; no remote service.
- `src/assets/lake-room.jpg` and `reed-room.jpg`: newly AI-generated on 2026-10-06 for Rainfield, 1536×1024, conceptual interiors, not photographs of real inventory. Lake Room: low oak double bed, linen, plaster, rain-lake window. Reed Room: intimate reading/writing room, walnut desk, linen, sage throw, reed-facing window. Native image-generation outputs retained as portable imported files.
- Favicon: authored simple droplet-and-water brand mark.

## Core preservation
Original deterministic channels, glass refraction, trail gradients, tiled water displacement and source-coordinate water polygon retained. Cover alignment matches image object-position: desktop 50% / 46%, mobile 78% / 46%. Scene does not pan or breathe, keeping it readable. No GSAP is needed; source core rendering is browser Canvas.

## Verification and known gaps
See QA.md for actual evidence. Four routes × two languages × two viewports, zero page errors, zero failing resources, zero horizontal overflows; repeated lifecycle and focused tests passed.
No real address, email, booking, inquiry form, backend, authentication, analytics, payment, CMS or music added. Footer provides concept/creator credit rather than invented contact details. Reed Room intentionally has no unrequested detail route. Chromium-only QA; physical devices and other browser engines not verified.

## Commit record
Implementation commit observed before documentation handoff: **2199f6f91625227a9b6f1f7d927fa82f886f84fb**.
Lovable manages commits automatically; no stateful Git commands or pushes were run. The Files handoff copy records the final observable resulting commit after documentation is saved. A document cannot contain its own commit hash without changing that hash.
