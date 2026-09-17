"""Three original Matplotlib announcement layouts with approved portrait assets.
Run: uv run --with matplotlib==3.11.2 --with pillow==12.3.0 python media-posts/render.py
"""
from pathlib import Path
import json
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import Ellipse, Polygon, Rectangle
from matplotlib.font_manager import FontProperties
from PIL import Image
from illustrations import browser_permissions, sparse_projection, fellowship_research
from recognition_illustrations import learning_network, multilingual_model, finite_group, TEAM_ILLUSTRATIONS

SOURCE=Path(__file__).resolve().parent
ROOT=SOURCE.parent
OUT=SOURCE/"exports"
FONT='/System/Library/Fonts/Supplemental/Arial.ttf'
BOLD='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
MONO='/Library/Fonts/SourceCodePro-Regular.ttf'
from matplotlib.font_manager import findfont
FONT=FONT if Path(FONT).exists() else findfont('DejaVu Sans')
BOLD=BOLD if Path(BOLD).exists() else findfont(FontProperties(family='DejaVu Sans',weight='bold'))
MONO=MONO if Path(MONO).exists() else findfont('DejaVu Sans Mono')
plt.rcParams.update({'svg.fonttype':'path','pdf.fonttype':42})
A=np.deg2rad(57); B=np.deg2rad(-18)
R=np.array([[np.cos(B),-np.sin(B),0],[np.sin(B),np.cos(B),0],[0,0,1]]) @ np.array([[1,0,0],[0,np.cos(A),-np.sin(A)],[0,np.sin(A),np.cos(A)]])
P=np.array([[1,0,0],[0,-1,0]])@R

def point(u,v):
    return np.array([(1.19+.40*np.cos(v))*np.cos(u),(1.19+.40*np.cos(v))*np.sin(u),.40*np.sin(v)])

def gaussian(ax,c,s):
    samples=[]
    for u in np.linspace(0,2*np.pi,58,endpoint=False):
      for v in np.linspace(0,2*np.pi,16,endpoint=False):
        p=point(u,v); tu=np.array([-np.sin(u),np.cos(u),0]); tv=np.array([-np.sin(v)*np.cos(u),-np.sin(v)*np.sin(u),np.cos(v)]); n=np.cross(tu,tv)
        cov=.075**2*np.outer(tu,tu)+.045**2*np.outer(tv,tv)+.012**2*np.outer(n,n)
        vals,vecs=np.linalg.eigh(P@cov@P.T*s*s)
        samples.append(((R@p)[2],np.array(c)+P@p*s,vals,np.degrees(np.arctan2(vecs[1,1],vecs[0,1])),u))
    for depth,xy,vals,ang,u in sorted(samples,key=lambda x:x[0]):
        mix=(np.sin(u+.5)+1)/2
        color=np.array(matplotlib.colors.to_rgb('#67aff6'))*(1-mix)+np.array(matplotlib.colors.to_rgb('#d5eaff'))*mix
        for k,alpha in [(2.5,.055),(1.7,.09),(1.,.12)]:
            ax.add_patch(Ellipse(xy,2*k*np.sqrt(vals[1]),2*k*np.sqrt(vals[0]),angle=ang,facecolor=color,edgecolor='none',alpha=alpha))
        ax.add_patch(Ellipse(xy,3.4*np.sqrt(vals[1]),3.4*np.sqrt(vals[0]),angle=ang,facecolor='none',edgecolor=color,alpha=.30,lw=.4))

def poly(ax,c,s):
    faces=[]
    nu,nv=26,11
    for i in range(nu):
      for j in range(nv):
        u=2*np.pi*i/nu; u1=2*np.pi*(i+1)/nu; v=2*np.pi*j/nv; v1=2*np.pi*(j+1)/nv
        ps=[point(u,v),point(u1,v),point(u1,v1),point(u,v1)]
        for ids in [(0,1,2),(0,2,3)]:
            pts=np.array([ps[k] for k in ids]); n=np.cross(pts[1]-pts[0],pts[2]-pts[0]); n/=np.linalg.norm(n)
            light=np.array([-.3,-.4,1]); light/=np.linalg.norm(light)
            shade=.32+.68*abs(np.dot(R@n,light))
            t=(np.sin(u+.45)+1)/2
            col=(np.array(matplotlib.colors.to_rgb('#62a6ea'))*(1-t)+np.array(matplotlib.colors.to_rgb('#d4eaff'))*t)*shade
            faces.append((np.mean(pts@R.T,axis=0)[2],np.array(c)+pts@P.T*s,col))
    for z,xy,col in sorted(faces,key=lambda x:x[0]):
        ax.add_patch(Polygon(xy,facecolor=col,edgecolor='#214d80',linewidth=.35))

