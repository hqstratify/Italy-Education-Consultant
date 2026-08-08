import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';
import Section, { SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from '../data/site';

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]');
    const amount = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <Section id="stories" tone="ivory">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Student Stories"
          title="Their Italy Journey Started With a Conversation Too."
        />

        <Reveal delay={100} className="flex shrink-0 gap-2.5">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous stories"
            className="grid h-12 w-12 place-items-center rounded-full border border-forest/20 text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-ivory"
          >
            <ChevronLeft size={19} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next stories"
            className="grid h-12 w-12 place-items-center rounded-full border border-forest/20 text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-ivory"
          >
            <ChevronRight size={19} aria-hidden="true" />
          </button>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-label="Student stories carousel"
        /* The bleed margin must match the container's own padding exactly, or
           the scroller pushes past the viewport and the page scrolls sideways. */
        className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:px-0"
      >
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            data-card
            className="flex w-[85vw] shrink-0 snap-start flex-col rounded-2xl border border-forest/10 bg-white p-8 transition-shadow duration-500 hover:shadow-soft sm:w-[380px] lg:w-[400px]"
          >
            <Quote size={26} aria-hidden="true" className="text-terracotta/35" />
            <blockquote className="mt-5 flex-1 text-[16px] leading-relaxed text-charcoal/75 text-pretty">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3.5 border-t border-forest/10 pt-6">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/[0.07] font-display text-[15px] tracking-wide text-forest"
              >
                {t.initials}
              </span>
              <span>
                <span className="block text-[14px] font-semibold text-forest">{t.name}</span>
                <span className="block text-[12.5px] text-charcoal/50">{t.meta}</span>
              </span>
              <span aria-hidden="true" className="ml-auto flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={12} className="fill-terracotta/70 text-terracotta/70" />
                ))}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Read Our Google Reviews
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}
