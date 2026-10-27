# Photos

Drop project and portrait photos here, then wire them up in
[`content/images.ts`](../images.ts).

- **Project photos**: the actual installation. Landscape, at least 1600px wide.
- **Portraits**: at least 600×600. Anything smaller looks soft on a retina screen.
- No stock photography. A visible placeholder is better than a fake.

`.webp`, `.png`, `.jpg` and `.avif` all work. `next.config` sets
`images.unoptimized`, so every file ships exactly as it is here: resize and
compress before adding one. Backdrops at most 2560px wide and a few hundred KB,
portraits around 800px, and photos as `.jpg` or `.webp`, not `.png`. The build derives width and height
from the file, so there is nothing to keep in sync.

## In use

| File | Size | Where |
| --- | --- | --- |
| `hero.webp` | 2200x1463 | Hero, next to the headline |
| `harthof-ascend.jpg` | 596x720 | Harthof · ASCEND project card |
| `gemeinde-neuperlach.jpg` | 703x376 | Neuperlach project card |
| `tum-garching.png` | 656x369 | TUM Project · Garching card |
| `wind-turbines.jpg` | 1600x792 | Wind excursion card (cropped from `solar-wind-v2.jpeg`) |
| `solar-wind-v2.jpeg` | 2560x1580 | Fixed backdrop, home and projects pages |
| `office-workspace.jpg` | 2560x1707 | Fixed backdrop, about-us page |
| `egm-logo.webp` | 1117x1117 | EGM eG partner card |
| `beng-logo.jpg` | 600x400 | BENG eG partner card |
| `thomas-hamacher.jpg` | 1000x562 | Thomas Hamacher, advisors |
| `sebastian-schwenen.webp` | 433x265 | Sebastian Schwenen, advisors |
| `hubert-roeder.jpg` | 800x1115 | Hubert Röder, advisors |
| `watt-the-hack.webp` | 1080x1080 | WATT THE HACK poster, events page (from the Luma listing) |
| `baywa-re.png` | 813x196 | BayWa r.e. logo, WATT THE HACK challenges (white made transparent) |
| `nomadic-drones.png` | 988x314 | Nomadic Drones logo, WATT THE HACK challenges (white made transparent) |
| `ecurious.png` | 1390x274 | Ecurious logo, WATT THE HACK challenges (white made transparent) |
| `nuuenergy.png` | 690x409 | nuuEnergy logo, WATT THE HACK challenges (white made transparent) |
| `winners-nuuenergy.jpg` | 1600x1069 | Team Swap, nuuEnergy winners card |
| `winners-nomadic-drones.jpg` | 1600x1069 | NomaderWatt, Nomadic Drones winners card |
| `winners-ecurious.jpg` | 1600x1069 | Flash, Ecurious winners card |
| `winners-baywa-re.jpg` | 1600x1134 | FAMi, BayWa r.e. winners card |
| `tim-keuerleber.jpg` | 400x400 | Tim Keuerleber, team |
| `eliana-sattarova.jpg` | 600x600 | Eliana Sattarova, team (cropped square from a selfie) |
| `nikhil-rao-jabade-chandra.jpg` | 280x280 | Nikhil Rao Jabade Chandra, team (cropped square) |
| `lampros-konstantellos.jpg` | 400x400 | Lampros Konstantellos, advisors |
| `reinaldo-tonkoski.jpg` | 600x600 | Prof. Dr. Reinaldo Tonkoski, advisors (official TUM headshot from portal.fis.tum.de, cropped) |
| `watt-the-hack-001.jpg` to `-127.jpg` | 1100px long edge | WATT THE HACK gallery, events page, in page order (colour-corrected; camera shots from the .ARW embedded previews in `social media/Hackathon`) |

`gemeinde-neuperlach.jpg` is small. It renders about 490px wide on a desktop
card, so on a retina screen it is being upscaled and looks soft. Replace it with
a version at least 1400px wide when one exists.

File names must not contain spaces; the import in `../images.ts` names the file
directly.

Alt text for all of these is already written in `content/copy/en.ts` and
`content/copy/de.ts`.
