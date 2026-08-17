# Dawn Patrol — Europe 2026

156 Atlantic surf spots from Gironde to Sesimbra, with live swell, wind and modelled tide,
scored against the tide window / swell direction / offshore wind noted for each spot in
The Stormrider Surf Guide Europe.

Single-file app: everything — spots, scoring, charts, styles — is inside `index.html`.

## What's in it

- **Route / Saved / Near me** — 156 spots by region, search, favourites, 25 nearest to you.
- **Map** — a real dark basemap, one region at a time; every spot is a pin carrying its score for
  right now, nudged apart where breaks sit on top of each other with a leader line back to the
  true position. Tap a pin for the spot.
- **Spot detail** — score out of 100 with its four factors, a swell/wind/wanted-swell compass
  rose, a 48-hour swell curve, tappable hourly score bars (scrub to any hour and every number
  re-reads), the tide curve with the spot's tide window shaded, the windows worth driving to,
  a five-day table, the guide's notes, and a live OpenStreetMap of the break.

## Light and dark

The sun/moon button in the header switches modes; the choice is remembered. First run follows the
phone's own appearance setting. The basemap swaps with it.

## Publish (GitHub Pages)

1. Upload `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` to the
   repository root. Commit.
2. **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
3. After a minute: `https://<your-username>.github.io/dawn-patrol/`

## Install on the phone

- **iPhone:** open that URL in **Safari** → Share → Add to Home Screen.
- **Android:** Chrome → menu → Install app.

Launches full screen, no browser bar.

## Offline

The app shell and all 156 spots with their guide notes are cached, so the list and the notes work
with no signal. Each spot's last successful forecast is saved — reopening it offline
shows that with its age. Forecasts and the map tiles need a connection.

## Caveats

- Tide is Open-Meteo's modelled sea level, not a harbour tide table. Check a real table before
  committing to a tide-critical spot (Mundaka, Rodiles, Coxos, La Gravière).
- 47 of 156 spots have a specific tide window from the guide; the rest default to "most tides".
- Size thresholds are hand-calibrated for ~45 spots; the rest use a generic band.
- 38 pins are approximate — surf-break names Google Maps does not hold. Marked in the app.
- Missing regions: Peniche, Nazaré, Galicia, northern Portugal.

Forecast data: Open-Meteo (marine + forecast APIs), free, no key, CC-BY 4.0.
Map tiles: CARTO dark basemap, © OpenStreetMap contributors.
