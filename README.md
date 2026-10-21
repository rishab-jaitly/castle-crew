# Cassle Crew — Hardware & Fittings Website

A responsive, static product catalogue built with HTML, CSS and vanilla JavaScript. No build tools, framework, server, or external font dependencies are required.

## Preview locally

1. Extract the ZIP.
2. Open `index.html` in a browser, or serve the folder with any static web server.
3. For example, with Python installed, run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Pages

- `index.html` — home and featured collection
- `categories.html` — category overview
- `categories/*.html` — category-specific product listings
- `products.html` — searchable product catalogue
- `product.html?id=...` — product detail view
- `about.html` — brand and collection overview
- `contact.html` — enquiry preparation form

## Editing the catalogue

Products and category metadata are in `assets/js/catalog.js`. Product photographs live in `assets/images/products/`, and the supplied logo is in `assets/images/logo/cassle-crew-mark.png`. Keep image paths in the catalogue consistent with the file names.

## Contact form note

The contact form prepares a draft using the visitor’s default email application; it does not send or store data. Before launch, replace `REPLACE-WITH-VERIFIED-CONTACT-EMAIL` in `contact.html` with Cassle Crew’s verified enquiry address. No business contact details were provided, so none were fabricated.

## Before production launch

- Confirm product names, stock, dimensions, finishes, materials, installation details and compatibility. The descriptions are visual/editorial summaries, not technical specifications.
- Add verified business contact details and privacy information as appropriate.
- Test on the intended hosting platform and add analytics only if desired.
- Add final approved social links, legal pages and domain-specific metadata if available.

## Technology

Semantic HTML5, responsive CSS, vanilla JavaScript, accessible navigation toggle, search filtering, query-string product details, and native lazy-loaded product images.
