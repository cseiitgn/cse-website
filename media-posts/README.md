# Internal CSE poster collection

Working files for departmental announcements. This folder is outside `public/` and `src/pages/`; neither the gallery nor its posters are published by the website build. The public awards archive is maintained separately in `src/data/news.ts`.

## Open and share

Open `index.html` locally to compare designs and access PNG, PDF and caption files. Exported files are in `exports/<announcement>/`. Only share the selected export, rather than the working folder.

Preferred designs:

- QIF India 2026: **Gaussian**.
- TCS PhD fellowships 2026: **Low-poly**, with a Gaussian alternative.
- Google PhD Fellowship 2025: **Gaussian**.
- STOC Test of Time Award 2024: **Low-poly**.

Simple versions remain as alternatives. Geometric motifs are decorative; the QIF torus is a conceptual illustration of surface representations, not a result from the awarded project. Other posters use it as a visual motif, without implying a connection to the recipient's research.

## Reuse

1. Add a record to `posts.json` with verified names, award, year, caption, photo paths, templates and `preferredTemplate`. Keep winners and advisers distinct. Use only the year when the precise announcement date has not been verified.
2. Add authentic public profile photographs under `images/<announcement>/` and document the sources below. Do not add email threads, private contacts or administrative paperwork.
3. Choose `gaussian` or `low-poly`. Single-recipient records use `detailLabel`, `detailLines`, `closing` and optional `creditLines`; two-recipient fellowship records use `advisers`, `adviserLines` and `effectiveDate`; three-person QIF-style teams use `proposalLines`. Use `posterName` to control long-name line breaks.
4. Render a post and refresh the local gallery:

   ```sh
   uv run --with matplotlib==3.11.2 --with pillow==12.3.0 python media-posts/render.py --post tcs-phd-fellowships-2026
   ```

   Omit `--post` to regenerate all. Packages are isolated by `uv`, not website dependencies. Arial and Source Code Pro have DejaVu fallbacks.
5. Inspect the PNG and PDF for cropping, line breaks and names. The renderer checks text against page bounds. Commit sources and exports together. Do not copy exports into `public/` unless explicitly asked to publish a selected poster.

PNG: 2160 × 2700, portrait 4:5. PDF: 274.32 × 342.9 mm, embedded text. WebP previews: 1080 × 1350. `node --test scripts/media-posts.test.mjs` after a site build checks that this collection stays out of the deployed site.

## Verified announcement facts

- **QIF India 2026**, announced 16 September 2026: Arjun Badola and Dikshit Hegde are winners, advised by Prof. Shanmuganathan Raman. Proposal: “Frequency-Adaptive Prior Supervision for Transparent 3D Gaussian Splatting”. They are not in the SuperWinners category.
- **TCS Research Scholar Program, Cycle 20**, selected 3 August 2026, effective 1 July 2026: Ayush Shrivastava (advisers Prof. Nipun Batra and Prof. Mayank Goel), and Rohit Narayanan (adviser Prof. Balagopal Komarath). The selection date and effective date are separate fields. This post makes no claim about disbursement.

- **Google PhD Fellowship 2025**: Gayatri Priyadarsini Kancherla is listed under Privacy, Safety, and Security in [Google’s recipient list](https://research.google/programs-and-events/phd-fellowship/recipients/). Year verified; no exact date claimed.
- **STOC 2024 10-year Test of Time Award**: Anirban Dasgupta, Ravi Kumar and Tamás Sarlós, for “A Sparse Johnson-Lindenstrauss Transform” (STOC 2010), confirmed by [Cornell Bowers](https://bowers.cornell.edu/news-stories/faculty-and-alumni-receive-test-time-awards-stoc-2024). The portrait features the IITGN co-recipient; all three authors are credited.

## Portrait sources

Retrieved 17 September 2026. Images are placed in layout viewports without retouching.

- Arjun Badola: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), image linked there at `https://drive.google.com/thumbnail?id=1pN_HyrvrN6nYg0XF5Ruybas5CWdnSleS`.
- Dikshit Hegde: [personal academic homepage](https://dikshithegde.github.io/), `https://dikshithegde.github.io/images/Self.jpeg`.
- Shanmuganathan Raman: [IITGN faculty profile](https://iitgn.ac.in/faculty/cse/fac-shanmuganathan), its official faculty photograph.
- Ayush Shrivastava: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), `https://drive.google.com/thumbnail?id=1LMgOCEzVVZbUaU-R3g6tsFCymkjtKepa`.
- Rohit Narayanan: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), `https://drive.google.com/thumbnail?id=1OdUhS45c-F6PdTupa-mMNOvvk2Qj85RB`.

- Gayatri Priyadarsini Kancherla: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), listed as K.K. Gayatri Priyadarsini; `https://drive.google.com/thumbnail?id=1xlT7lJP3ntP-gKmLtTUDlhBb0g6X164V`.
- Anirban Dasgupta: [IITGN faculty profile](https://iitgn.ac.in/faculty/cse/fac-anirban), `https://iitgn.ac.in/media/pages/faculty/cse/fac-anirban/f540f910c6-1767089288/anirban.jpg`.

## Scientific illustration

Original mathematical artwork inspired by Nicolas Rougier's [Scientific Visualization](https://github.com/rougier/scientific-visualization-book) approach. No book code or figures are copied. A torus is sampled and projected as Gaussian ellipse contours, triangular faces or a wireframe. It is not a reconstruction or result from the QIF project. For the underlying Gaussian-splatting method, see [Kerbl et al., SIGGRAPH 2023](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/).
