# Organisation and content review — 14 September 2026

This revision is for the password-protected `staging` branch. Production is unchanged.

## Navigation and appearance

- Research areas are inside a nested **Research → Research areas** menu. Theory, Systems, and AI & Machine Learning remain the three main groups; the older topic URLs still work.
- The homepage and research overview show short area descriptions and links to the faculty and work in each area. The repeated wall of faculty names has been removed. Area headings are checked in the generated HTML.
- About, People, and Academics now have usable overview pages. Breadcrumbs provide a route back to each section. Navigation labels are shorter, Faculty comes first under People, and Updates is labelled News & events.
- Independent URL controls: `q=navy|forest|terracotta` and `type=modern|system|editorial`. They can be combined, preserve the current page and fragment, and follow internal navigation. Invalid values fall back to Navy and Modern.
- Modern uses the existing locally served Geist. System uses the device's sans-serif font; Editorial uses Georgia for headings and Geist for body text. These alternatives add no font downloads.
- The humanizer skill was applied to the homepage, research summaries, faculty introduction, academic overview, SRIP description, award summary, and administrative copy. Paper and talk titles and factual claims remain intact.

## Email review and approved sources

The all-history sender search of the IITGN mailbox matched 2,791 messages from `hod.cse@iitgn.ac.in` and `abhishek.b@iitgn.ac.in`. The subject/body scan identified 474 candidates concerning website changes, seminars, appointments, orders, awards, and related updates. Relevant threads were checked against the existing site; reminders and quoted replies were deduplicated. Raw email and signed attachments remain in the ignored local working directory.

| Source | Result |
| --- | --- |
| Revisions for CSE Website, 16 July 2026, forwarded 4 September | Retains the institute logo, official portraits, three research groups, current talks and awards; simplifies how these are presented. |
| Revised Office Order — Department Level Committees, 27 August | All 13 assignments replaced using signed order **CSE/HOD/2026-27/003**. Term: **1 September 2026–31 August 2027**. Both PDF pages were visually checked. |
| Constitution of DFAC, approved and forwarded 10 September | Adds Raman, Bireswar Das, Anirban Dasgupta, and Balagopal Komarath. **DFA/2026-27/166**, operational **10 September 2026**. This supersedes the earlier proposed start date. The signed page was visually checked. |
| Ordering of Faculty Profiles, 20 September 2025 | Retains alphabetical order by first name within each category; separates joint appointments from affiliated faculty, alongside existing teaching, practice, visiting, and guest categories. |
| Research Areas for PhD Admissions, 28–29 August 2026 | Cross-checked coverage against the three broad research groups. The thread's proposed intake and programme changes are not treated as approved admissions policy. Applicants are directed to IITGN's admissions page. |
| Abhishek's Mainack Mondal announcement, 28 July | Adds the missing **30 July 2026** seminar, “Trust: Built, Broken, Repaired”, at **5 pm, AB 13/126**. |
| Abhishek's August–September seminar announcements | Vineeth Chintala, Ambarish Ojha, Ranjani Krishnan, and Arnav Gupta were already included in the previous revision. Ranjani's descriptive title is retained; the editorial explanation is removed from the visitor-facing summary. The 9 September reminder says the talk will start later, without a revised start time; the original advertised time is retained. |
| IndiaAI PhD Fellowships Awarded, 13 June | Verified the three existing awardees and advisors; removes the promotional closing phrase. |
| ACM India Doctoral Dissertation Award call, forwarded 2 September | Adds the **15 September 2026, 11 pm IST** nomination deadline and advisor/institutional endorsement requirement, linked to the announced submission portal. The page updates the expired status in the browser between static builds. |

Expired Theory Day registration is now listed under past deadlines, without a registration button. Internal applicant evaluations, faculty-search deliberations, proposed admissions changes, and internal meeting invitations were not copied to public content. Nomination calls are not described as awards won.

## Additional portraits

IITGN remains the primary source (25 faculty portraits plus staff). Six gaps are now filled with small local WebP files, bringing faculty coverage to **31 of 31**. Each source is recorded in `src/data/supplementary-portraits.json`.

