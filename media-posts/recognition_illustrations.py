"""Original explanatory diagrams for award posters; never measured results."""
import numpy as np
from matplotlib.patches import Circle, Rectangle, Polygon
from illustrations import arrow


def learning_network(p):
    layers=[[(x,y) for y in np.linspace(430,635,n)] for x,n in [(195,3),(425,5),(655,5),(885,3)]]
    for a,b in zip(layers,layers[1:]):
        for x,y in a:
            for xx,yy in b:p.ax.plot([x,xx],[y,yy],color=p.accent,lw=.7,alpha=.22)
    for layer in layers:
        for x,y in layer:
            p.ax.add_patch(Circle((x,y),15,facecolor='#245586',edgecolor=p.accent,lw=1.2,zorder=2.5))
            p.ax.add_patch(Circle((x,y),4,facecolor='#e4f1ff',edgecolor='none',zorder=2.6))
    p.text(68,706,'A schematic learning network',17,color=p.muted)


def network_diagnostics(p):
    nodes=[(165,440),(165,690),(350,565),(565,440),(565,690)]
    for i,j in [(0,2),(1,2),(2,3),(2,4)]:
        p.ax.plot([nodes[i][0],nodes[j][0]],[nodes[i][1],nodes[j][1]],color=p.accent,lw=2,alpha=.7)
    for i,(x,y) in enumerate(nodes):
        p.ax.add_patch(Circle((x,y),29,facecolor='#234970',edgecolor=p.accent,lw=1.5,zorder=2.5))
        p.text(x,y-12,str(i+1),23,mono=True,ha='center')
    arrow(p,(605,565),(706,565))
    p.ax.add_patch(Rectangle((728,413),270,304,facecolor='#183e67',edgecolor=p.accent,lw=1.2))
    p.text(752,435,'DIAGNOSTICS',19,mono=True,color=p.accent)
    for y,label in [(495,'Observe'),(566,'Check'),(637,'Explain')]:
        p.ax.add_patch(Circle((755,y+11),4,facecolor=p.accent))
        p.text(775,y,label,25)
    p.text(68,770,'Network observations inform a diagnostic workflow.',18,color=p.muted)


def algorithmic_routes(p):
    points=[(130,600),(295,445),(320,720),(510,560),(685,420),(705,730),(925,565)]
    edges=[(0,1),(0,2),(1,3),(1,4),(2,3),(2,5),(3,4),(3,5),(3,6),(4,6),(5,6)]
    route={(0,1),(1,3),(3,6)}
    for i,j in edges:
        xy=np.array([points[i],points[j]])
        p.ax.plot(xy[:,0],xy[:,1],color='#dbeeff' if (i,j) in route else '#4778a6',lw=3 if (i,j) in route else 1.2,alpha=1 if (i,j) in route else .55)
    for i,(x,y) in enumerate(points):
        p.ax.add_patch(Circle((x,y),18,facecolor='#78b9f6' if i in [0,1,3,6] else '#234970',edgecolor='#b9dcff',lw=1,zorder=2.5))
    p.text(68,784,'A route through a graph · conceptual illustration',17,color=p.muted)


def game_world(p):
    # Original isometric platform scene, not a screenshot of the winning game.
    def tile(i,j,height):
        x=535+(i-j)*69;y=450+(i+j)*36-height
        top=[(x,y),(x+69,y+36),(x,y+72),(x-69,y+36)]
        p.ax.add_patch(Polygon([(x-69,y+36),(x,y+72),(x,y+105),(x-69,y+69)],facecolor='#275486',edgecolor='#102d50',lw=1))
        p.ax.add_patch(Polygon([(x,y+72),(x+69,y+36),(x+69,y+69),(x,y+105)],facecolor='#477dad',edgecolor='#102d50',lw=1))
        p.ax.add_patch(Polygon(top,facecolor='#a8d0f5' if (i+j)%2 else '#79afe0',edgecolor='#102d50',lw=1))
        return x,y+36
    centers={}
    for total in range(7):
        for i in range(4):
            j=total-i
            if 0<=j<4:centers[i,j]=tile(i,j,35 if (i,j) in [(1,1),(2,1),(2,2)] else 0)
    x,y=centers[2,1]
    p.ax.plot([x,x],[y,y-90],color='#eaf5ff',lw=2)
    p.ax.add_patch(Polygon([(x,y-90),(x+47,y-70),(x,y-51)],facecolor='#f3f8ff',edgecolor='none'))
    p.text(68,784,'An imagined level, built from isometric tiles',17,color=p.muted)


def geospatial_layers(p):
    def pt(i,j,z):return (540+(i-j)*65,414+(i+j)*30-z)
    for layer in [2,1,0]:
        for total in range(9):
            for i in range(5):
                j=total-i
                if not 0<=j<5:continue
                z=-layer*57+26*np.sin(i*.65)*np.cos(j*.55)
                points=[pt(i,j,z),pt(i+1,j,z),pt(i+1,j+1,z),pt(i,j+1,z)]
                shade=(np.sin(i*1.4+j*.8)+1)/2
                c=np.array([.22,.43,.67])*(1-shade)+np.array([.70,.86,.98])*shade
                p.ax.add_patch(Polygon(points,facecolor=c,edgecolor='#102d50',lw=.6,alpha=1-.22*layer))
    p.text(68,819,'Stacked raster layers · conceptual geospatial data',17,color=p.muted)


def multilingual_model(p):
    p.text(533,422,'MULTILINGUAL NLP',16,mono=True,color=p.accent)
    for yy,label in [(504,'Language A'),(626,'Language B')]:
        p.ax.add_patch(Rectangle((537,yy),180,57,facecolor='#183e67',edgecolor=p.accent,lw=1))
        p.text(627,yy+17,label,21,ha='center')
        arrow(p,(720,yy+29),(823,584))
    p.ax.add_patch(Rectangle((829,540),178,88,facecolor='#245586',edgecolor=p.accent,lw=1.3))
    p.text(918,558,'Shared\nmodel',23,ha='center',linespacing=1.2)
    p.text(533,743,'Learning across languages',19,color=p.muted)
    p.text(533,785,'Conceptual illustration',14,color=p.muted)


def finite_group(p):
    p.text(533,422,'FINITE GROUPS',16,mono=True,color=p.accent)
    angles=np.linspace(-np.pi/2,3*np.pi/2,5,endpoint=False)
    points=np.array([(765+150*np.cos(t),615+150*np.sin(t)) for t in angles])
    for i in range(5):
        a=points[i];b=points[(i+1)%5];d=(b-a)/np.linalg.norm(b-a)
        arrow(p,a+23*d,b-23*d)
    for i,(x,y) in enumerate(points):
        p.ax.add_patch(Circle((x,y),22,facecolor='#245586',edgecolor=p.accent,lw=1.3))
        p.text(x,y-14,str(i),25,mono=True,ha='center')
    p.text(765,595,'+1 mod 5',23,mono=True,ha='center',color=p.accent)
    p.text(533,800,'A cyclic group with five elements',17,color=p.muted)


TEAM_ILLUSTRATIONS={'network-diagnostics':network_diagnostics,'algorithmic-routes':algorithmic_routes,'game-world':game_world,'geospatial-layers':geospatial_layers}
