# CSE media posts

Reusable announcement templates and the approved facts used by the website.

## Structure

- `posts.json`: one record per announcement, shared by the website and poster renderer.
- `render.py`: Simple, Gaussian and Low-poly layouts; supports two recipients with adviser text or a three-person team including its adviser.
- `images/`: original public profile photographs.
- `../public/media-posts/<slug>/`: generated PNG, PDF, lightweight WebP previews and a plain-text caption.
- `/media-posts/`: website gallery. Each announcement has its own page and downloads.
- `/awards/`: all awards from the department news dataset, including these announcements.

The Simple layout is the default for sharing. Scientific layouts are alternatives. The torus is explicitly a conceptual illustration; replace it with a verified project figure when supplied by its authors.

## Reuse

1. Add an announcement to `posts.json`. Verify names, role labels, award title, date and adviser relationships. Keep winners and advisers distinct. Do not include email threads, contact details, internal approvals or funding paperwork.
2. Add authentic profile photographs under `images/<post>/` and record their public sources here. Use `posterName` or `adviserLines` only to control line breaks.
3. Choose `templates: ["simple"]` for a two-person fellowship announcement. For a three-person proposal team, provide `proposalLines` and optionally enable `gaussian` and `low-poly` with `illustration: "torus"`. Other illustrations require a renderer addition; do not silently reuse irrelevant artwork.
4. Generate the selected post:

   ```sh
   uv run --with matplotlib==3.11.2 --with pillow==12.3.0 python media-posts/render.py --post tcs-phd-fellowships-2026
   ```

   Omit `--post` to regenerate all entries. Python packages are isolated by `uv`; they are not website build dependencies. Arial and Source Code Pro are used when installed; other machines fall back to Matplotlib's DejaVu fonts.

5. Inspect the PNG and PDF, including all names and line breaks. The renderer checks text bounds. Commit the manifest, images and generated files together. The website builds directly from the committed exports.
6. Run `STAGING_PREVIEW=true npm run build` and `node --test scripts/*.test.mjs`. Publish to staging for review before merging to production.

PNG is 2160 × 2700, portrait 4:5. PDF is a custom 274.32 × 342.9 mm page. Web pages use small WebP previews; full PNG/PDF files load only when requested. Poster text is embedded in the PDF.

## Verified announcement facts

- **QIF India 2026**, announced 16 September 2026: Arjun Badola and Dikshit Hegde are winners, advised by Prof. Shanmuganathan Raman. Proposal: “Frequency-Adaptive Prior Supervision for Transparent 3D Gaussian Splatting”. They are not in the SuperWinners category.
- **TCS Research Scholar Program, Cycle 20**, selected 3 August 2026, effective 1 July 2026: Ayush Shrivastava (advisers Prof. Nipun Batra and Prof. Mayank Goel), and Rohit Narayanan (adviser Prof. Balagopal Komarath). The selection date and effective date are separate fields. This post makes no claim about disbursement.

## Portrait sources

Retrieved 17 September 2026. Images are placed in layout viewports without retouching.

- Arjun Badola: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), image linked there at `https://drive.google.com/thumbnail?id=1pN_HyrvrN6nYg0XF5Ruybas5CWdnSleS`.
- Dikshit Hegde: [personal academic homepage](https://dikshithegde.github.io/), `https://dikshithegde.github.io/images/Self.jpeg`.
- Shanmuganathan Raman: [IITGN faculty profile](https://iitgn.ac.in/faculty/cse/fac-shanmuganathan), its official faculty photograph.
- Ayush Shrivastava: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), `https://drive.google.com/thumbnail?id=1LMgOCEzVVZbUaU-R3g6tsFCymkjtKepa`.
- Rohit Narayanan: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), `https://drive.google.com/thumbnail?id=1OdUhS45c-F6PdTupa-mMNOvvk2Qj85RB`.

## Scientific illustration

Original mathematical artwork inspired by Nicolas Rougier's [Scientific Visualization](https://github.com/rougier/scientific-visualization-book) approach. No book code or figures are copied. A torus is sampled and projected as Gaussian ellipse contours, triangular faces or a wireframe. It is not a reconstruction or result from the QIF project. For the underlying Gaussian-splatting method, see [Kerbl et al., SIGGRAPH 2023](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/).