def wire(ax,c,s):
    for v in np.linspace(0,2*np.pi,7,endpoint=False):
        pts=np.array([point(u,v) for u in np.linspace(0,2*np.pi,200)])@P.T*s+np.array(c)
        ax.plot(pts[:,0],pts[:,1],color='#8ec5ff',alpha=.58,lw=.6)
    for u in np.linspace(0,2*np.pi,16,endpoint=False):
        pts=np.array([point(u,v) for v in np.linspace(0,2*np.pi,60)])@P.T*s+np.array(c)
        ax.plot(pts[:,0],pts[:,1],color='#8ec5ff',alpha=.38,lw=.5)

class Poster:
    def __init__(self,slug,bg,ink,muted,accent,dark=False):
        self.slug=slug; self.bg=bg; self.ink=ink; self.muted=muted; self.accent=accent; self.dark=dark; self.boxes=[]
        self.fig=plt.figure(figsize=(10.8,13.5),dpi=100,facecolor=bg)
        self.ax=self.fig.add_axes([0,0,1,1]); self.ax.set_xlim(0,1080); self.ax.set_ylim(1350,0); self.ax.axis('off')
    def text(self,x,y,s,size=24,bold=False,mono=False,color=None,**kw):
        t=self.ax.text(x,y,s,va='top',fontsize=size*.72,color=color or self.ink,fontproperties=FontProperties(fname=MONO if mono else BOLD if bold else FONT),**kw); self.boxes.append(t); return t
    def rule(self,y): self.ax.plot([68,1012],[y,y],color=self.muted,alpha=.34,lw=.7)
    def header(self):
        if self.dark: self.ax.add_patch(Rectangle((0,0),1080,134,facecolor='#ffffff',zorder=-1))
        self.ax.imshow(Image.open(ROOT/'public/layout/iitgn-logo.webp'),extent=(68,346,109,39),interpolation='lanczos')
        self.text(1012,52,'COMPUTER SCIENCE\n& ENGINEERING',18,bold=True,ha='right',color='#15345f',linespacing=1.4)
        if not self.dark:self.rule(134)
    def footer(self):
        self.rule(1276)
        self.text(68,1300,'cse.iitgn.ac.in',17,mono=True)
        self.text(1012,1300,self.post['displayDate'].upper(),16,mono=True,color=self.muted,ha='right')
    def photo(self,path,x,y,w,h,focus=.5,crop=None):
        # A viewport crops the displayed source; original photo files remain intact.
        # A narrow pale-blue mat makes light and busy backgrounds feel consistent.
        self.ax.add_patch(Rectangle((x-6,y-6),w+12,h+12,
                                    facecolor='#dbeafb',edgecolor='#8ec5ff',lw=.8))
        im=Image.open(path)
        photoax=self.fig.add_axes([x/1080,1-(y+h)/1350,w/1080,h/1350])
        photoax.imshow(im,interpolation='lanczos'); photoax.axis('off')
        iw,ih=im.size; ratio=w/h
        if crop:
            left,top,right,bottom=crop
            assert abs((right-left)/(bottom-top)-ratio)<.01
            photoax.set_xlim(left,right);photoax.set_ylim(bottom,top)
        elif iw/ih>ratio:
            cw=ih*ratio; left=(iw-cw)*focus; photoax.set_xlim(left,left+cw);photoax.set_ylim(ih,0)
        else:
            ch=iw/ratio; top=max(0,(ih-ch)*.10);photoax.set_ylim(top+ch,top);photoax.set_xlim(0,iw)
    def people(self,y=820,h=226):
        members=self.post['people']; n=len(members); gap=49; w=(944-gap*(n-1))/n
        for i,person in enumerate(members):
            x=68+i*(w+gap)
            self.photo(SOURCE/person['image'],x,y,w,h)
            self.text(x,y+h+22,person['role'].upper(),14,mono=True,color=self.accent)
            self.text(x,y+h+51,person.get('posterName',person['name']),29 if n==3 and i<2 else 24 if n==3 else 35,bold=True,linespacing=1.2)
            if person.get('advisers'):
                self.text(x,y+h+113,'Adviser' if ' and ' not in person['advisers'] else 'Advisers',19,color=self.muted)
                self.text(x,y+h+148,person['adviserLines'],24,linespacing=1.35)
    def save(self):
        OUT.mkdir(parents=True,exist_ok=True)
        self.fig.canvas.draw(); renderer=self.fig.canvas.get_renderer()
        for t in self.boxes:
            bb=t.get_window_extent(renderer)
            assert bb.x0>=0 and bb.x1<=1081 and bb.y0>=0 and bb.y1<=1351,(self.slug,t.get_text(),str(bb))
        for ext,dpi in [('png',200),('pdf',100)]: self.fig.savefig(OUT/f'{self.slug}.{ext}',dpi=dpi,facecolor=self.bg)
        import io
        preview=io.BytesIO()
        self.fig.savefig(preview,format='png',dpi=100,facecolor=self.bg)
        preview.seek(0)
        Image.open(preview).save(OUT/f'{self.slug}-preview.webp',quality=85)
        plt.close(self.fig)