| Faculty | Verified photo source |
| --- | --- |
| Viraj Shah | [Personal website](https://virajshah.com/), which links to his matching LinkedIn profile |
| Samit Bhattacharya | [IIT Guwahati profile](https://iitg.ac.in/samit/) |
| K. Gopinath | [IISc profile](https://www.csa.iisc.ac.in/~gopi/) |
| Ambarish Ojha | [Punjab National Bank director profile](https://pnb.bank.in/Director-Shri-Ambarish-Ojha.html), matching the seminar biography |
| Madhavan Unnikrishnan Nair | [Cybertech speaker profile](https://tokyo.cybertechconference.com/node/2058); identity and IITGN association checked against his [LinkedIn profile](https://in.linkedin.com/in/lt-gen-madhavan-unnikrishnan-nair-6b69a478) |

Adithya Kumar’s portrait now uses the Google Scholar image supplied by Nipun: [Google Scholar profile](https://scholar.google.com/citations?user=vVYNBYgAAAAJ). The earlier placeholders remain excluded.

Public pages omit internal order numbers, forwarding notes, and editorial verification/curation notes. Source records remain here and in the data files for future updates.

## Visitor archive correction

The old visitor dataset stopped at 27 March 2026. Visitors now derives new entries from the seminar records and retains older standalone entries. The merged archive contains 56 visits and talks, including 13 after 27 March, through Vineeth Chintala on 10 September. Overlapping speaker/date records are deduplicated. Online talks are labelled; proposal discussions and teaching assessments do not create extra visitor entries. Talk titles link to the corresponding seminar details.

Abhishek’s 1 April forward of Joycee Mekie’s announcement also adds Devashree Tripathy’s invited talk, “AI Infrastructure: Optimizing LLM for Efficiency and Scalability”, at 11:30 am in AB13/126 on 1 April 2026. Tentative invitations in the HoD’s 20 May planning email were not treated as completed visits.

## Verification

Build and regression checks cover static navigation and assets, script budget, palette/type whitelists, named research headings, nested navigation, approved committee membership/dates, photo provenance and size, usable overview pages, expired registration, click-to-load video, and preview access protection. Browser checks cover desktop/mobile layouts, appearance changes, internal-link persistence, administration search, and research submenu navigation.

The pre-existing TypeScript errors in `faq-section.tsx`, `not-found.tsx`, `pricing.tsx`, and `publications-directory.tsx` are separate from this revision. No new packages were added.

## Alumni portraits and copy — 15 September 2026

All 12 featured alumni now have local WebP portraits (82,758 bytes combined), lazy-loaded with explicit dimensions. Sources and retrieval dates are recorded in `src/data/alumni-portraits.json`. Images were checked together for correct subjects and cropping, then in the desktop and mobile page layouts. No client-side gallery or new dependency was added.

The page has jump links for highlights, careers, and the doctoral alumni record. Shorter descriptions replace editorial phrases such as “public trajectories”. Existing profile links remain available; Pankaj's link now leads to his St. Jude lab and obsolete CVIG links use Raman's working website.

Content corrections from current profiles:

- Dharaben R. Thakkar: Designated Assistant Professor at Nagoya University; winner of the ACM India Doctoral Dissertation Award 2025 for work on optimal representations of finite groups. Sources: [personal profile](https://sites.google.com/iitgn.ac.in/dharathakkar), [ACM India ARCS](https://event.india.acm.org/arcs/), and [ACM award record](https://prod-awards.acm.bloomreach.cloud/india-doctoral-dissertation).
- Murali Krishna Enduri: Assistant Dean (Graduate Outcomes) at SRM University-AP, as shown on his [faculty profile](https://www.srmap.edu.in/faculty/dr-murali-krishna-enduri/).
- Sudhakar Kumawat: graduation year is shown consistently as 2021, matching the doctoral alumni record.
- Rachit Chhaya: uses the university's current Dhirubhai Ambani University name.

Validation: 69-page static build; all 24 existing regression checks passed; all 12 local images decoded successfully and appeared in browser checks; no horizontal overflow at desktop or 390px mobile width.
