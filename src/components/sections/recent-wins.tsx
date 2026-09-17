import { homepageAwardItems } from '@/data/news';
import awardMedia from '@/data/award-media.json';

export default function RecentWins() {
  const awards = [...homepageAwardItems].sort((a,b) => b.date.localeCompare(a.date));
  const featured = awards.filter(award => award.id in awardMedia).slice(0,2);
  const remaining = awards.filter(award => !featured.some(item => item.id === award.id));

  return (
    <section className="section-padding home-recognition" aria-labelledby="recognition-heading">
      <div className="container">
        <div className="recognition-heading">
          <div><p className="eyebrow">Our community</p><h2 id="recognition-heading">Awards &amp; fellowships</h2></div>
          <a className="text-link" href="/awards/">All awards &amp; fellowships <span aria-hidden="true">→</span></a>
        </div>
        <div className="recognition-featured">
          {featured.map(award => {
            const media = awardMedia[award.id as keyof typeof awardMedia];
            return <article className="recognition-story" key={award.id}>
              <a className="recognition-poster" href={`/awards/#${award.id}`} aria-label={`Read about ${award.title}`}>
                <img src={`${media.base}/preview.webp`} alt={media.alt} width="1080" height="1350" loading="lazy" decoding="async" />
              </a>
              <div><time dateTime={award.date}>{award.displayDate}</time><h3><a href={`/awards/#${award.id}`}>{award.title}</a></h3><p>{award.summary}</p><a className="recognition-details" href={`/awards/#${award.id}`}>Details &amp; poster <span aria-hidden="true">→</span></a></div>
            </article>;
          })}
        </div>
        <div className="recognition-more">
          {remaining.map(award => <a href={`/awards/#${award.id}`} key={award.id}><span>{award.title}</span><time dateTime={award.date}>{award.displayDate}</time><span aria-hidden="true">↗</span></a>)}
        </div>
      </div>
    </section>
  );
}