def render(post,template):
    p=Poster(f"{post['slug']}/{template}", '#102d50', '#ffffff', '#b9cde5', '#8ec5ff', True)
    p.post=post
    (OUT/post['slug']).mkdir(parents=True,exist_ok=True)
    p.header();p.text(68,174,post['award'],28)
    p.text(65,218,post['headline'],post.get('headlineSize',63 if len(post['headline'])>16 else 70 if len(post['headline'])>12 else 77),bold=True)
    if post.get('layout')=='fellows-roster':
        p.text(68,325,post['badge'],23,mono=True,color=p.accent)
        learning_network(p);p.rule(756)
        for i,person in enumerate(post['people']):
            y=795+i*145
            p.text(68,y,person['name'],39,bold=True)
            p.text(68,y+56,'Adviser: '+person['advisers'],25,color=p.muted)
        p.text(68,1222,'Congratulations to our research scholars.',23,color=p.muted)
    elif post.get('layout')=='team':
        p.text(68,325,post['badge'],23,mono=True,color=p.accent)
        TEAM_ILLUSTRATIONS[post['illustration']](p)
        p.rule(855)
        p.text(68,883,post['detailLines'],post.get('detailSize',31),bold=True,linespacing=1.3)
        p.text(68,1007,post.get('peopleLabel','TEAM IIT GANDHINAGAR'),16,mono=True,color=p.accent)
        p.text(68,1051,post['peopleLines'],34,bold=True,linespacing=1.4)
        p.text(68,1222,post.get('closing','Congratulations to the team.'),23,color=p.muted)
    elif len(post['people'])==1:
        person=post['people'][0]
        p.text(68,325,post['badge'],21,mono=True,color=p.accent)
        p.photo(SOURCE/person['image'],68,419,390,390,person.get('photoFocus',.5),person.get('photoCrop'))
        illustrations={'browser-permissions':browser_permissions,'sparse-projection':sparse_projection,'multilingual-model':multilingual_model,'finite-group':finite_group}
        illustrations[post['illustration']](p)
        p.text(68,848,person['role'].upper(),15,mono=True,color=p.accent)
        p.text(68,883,person.get('posterName',person['name']),43,bold=True,linespacing=1.12)
        p.rule(1008)
        p.text(68,1042,post['detailLabel'],16,mono=True,color=p.accent)
        p.text(68,1082,post['detailLines'],post.get('detailSize',32),bold=True,linespacing=post.get('detailLineSpacing',1.2))
        if post.get('creditLines'): p.text(68,1130,post['creditLines'],25,color=p.muted)
        p.text(68,1202,post['closing'],23,color=p.muted)
    elif len(post['people'])==2:
        p.text(68,323,post['badge'],24,mono=True,color=p.accent)
        if template!='simple':
            assert post['illustration']=='sensing-and-formulas'
            fellowship_research(p)
            p.people(y=505,h=400)
            p.rule(1144)
            p.text(68,1176,'Congratulations to our research scholars.',30,bold=True)
            p.text(68,1222,f"Fellowships effective {post['effectiveDate']}.",24,color=p.muted)
        else:
            p.people(y=413,h=400)
            p.rule(1042)
            p.text(68,1090,'Congratulations to our research scholars.',30,bold=True)
            p.text(68,1148,f"Fellowships effective {post['effectiveDate']}.",24,color=p.muted)
    elif template=='simple':
        p.text(68,325,'Congratulations to our winning team',29,color=p.accent)
        p.people(y=411,h=260);p.rule(840)
        p.text(68,882,'AWARDED PROPOSAL',15,mono=True,color=p.accent)
        p.text(68,924,post['proposalLines'],33,bold=True,linespacing=1.3)
        if post.get('illustration')=='torus':
            p.text(68,1062,'TORUS / LINE STUDY',15,mono=True,color=p.accent)
            p.text(68,1100,'The ring-shaped form is a torus.\nIts wireframe shows the surface geometry.',21,color=p.muted,linespacing=1.4)
            p.text(68,1175,'Conceptual illustration',15,mono=True,color=p.muted)
            wire(p.ax,(849,1133),77)
    else:
        p.text(1012,246,post['badge'],24,mono=True,color=p.accent,ha='right');p.rule(327)
        assert post.get('illustration')=='torus', 'Select an illustration explicitly; do not imply research results.'
        if template=='gaussian':
            p.text(68,393,'A torus, in splats',27,bold=True)
            p.text(68,444,'A doughnut-shaped surface\nbuilt from overlapping\nGaussian ellipses.',22,color=p.muted,linespacing=1.4)
            gaussian(p.ax,(757,497),145)
        else:
            p.text(68,391,'Shape, in facets',27,bold=True)
            p.text(68,441,'A low-poly torus made\nfrom triangular faces.\nA geometric interpretation\nof the same ring-shaped form.',21,color=p.muted,linespacing=1.4)
            poly(p.ax,(758,496),147)
        p.text(68,579,'Conceptual illustration',15,mono=True,color=p.muted);p.rule(671)
        p.text(68,700,post['proposalLines'],33,bold=True,linespacing=1.25)
        p.people();p.text(68,1197,'Congratulations to the winning team and their adviser.',22,color=p.muted)
    p.footer();p.save()


