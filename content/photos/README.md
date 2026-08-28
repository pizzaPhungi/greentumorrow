# Photos

Drop project and portrait photos here, then wire them up in
[`content/images.ts`](../images.ts).

- **Project photos**: the actual installation. Landscape, at least 1600px wide.
- **Portraits**: at least 600×600. Anything smaller looks soft on a retina screen.
- No stock photography. A visible placeholder is better than a fake.

`.webp`, `.png`, `.jpg` and `.avif` all work. The build derives width and height
from the file, so there is nothing to keep in sync.

## Waiting on

| File name | What it is |
| --- | --- |
| `hero.jpg` | The one image above the fold. Renewable energy at first glance: an array, a site, people at work. It carries the whole top of the page, so it should be yours and specific, not a stock panel. |

Drop it in, then uncomment the import in [`../images.ts`](../images.ts) and
replace the `hero.photoAlt` TODO in **both** copy modules.

## In use

| File | Size | Where |
| --- | --- | --- |
| `perlacher-herz.webp` | 1920x1078 | Perlacher Herz project card |
| `gemeinde-neuperlach.png` | 703x376 | Neuperlach project card |

`gemeinde-neuperlach.png` is small. It renders about 490px wide on a desktop
card, so on a retina screen it is being upscaled and looks soft. Replace it with
a version at least 1400px wide when one exists.

File names must not contain spaces; the import in `../images.ts` names the file
directly.

Alt text for both is already written in `content/site.ts`. Once the files are
here, uncomment the two imports in `../images.ts` and they appear.

**Before publishing the Perlacher Herz photo:** it shows roughly ten identifiable
people. Publishing it needs their consent (GDPR, and § 22 KunstUrhG). Get it in
writing, or use a frame where nobody is recognisable.
