import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import { STATS } from '../data/site';

export default function TrustBar() {
  return (
    <section aria-label="Key figures" className="border-y border-forest/10 bg-white">
      <div className="container py-12 sm:py-14">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className="px-2 text-center lg:border-l lg:border-forest/10 lg:first:border-l-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  unit={stat.unit}
                  className="block font-display text-[clamp(2rem,4vw,2.9rem)] leading-none text-forest"
                />
                <span className="mt-3 block text-[12.5px] font-medium uppercase tracking-[0.14em] text-charcoal/55">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
