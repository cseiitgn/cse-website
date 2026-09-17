"""Copy only selected web previews to the website. Run explicitly after render.py."""
import json
import shutil
from pathlib import Path
SOURCE=Path(__file__).resolve().parent
ROOT=SOURCE.parent
posts=json.loads((SOURCE/'posts.json').read_text())
media={}
for post in posts:
    award_id=post['awardId']
    assert '/' not in award_id and '..' not in award_id
    selected=post['preferredTemplate']
    src=SOURCE/'exports'/post['slug']
    dest=ROOT/'public'/'media'/'awards'/award_id
    dest.mkdir(parents=True,exist_ok=True)
    shutil.copy2(src/(selected+'-preview.webp'),dest/'preview.webp')
    # Downloadable originals belong only in the repository's working collection.
    for filename in ['poster.png','poster.pdf','caption.txt']:
        (dest/filename).unlink(missing_ok=True)
    media[award_id]={'base':f'/media/awards/{award_id}','alt':post['title']}
(ROOT/'src'/'data'/'award-media.json').write_text(json.dumps(media,indent=2,ensure_ascii=False)+'\n')
print(f'Published {len(media)} web previews; PNGs, PDFs, captions and source photos remain in media-posts/.')
