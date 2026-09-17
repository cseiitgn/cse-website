"""Copy only selected finished media to the website. Run explicitly after render.py."""
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
    for original,published in [(selected+'.png','poster.png'),(selected+'.pdf','poster.pdf'),(selected+'-preview.webp','preview.webp'),('caption.txt','caption.txt')]:
        shutil.copy2(src/original,dest/published)
    media[award_id]={'base':f'/media/awards/{award_id}','alt':post['title']}
(ROOT/'src'/'data'/'award-media.json').write_text(json.dumps(media,indent=2,ensure_ascii=False)+'\n')
print(f'Published {len(media)} selected posters; working gallery and source photos remain internal.')
