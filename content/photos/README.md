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
| `office-workspace.jpg` | 2560x1707 | Fixed backdrop, about-us page |
| `egm-logo.webp` | 1117x1117 | EGM eG partner card |
| `beng-logo.jpg` | 600x400 | BENG eG partner card |
| `thomas-hamacher.jpg` | 1000x562 | Thomas Hamacher, advisors |
| `sebastian-schwenen.webp` | 433x265 | Sebastian Schwenen, advisors |
| `hubert-roeder.jpg` | 800x1115 | Hubert Röder, advisors |

`gemeinde-neuperlach.jpg` is small. It renders about 490px wide on a desktop
card, so on a retina screen it is being upscaled and looks soft. Replace it with
a version at least 1400px wide when one exists.

File names must not contain spaces; the import in `../images.ts` names the file
directly.

Alt text for all of these is already written in `content/copy/en.ts` and
`content/copy/de.ts`.
