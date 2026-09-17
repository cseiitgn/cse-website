# Internal CSE poster collection

Working files for departmental announcements. This folder is outside `public/` and `src/pages/`; the working gallery and source files are excluded from the website build. Selected finished posters are explicitly copied to `public/media/awards/` for links on the awards page. The public awards archive is maintained separately in `src/data/news.ts`.

## Open and share

Open `index.html` locally to compare designs and access PNG, PDF and caption files. Exported files are in `exports/<announcement>/`. Only share the selected export, rather than the working folder.

Preferred designs:

- QIF India 2026: **Gaussian**.
- TCS PhD fellowships 2026: **Low-poly**, with a Gaussian alternative.
- Google PhD Fellowship 2025: **Gaussian**.
- STOC Test of Time Award 2024: **Low-poly**.
- IndiaAI fellowships, COMSNETS, Himanshu's awards, the three Inter-IIT 2025 wins and Dharaben's dissertation award: **Low-poly**, with a subject-specific diagram.

The shared design language is typography, layout and a dark-blue background with white text, blue illustrations and a white IITGN header. Every portrait has a narrow pale-blue mat and fine blue border, keeping white and photographic backgrounds visually consistent. Each illustration is chosen from the specific article or the recipient's verified research. Sources and the meaning of each schematic are stored in `posts.json` under `illustrationSources` and `illustrationDescription`.

- **QIF:** a torus rendered as Gaussian splats or triangular faces, illustrating surface representation. It remains a conceptual example, not a project result.
- **TCS:** a thermal patch and waveform for Ayush's health sensing; a monotone arithmetic formula for Rohit's algebraic complexity. The motifs describe their published research areas, without claiming to depict their fellowship proposals.
- **Google fellowship:** a browser-storage permission diagram inspired by Gayatri's work on least-privilege access.
- **STOC:** a sparse matrix mapping a longer vector to a shorter one, linked to the awarded dimension-reduction paper. The toy matrix illustrates sparsity and dimensions; no numerical accuracy guarantee is implied.

Simple versions remain available. Choose a text-led layout when no relevant illustration is supported by the sources.

The September 2026 collection covers every awards-page entry from QIF 2026 through Dharaben's 2025 award, plus the existing STOC 2024 poster. `layout: team` uses a named roster and a large topic diagram. `layout: fellows-roster` pairs each fellow with their adviser. These layouts give everyone equal space when a complete set of verified portraits is unavailable. They use no generated faces or placeholder portraits.

Additional original illustrations in `recognition_illustrations.py`:

- **IndiaAI:** a layered learning-network schematic, without suggesting particular fellowship topics.
- **COMSNETS:** network observations leading into a conceptual diagnostic workflow.
- **Himanshu:** two language streams entering a shared model, linked to multilingual NLP.
- **Algorithmic optimisation:** a route through a graph, not a claim about the winning solution.
- **Game development:** an imagined isometric tile level, not a screenshot of the team's game.
- **Geospatial analysis:** stacked synthetic raster layers, not satellite measurements.
- **Dharaben:** the cyclic group of order five, as an introductory finite-group example.

## Reuse

1. Add a record to `posts.json` with verified names, award, year, caption, photo paths, templates and `preferredTemplate`. Keep winners and advisers distinct. Use only the year when the precise announcement date has not been verified.
2. Add authentic public profile photographs under `images/<announcement>/` and document the sources below. Do not add email threads, private contacts or administrative paperwork.
3. All templates use dark blue and white. Choose `gaussian` or `low-poly` for the drawing style separately from the `illustration`. Original topic drawings live in `illustrations.py`; add a suitable drawing and explicit renderer mapping for new topics. Avoid a default decorative object. Single-recipient records use `detailLabel`, `detailLines`, `closing` and optional `creditLines`; two-recipient fellowship records use `advisers`, `adviserLines` and `effectiveDate`; three-person QIF-style teams use `proposalLines`. Use `posterName` to control long-name line breaks.
4. Render a post and refresh the local gallery:

   ```sh
   uv run --with matplotlib==3.11.2 --with pillow==12.3.0 python media-posts/render.py --post tcs-phd-fellowships-2026
   ```

   Omit `--post` to regenerate all. Packages are isolated by `uv`, not website dependencies. Arial and Source Code Pro have DejaVu fallbacks.
5. Inspect the PNG and PDF for cropping, line breaks and names. The renderer checks text against page bounds. Commit sources and exports together. Run `python3 media-posts/publish.py` to copy the preferred PNG, PDF, preview and caption for each announcement into `public/media/awards/` and update `src/data/award-media.json`. The remaining variants and source portraits stay internal.

PNG: 2160 × 2700, portrait 4:5. PDF: 274.32 × 342.9 mm, embedded text. WebP previews: 1080 × 1350. `node --test scripts/media-posts.test.mjs` after a site build checks that the working collection stays internal and selected media downloads match their reviewed exports.

## Verified announcement facts

- **QIF India 2026**, announced 16 September 2026: Arjun Badola and Dikshit Hegde are winners, advised by Prof. Shanmuganathan Raman. Proposal: “Frequency-Adaptive Prior Supervision for Transparent 3D Gaussian Splatting”. They are not in the SuperWinners category.
- **TCS Research Scholar Program, Cycle 20**, selected 3 August 2026, effective 1 July 2026: Ayush Shrivastava (advisers Prof. Nipun Batra and Prof. Mayank Goel), and Rohit Narayanan (adviser Prof. Balagopal Komarath). The selection date and effective date are separate fields. This post makes no claim about disbursement.

