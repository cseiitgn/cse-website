"""Original research-linked schematics, not reproduced paper figures or results."""
import numpy as np
from matplotlib.patches import Rectangle, Circle, FancyArrowPatch, Polygon


def arrow(p, start, end, color=None, **kw):
    p.ax.add_patch(FancyArrowPatch(start,end,arrowstyle='-|>',mutation_scale=12,
                                 linewidth=1.4,color=color or p.accent,**kw))


def browser_permissions(p):
    """Two scripts with distinct allowed/blocked access to persistent storage."""
    x,y,w,h=533,451,479,300
    p.text(x,419,'BROWSER PRIVACY',16,mono=True,color=p.accent)
    p.ax.add_patch(Rectangle((x,y),w,h,facecolor='#e8efea',edgecolor=p.accent,lw=1.1))
    p.ax.plot([x,x+w],[y+34,y+34],color=p.accent,alpha=.4,lw=.8)
    for i in range(3): p.ax.add_patch(Circle((x+18+i*17,y+17),3.5,color=p.muted,alpha=.65))
    p.text(x+84,y+10,'Least-privilege access',18,color=p.ink)
    for yy,label in [(540,'Script A'),(654,'Script B')]:
        p.ax.add_patch(Rectangle((556,yy-10),104,45,facecolor='#f5f3ec',edgecolor=p.accent,lw=.9))
        p.text(608,yy,label,18,ha='center')
    for yy,label in [(536,'Cookies'),(650,'Local storage')]:
        for size,alpha in [(1.4,.035),(1.2,.07),(1,.10)]:
            p.ax.add_patch(Circle((899,yy+20),43*size,facecolor=p.accent,alpha=alpha,edgecolor='none'))
        p.ax.add_patch(Rectangle((806,yy-8),180,52,facecolor='#f5f3ec',edgecolor=p.accent,lw=1.1))
        p.text(896,yy+8,label,19,ha='center')
    arrow(p,(662,553),(803,553));p.text(735,574,'allow',15,mono=True,ha='center',color=p.accent)
    copper='#bd6844'
    p.ax.plot([662,764],[670,670],color=copper,lw=1.5)
    p.ax.plot([758,772],[662,678],color=copper,lw=1.6)
    p.ax.plot([758,772],[678,662],color=copper,lw=1.6)
    p.ax.plot([773,803],[670,670],color=p.muted,lw=1,linestyle=':',alpha=.5)
    p.text(735,690,'block',15,mono=True,ha='center',color=copper)
    p.text(533,780,'Permissions attached to stored data',17,color=p.muted)


def sparse_projection(p):
    """A schematic 4 x 10 sparse map: shape/operation illustration, not a JL guarantee."""
    p.text(533,422,'SPARSE DIMENSION REDUCTION',16,mono=True,color=p.accent)
    x,y,cell=540,540,27
    # Two nonzero entries per input coordinate, chosen only to illustrate sparsity.
    matrix=np.zeros((4,10))
    for col in range(10):
        matrix[col%4,col]=1
        matrix[(col+1+(col%2))%4,col]=-1
    for row in range(4):
      for col in range(10):
        xx,yy=x+col*cell,y+row*cell
        p.ax.add_patch(Rectangle((xx,yy),cell-3,cell-3,facecolor='#20434b',edgecolor='none'))
        if matrix[row,col]:
            color='#65c8c7' if matrix[row,col]>0 else '#ddad78'
            p.ax.add_patch(Polygon([(xx,yy),(xx+cell-3,yy),(xx+cell-3,yy+cell-3)],facecolor=color,edgecolor='none',alpha=.9))
            p.ax.add_patch(Polygon([(xx,yy),(xx,yy+cell-3),(xx+cell-3,yy+cell-3)],facecolor=color,edgecolor='none',alpha=.65))
    for i in range(10):
        p.ax.add_patch(Rectangle((850,477+i*24),23,20,facecolor='#65c8c7',alpha=.4+.06*(i%6),edgecolor='none'))
    arrow(p,(888,590),(951,590))
    for i in range(4):
        p.ax.add_patch(Rectangle((965,543+i*25),25,21,facecolor='#ddad78',alpha=.6+.1*i,edgecolor='none'))
    p.text(667,677,'A',26,mono=True,ha='center',color=p.accent)
    p.text(861,726,'x',26,mono=True,ha='center',color=p.accent)
    p.text(977,677,'y',26,mono=True,ha='center',color='#ddad78')
    p.text(533,766,'y = Ax  ·  fewer coordinates',20,mono=True,color=p.muted)
    p.text(533,801,'Schematic sparse map',14,color=p.muted)


def fellowship_research(p):
    """Two equal vignettes: thermal sensing and an arithmetic formula tree."""
    # Synthetic thermal patch and synthetic periodic signal. No patient measurements.
    xx,yy=np.meshgrid(np.linspace(-1,1,10),np.linspace(-1,1,5))
    z=np.exp(-(xx*xx/.4+yy*yy/.8))
    cool=np.array([.16,.57,.61]);warm=np.array([.92,.68,.40])
    for row in range(5):
      for col in range(10):
        color=cool*(1-z[row,col])+warm*z[row,col]
        p.ax.add_patch(Rectangle((68+col*9,375+row*12),8,11,facecolor=color,edgecolor='none'))
    t=np.linspace(0,1,180);v=np.sin(2*np.pi*3*t)*(.65+.18*np.cos(2*np.pi*t))
    p.ax.plot(185+t*320,406-v*27,color=p.accent,lw=1.8)
    p.ax.plot([185,505],[435,435],color=p.muted,lw=.6,alpha=.3)
    p.text(68,471,'THERMAL & HEALTH SENSING',15,mono=True,color=p.accent)
    # A bounded-depth monotone formula: (x1*x2) + (x3*x4).
    nodes=[(787,371,'+'),(687,410,'×'),(887,410,'×'),(627,446,'x1'),(747,446,'x2'),(827,446,'x3'),(947,446,'x4')]
    for parent,child in [(0,1),(0,2),(1,3),(1,4),(2,5),(2,6)]:
        a,b=nodes[parent],nodes[child]
        p.ax.plot([a[0],b[0]],[a[1],b[1]],color=p.accent,lw=1,alpha=.65)
    for x,y,label in nodes:
        if label in ['+','×']:
            p.ax.add_patch(Circle((x,y),12,facecolor=p.bg,edgecolor=p.accent,lw=1))
            p.text(x,y-11,label,21,ha='center',color=p.accent)
        else:
            p.ax.add_patch(Rectangle((x-15,y-10),30,22,facecolor=p.bg,edgecolor='none'))
            p.text(x,y-10,label,17,ha='center',color=p.muted)
    p.text(565,471,'ALGEBRAIC FORMULA COMPLEXITY',15,mono=True,color=p.accent)