def make_gallery(posts):
    """A local contact sheet with relative file links; never part of the site build."""
    from html import escape
    sections=[]
    for post in posts:
        preferred=post['preferredTemplate']
        variants=sorted(post['templates'],key=lambda t:t!=preferred)
        cards=[]
        for template in variants:
            base=f"exports/{post['slug']}/{template}"
            label={'gaussian':'Gaussian','low-poly':'Low-poly','simple':'Simple'}[template]
            cards.append(f'<figure><a href="{base}.png"><img src="{base}-preview.webp" alt="{escape(post["title"])} — {label}"></a><figcaption>{label}{" · preferred" if template==preferred else ""} · <a href="{base}.png">PNG</a> · <a href="{base}.pdf">PDF</a></figcaption></figure>')
        sections.append(f'<section><h2>{escape(post["title"])}</h2><div class="designs">{"".join(cards)}</div><p>{escape(post["caption"])}</p><a href="exports/{post["slug"]}/caption.txt">Caption text</a><details><summary>Illustration note</summary><p>{escape(post.get("illustrationDescription",""))}</p></details></section>')
    (SOURCE/'index.html').write_text('''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CSE poster collection</title><style>body{font:16px/1.6 system-ui,sans-serif;background:#f3f7fc;color:#15345f;margin:0;padding:40px}main{max-width:1200px;margin:auto}h1{font-size:40px;line-height:1.1}h2{font-size:24px;line-height:1.3}section{border-top:1px solid #c2d5ec;margin-top:48px;padding-top:24px}.designs{display:flex;flex-wrap:wrap;gap:24px}figure{margin:0;width:calc((100% - 48px)/3);min-width:260px}img{width:100%;display:block}figcaption{padding-top:8px}a{color:#175fae}p{max-width:80ch}details{font-size:14px;margin-top:12px}@media(max-width:700px){body{padding:20px}figure{width:100%}}</style><main><h1>CSE poster collection</h1><p>Internal working files. Dark blue and white throughout; illustrations chosen for each research topic. Open a poster to view the full PNG, or download its PDF.</p>'''+''.join(sections)+'</main></html>')

if __name__=='__main__':
    import argparse
    parser=argparse.ArgumentParser();parser.add_argument('--post');args=parser.parse_args()
    posts=json.loads((SOURCE/'posts.json').read_text())
    if args.post:
        posts=[p for p in posts if p['slug']==args.post]
        if not posts:parser.error('Unknown post slug')
    for post in posts:
        for template in post['templates']:
            render(post,template)
            print(f"Rendered {post['slug']}/{template}")
        (OUT/post['slug']/'caption.txt').write_text(post['caption']+'\n')
    make_gallery(json.loads((SOURCE/'posts.json').read_text()))
