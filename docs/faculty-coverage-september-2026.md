# Faculty allocation applied to staging

Mapping imported from CSE-faculty-allocations.xlsx on 16 September 2026 and applied at Nipun’s request. This is the current staging allocation; it is not described as final HoD approval.

All 31 directory entries have an explicit allocation record: Theory 7, Systems 8, AI/ML 10, and Unallocated 8. Anirban Dasgupta and Shouvick Mondal each have two area assignments. Categories also follow the workbook.

| Faculty | Category | Area(s) |
| --- | --- | --- |
| Abhishek Bichhawat | core | Systems |
| Adithya Kumar | core | Systems |
| Ajay Singh | core | Systems |
| Ambarish Ojha | guest | Unallocated |
| Anirban Dasgupta | core | Theory, AI/ML |
| Anup Kalbalia | practice | Theory |
| Balagopal Komarath | core | Theory |
| Bireswar Das | core | Theory |
| Joycee M. Mekie | affiliated | Systems |
| Jyothi Krishnan | teaching | Theory |
| K. Gopinath | guest | Unallocated |
| Krishna Prasad Miyapuram | affiliated | AI/ML |
| Madhavan Unnikrishnan Nair | guest | Unallocated |
| Manisha Padala | core | AI/ML |
| Manoj D Gupta | core | Theory |
| Manu Awasthi | practice | Systems |
| Mayank Singh | core | AI/ML |
| Neeldhara Misra | core | Theory |
| Nipun Batra | core | AI/ML |
| Nirmal Kumar Sancheti | visiting | AI/ML |
| Rajat Moona | core | Systems |
| Sameer G Kulkarni | core | Systems |
| Samit Bhattacharya | visiting | Unallocated |
| Shanmuganathan Raman | joint | AI/ML |
| Shouvick Mondal | core | Systems, AI/ML |
| Subir Verma | guest | Unallocated |
| Udit Bhatia | joint | AI/ML |
| Venkatesh Raman | guest | Unallocated |
| Viraj Shah | guest | Unallocated |
| Yogesh Kumar Meena | core | AI/ML |
| Yuvraj Patel | guest | Unallocated |

The JSON allocation file is the source for broad group membership and categories. Existing subtopic faculty lists are filtered by their parent group. Faculty without an area remain in the faculty directory. No allocation-status section or label is shown on the website.

The build rejects missing or unknown allocation names. Tests check all categories and memberships, rendered faculty cards, directory coverage, and the absence of public allocation-status labels. Run npm run build and node --test scripts/*.test.mjs.
