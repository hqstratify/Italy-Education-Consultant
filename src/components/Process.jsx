import { ArrowRight } from 'lucide-react';
import Section, { SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import { useInView } from '../hooks/useInView';
import { STEPS } from '../data/site';

export default function Process() {
  // Drives the vertical connector drawing itself as the timeline enters view.
  const [trackRef, trackInView] = useInView({ threshold: 0.05, rootMargin: '0px 0px -20% 0px' });

  return (
    <Section id="process" tone="ivory">
      <SectionHeading eyebrow="Your Roadmap" title="Six Steps. One Destination." />

      <div ref={trackRef} className="relative mt-14 lg:mt-20">
        {/* Connector rail */}
        <div
          aria-hidden="true"
          className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-forest/10 sm:block lg:left-1/2"
        >
          <span
            className={`block w-full origin-top bg-forest/40 transition-transform duration-[1600ms] ease-premium motion-reduce:transition-none ${
              trackInView ? 'scale-y-100' : 'scale-y-0'
            }`}
            style={{ height: '100%' }}
          />
        </div>

        <ol className="space-y-8 lg:space-y-0">
          {STEPS.map((step, i) => {
            const alignRight = i % 2 === 1;
            return (
              <Reveal
                key={step.step}
                as="li"
                delay={60}
                className="relative sm:pl-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:pb-14 lg:pl-0"
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 hidden h-10 w-10 place-items-center rounded-full border border-forest/15 bg-ivory font-display text-[13px] text-forest sm:grid lg:left-1/2 lg:-translate-x-1/2"
                >
                  {step.step}
                </span>

                <div
                  className={`rounded-2xl border border-forest/10 bg-white p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-soft sm:p-8 ${
                    alignRight ? 'lg:col-start-2 lg:ml-8' : 'lg:col-start-1 lg:mr-8'
                  }`}
                >
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-terracotta">
                    Step {step.step}
                  </p>
                  <h3 className="text-[22px] leading-snug text-forest">{step.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal/65">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>

      <Reveal className="mt-12 flex justify-center lg:mt-4">
        <a href="#counselling" className="btn-primary group">
          Start With a Free Consultation
          <ArrowRight
            size={17}
            aria-hidden="true"
            className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
          />
        </a>
      </Reveal>
    </Section>
  );
}
