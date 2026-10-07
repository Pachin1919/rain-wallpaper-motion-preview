# Historical Lovable build evidence

Original Lovable-managed preview, before GitHub Pages adaptation. Current deployment: docs/GITHUB-PAGES.md.

# Rainfield QA

Verified 2026-10-06 in headless Chromium against http://localhost:8080.

## Actual results
- All four pages opened directly at 1440×900 and 390×844, in EN and ZH: 16 route/language/viewport combinations.
- Every combination: no horizontal overflow, no broken images. Unique page title returned for each content route.
- Page errors: 0. HTTP resources with status ≥400: 0.
- Entire visible EN and ZH copy extracted and reviewed in context; equivalent information and hierarchy retained. No fake prices, location, availability, reservations or testimonials.
- Full local Noto Serif SC regular font: all 435 distinct Chinese characters in the authored TSX covered, zero missing glyphs. This is a complete font, not a page-specific subset.
- Pointer Pause stopped the loop and froze frame count. Keyboard Enter on Resume restarted it. Keyboard Tab advanced to the next real stay link; visible focus defined globally.
- Touch emulation: Pause stopped the loop; Explore the stays opened /stays and disposed the hero engine.
- Reduced-motion emulation: still artwork and static canvas, zero loops; Still view button disabled. No breathing/entrance animation.
- Scrolling the hero out of view: active engines 1, active RAF loops 0.
- Simulated document visibilitychange (hidden): loops 0; visible: loops 1. This tests the event branch, not a real operating-system background tab.
- Canvas cap preserved from source: resolution min(1.2, 960 / viewport width), independent of device DPR. Mobile starts with 20 glass drops / 36 fine streaks versus desktop 32 / 64.

## Four continuous home → stays → Lake Room → stays → home cycles

| Cycle | Home engines / loops | Detail engines / loops | Returned home engines / loops | Cumulative disposals |
|---|---|---|---|---|
| 1 | 1 / 1 | 0 / 0 | 1 / 1 | 2 |
| 2 | 1 / 1 | 0 / 0 | 1 / 1 | 4 |
| 3 | 1 / 1 | 0 / 0 | 1 / 1 | 6 |
| 4 | 1 / 1 | 0 / 0 | 1 / 1 | 8 |

Home retained exactly one engine/loop; detail retained none. Additional disposals during same-home navigation were safe and did not duplicate loops. Dispose disconnects ResizeObserver and IntersectionObserver, removes image/media/visibility/custom event listeners, cancels RAF and clears canvas backing stores. No timers or GSAP instances are created.

## Tests and visual evidence
- Vitest: 2 files, 5 tests passed (four required routes and idempotent motion start/pause/dispose).
- Latest platform diagnostic: build OK, 2026-10-06T11:45:15Z.
- Reviewed desktop hero, stitched complete home page, EN mobile, ZH mobile, representative Lake Room detail and reduced-motion screen.
- Review files: desktop-hero.png, home-long.png, mobile-en.png, mobile-zh.png, lake-room-detail.png in Files/Rainfield-review.
- Long page capture stitches fixed 1440×900 viewport images; it does not resize the artwork or use a full-page browser screenshot.

## Limits
Only Chromium was exercised. Touch is browser emulation, not a physical device. No Safari/Firefox or physical assistive-technology audit. There is intentionally no backend, real retreat, or booking workflow.
