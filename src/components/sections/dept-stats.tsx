'use client';

const STATS = [
  { value: '20+', label: 'Faculty Members' },
  { value: '100+', label: 'PhD & M.Tech Students' },
  { value: '6', label: 'Research Labs' },
  { value: '50+', label: 'Publications/Year' },
];

export default function DeptStats() {
  return (
    <section className="border-y py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-secondary text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
