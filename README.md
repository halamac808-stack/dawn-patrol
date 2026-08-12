# Dawn Patrol — Europe 2026

156 Atlantic surf spots from Gironde to Sesimbra, with live swell, wind and modelled tide,
scored against the tide window / swell direction / offshore wind noted for each spot in
The Stormrider Surf Guide Europe.

## Publish it (GitHub Pages)

1. github.com → **New repository** → name it `dawn-patrol` → **Public** → Create.
2. On the empty repo page click **uploading an existing file**.
3. Drag in all five files: `index.html`, `manifest.webmanifest`, `sw.js`,
   `icon-192.png`, `icon-512.png`. Commit.
4. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
5. Wait about a minute, then open `https://<your-username>.github.io/dawn-patrol/`

## Install on the phone

- **iPhone:** open that URL in **Safari** (not Chrome) → Share → Add to Home Screen.
- **Android:** open in Chrome → menu → Install app / Add to Home screen.

It launches full screen with no browser bar.

## Offline

The app shell and all 156 spots with their guide notes are cached, so the list and notes work
with no signal. Forecasts need a connection — but each spot's last successful forecast is saved,
and reopening it offline shows that with an "offline" banner and its age.

## Caveats

- Tide is Open-Meteo's modelled sea level, not a harbour tide table. Check a real table before
  committing to a tide-critical spot (Mundaka, Rodiles, Coxos, La Graviere).
- 47 of 156 spots have a specific tide window from the guide; the rest default to "most tides".
- Size thresholds are hand-calibrated for ~45 spots; the rest use a generic band.
- 38 pins are approximate — surf-break names Google Maps does not hold. Marked in the app.
- Missing regions: Peniche, Nazare, Galicia, northern Portugal.

Forecast data: Open-Meteo (marine + forecast APIs), free, no key, CC-BY 4.0.