- **Google PhD Fellowship 2025**: Gayatri Priyadarsini Kancherla is listed under Privacy, Safety, and Security in [Google’s recipient list](https://research.google/programs-and-events/phd-fellowship/recipients/). Year verified; no exact date claimed.
- **STOC 2024 10-year Test of Time Award**: Anirban Dasgupta, Ravi Kumar and Tamás Sarlós, for “A Sparse Johnson-Lindenstrauss Transform” (STOC 2010), confirmed by [Cornell Bowers](https://bowers.cornell.edu/news-stories/faculty-and-alumni-receive-test-time-awards-stoc-2024). The portrait features the IITGN co-recipient; all three authors are credited.

## Portrait sources

Retrieved 17 September 2026. Original source photographs are retained. User-requested background-cleaned copies for Rohit and Gayatri are recorded in `background-edits.json`; edited files use `-white.png`. The built-in image editor was instructed to preserve identity, expression, clothing and pose while replacing only distracting backgrounds with white. Other photos retain their original backgrounds.

- Arjun Badola: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), image linked there at `https://drive.google.com/thumbnail?id=1pN_HyrvrN6nYg0XF5Ruybas5CWdnSleS`.
- Dikshit Hegde: [personal academic homepage](https://dikshithegde.github.io/), `https://dikshithegde.github.io/images/Self.jpeg`.
- Shanmuganathan Raman: [IITGN faculty profile](https://iitgn.ac.in/faculty/cse/fac-shanmuganathan), its official faculty photograph.
- Ayush Shrivastava: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), `https://drive.google.com/thumbnail?id=1LMgOCEzVVZbUaU-R3g6tsFCymkjtKepa`.
- Rohit Narayanan: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), `https://drive.google.com/thumbnail?id=1OdUhS45c-F6PdTupa-mMNOvvk2Qj85RB`.

- Gayatri Priyadarsini Kancherla: [IITGN scholar directory](https://iitgn.ac.in/people/students/cse), listed as K.K. Gayatri Priyadarsini; `https://drive.google.com/thumbnail?id=1xlT7lJP3ntP-gKmLtTUDlhBb0g6X164V`.
- Anirban Dasgupta: [IITGN faculty profile](https://iitgn.ac.in/faculty/cse/fac-anirban), `https://iitgn.ac.in/media/pages/faculty/cse/fac-anirban/f540f910c6-1767089288/anirban.jpg`.
- Himanshu Beniwal: [personal research homepage](https://himanshubeniwal.github.io/), `/socials/mypic.jpeg`. The poster uses a display crop of the original photograph.
- Dharaben R. Thakkar: [ACM India ARCS](https://event.india.acm.org/arcs/), `https://event.india.acm.org/wp-content/uploads/2024/10/dharaben-thakkar.jpg`.

The new portraits retain their original backgrounds. The official CSE scholar directory currently uses placeholder images for Naren Kumar and Manvendra Singh; the IndiaAI poster therefore uses a complete named roster.

## Sources for the additional announcements

Verified 17 September 2026. The displayed year/month follows the award announcement; no precise date is inferred from a sorting date in the website data.

- IndiaAI: [CSE department announcement](https://cse.iitgn.ac.in/updates/news/), including all three adviser assignments.
- COMSNETS: [conference awards](https://www.comsnets.org/awards.html), Graduate Forum Best Paper Runner-up, with all three authors. The indexed conference page retains the 2026 awards even while the site header advertises 2027.
- Himanshu: [IITGN Connections XVIII(1), page 4](https://iitgn.ac.in/assets/pdfs/connections/v18i1.pdf), [Microsoft's 2025 recipients](https://www.microsoft.com/en-us/research/academic-program/microsoft-research-india-phd-award/2025-awardees/), and his research homepage. The two recognitions and their years are named separately.
- Inter-IIT: [IITGN Technical Council achievements](https://technical-council.iitgn.tech/achievements), including team membership, placements and the December 11-14, 2025 event at IIT Patna. Short names follow this source without guessed surnames.
- Dharaben: [ACM India Doctoral Dissertation Award](https://awards.acm.org/india-doctoral-dissertation), also available at [ACM's publishing host](https://prod-awards.acm.bloomreach.cloud/india-doctoral-dissertation), for the dissertation title and 2025 award year.

## Scientific illustration

Original mathematical artwork inspired by Nicolas Rougier's [Scientific Visualization](https://github.com/rougier/scientific-visualization-book) approach. No book code or figures are copied. A torus is sampled and projected as Gaussian ellipse contours, triangular faces or a wireframe. It is not a reconstruction or result from the QIF project. For the underlying Gaussian-splatting method, see [Kerbl et al., SIGGRAPH 2023](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/).

### Sources for the topic illustrations

- [Gayatri et al., Least Privilege Access for Persistent Storage Mechanisms in Web Browsers](https://arxiv.org/abs/2411.15416): labels restrict script access to cookies and other persistent storage. The poster uses an original simplified allow/block diagram.
- [Ayush's research homepage](https://ayushshrivstava.github.io/): health sensing, thermal imagery and sleep-apnea screening. The poster's thermal patch and waveform are synthetic, with no patient data.
- [Komarath and Narayanan, Monotone Bounded Depth Formula Complexity of Graph Homomorphism Polynomials](https://arxiv.org/abs/2511.03388): the poster uses a small arithmetic formula as an introductory visual, not a reproduction of their decomposition.
- [Dasgupta, Kumar and Sarlós, A Sparse Johnson–Lindenstrauss Transform](https://arxiv.org/abs/1004.4240): sparse projection for dimension reduction. The poster illustrates matrix shape and sparsity, not the construction or its guarantees.
