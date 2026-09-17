# Homepage class photograph

The homepage uses Aditya Mehta's combined Class of 2026 photograph, attached as
`Class_of_2026.png` to “Re: Soft copy group photo” on 24 April 2026. Nipun selected
this photograph for the September 2026 launch after reviewing options
from Aditya and Shanmuganathan Raman.

The image links to a larger version. Responsive 640-, 960-, and 1440-pixel WebP variants live in
`public/images/people/`, prefixed `cse-class-2026`. They are approximately 51, 93,
and 162 kB, compared with the 4.6 MB attachment. The browser selects a suitable
size, with high fetch priority for the homepage image.

The prepared 2000 × 1414 image was cropped at x=110, y=390, width=1780,
height=1001 to remove the surrounding print title and margins. Sharp resized
and compressed the photograph to WebP at quality 84; faces were not retouched.
EXIF and other source metadata are omitted. Original attachments and mailbox
responses remain in the ignored local `.codex/farewell/` directory.


After launch, Nipun requested a two-photo carousel, adding the farewell dinner
photograph from Shanmuganathan Raman's Farewell folder (received 17 September
2026), source `ed38c54e-05f6-44da-b6de-49c008828dae.jpg`. This image was cropped
at x=0, y=650, width=4160, height=2340 and exported at the same three widths and
WebP quality. It is stored as `cse-farewell-dinner-*` (53, 105 and 206 kB).

The class photograph is first. Previous/next buttons and left/right arrow keys
switch photographs, updating the caption, alt text and full-size link. There is
no autoplay or carousel dependency. The dinner image loads only on request;
the class photograph remains available if JavaScript is disabled or loading fails.
