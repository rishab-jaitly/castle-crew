# Cassle Crew Website

Responsive static website for the Cassle Crew Premium Hardware Collection.

## Run locally
Open `index.html` in a browser, or serve this folder using any static web server. No build step or package installation is required.

## Pages
- Home (`index.html`)
- Product catalogue with search (`products.html`)
- 13 category overview (`categories.html`) and individual category pages in `categories/`
- Product detail (`product.html?id=...`)
- About (`about.html`)
- Contact (`contact.html`)

## Assets and product grouping
All displayed product photographs and the logo are stored under `assets/images/` and referenced by relative paths. Product records are in `assets/js/catalog.js`. Styles representing size/finish variations are grouped under a single product card where the supplied photos support that grouping. Category assignments are editorial groupings based on the catalogue and available photos; verify model names and exact specifications with Cassle Crew before publishing.

## Contact
Phone: +91 98761 16200 (click-to-call links are included).


Pantry Pull-Out category update: includes PDF-cropped product photos for Universal Magic Corner, Bottle Pull Out, 12-basket Pantry Pull Out, G1209 Digital Lock and D019 Digital Lock. These catalogue items are grouped together in the Pantry Pull-Out category as requested.


## October 2026 photo corrections

- Product pictures for Universal Magic Corner, Bottle Pull Out, Pantry Pull Out, G1209 and D019 digital locks were directly extracted from embedded photographs in `Cassle Crew.pdf`. They were not cropped from a screenshot of a complete catalogue page.
- Additional basket, pantry swing-out, and bottle-rack products use separate genuine embedded catalogue images.
- Product/category image containers use `object-fit: contain` so the full photograph is visible.
- Each category page filters the catalogue by `categorySlug`. Sizes/finishes are kept on the same product listing.
- Some other product records retain images from the original supplied `images.zip`; please confirm naming and technical data against the printed catalogue before commercial publication.

## Catalogue consistency review (October 2026)
All 58 pages of the PDF were reviewed by page sequence and visual imagery. Product images in the active catalogue dataset are embedded images extracted from the PDF itself, not screenshots of the full pages. The image list is arranged according to the catalogue sections. Digital locks are now placed in Door Hardware & Locks, and Antique Concealed Hinges displays the actual concealed hinges from catalogue page 26. Distinct size variants are not deliberately listed as separate items. Generic design labels indicate that text recognition was insufficient to reliably transcribe model names; confirm specifications with Cassle Crew.


### Homepage product-link correction
Featured products on the homepage now link to active product IDs from `assets/js/catalog.js`. Product and category pages use that same source.


### Technical drawing cleanup
Removed 25 dimensioned profile/cross-section illustrations from the product catalogue. Product photographs and applicable hardware imagery remain. The excluded drawing images are not included in this ZIP.


## Product specifications (May 2026 catalogue)

Product detail pages present only specifications transcribed from the user-supplied May 2026 PDF catalogue. Prices/MRP are intentionally omitted. Some photographs do not include clear labels or unique specifications; those product pages do not invent missing fields. The Knobs category includes previously supplied imagery without PDF-verified specifications.


## November 2026 catalogue refinements
- Home category Kitchen Accessories replaces Pantry Pull-Out, main card photograph is third original pantry image.
- Wooden Kitchen Series remains in the full catalogue but is omitted from homepage category cards.
- Hinges, Drawer Runner and Digital Door Locks category labels updated.
- Removed Quadro / Full-Extension Slides, Kitchen & Cabinet Accessories and Knobs categories.
- Digital Door Locks contains six models only.
- Brass Pull Handles uses printed catalogue pages 47–48 (PDF pages 51–52); Pull Handles uses printed pages 49–51 (PDF pages 53–55) with non-handle CC-605 premium leg omitted.
- Wardrobe Series category card uses user-provided photography.
- Prices and MRP are intentionally not shown.


## Latest catalogue changes (November 2026)

- Drawer Runner category image: first listed Drawer Runner product.
- Brass Pull Handles: exactly 7 products (printed catalogue pages 47–48 / PDF pages 51–52).
- Pull Handles: exactly 9 products (printed catalogue pages 49–51 / PDF pages 53–55), including CC-605 in PVD Rose Gold.
- Handle images recropped from those product entries in the official PDF.
- Product prices are intentionally excluded.
