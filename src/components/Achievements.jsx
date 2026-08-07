import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import { STATS } from '../data/site';

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-sage/40 py-20 sm:py-24 lg:py-28">
      <div className="container">
        <Reveal>
          <h2 className="max-w-[18ch] text-display-md text-balance text-forest">
            Thousands of Journeys. One Shared Destination.
          </h2>
        </Reveal>

        <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className="flex flex-col-reverse border-t border-forest/20 pt-6"
            >
              <dt className="mt-4 text-[13px] font-medium uppercase tracking-[0.16em] text-charcoal/60">
                {stat.label}
              </dt>
              <dd>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  unit={stat.unit}
                  className="block font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-none text-forest"
                />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
