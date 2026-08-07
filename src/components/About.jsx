import { ArrowRight } from 'lucide-react';
import Section, { Eyebrow } from './ui/Section';
import Reveal from './ui/Reveal';
import SmartImage from './ui/SmartImage';
import { IMAGES } from '../data/images';
import { VALUE_CARDS } from '../data/site';

export default function About() {
  return (
    <Section id="about" tone="ivory">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <Reveal className="lg:pr-6">
          <Eyebrow>Why Italy Education Consultants</Eyebrow>
          <h2 className="max-w-[16ch] text-display-lg text-balance text-forest">
            Italy Isn’t One of Our Destinations. It’s Our Specialization.
          </h2>

          <div className="mt-8 max-w-prose space-y-5 text-[16.5px] leading-relaxed text-charcoal/75 text-pretty">
            <p>Studying in Italy involves more than finding a university.</p>
            <p>
              Eligibility, applications, documentation, scholarships, pre-enrolment and visas all
              have to fit together.
            </p>
            <p>
              Italy Education Consultants helps Indian students understand that complete journey and
              navigate it with a personalized strategy built around their academic profile, budget
              and career goals.
            </p>
          </div>

          <a href="#services" className="btn-secondary group mt-9">
            Discover Our Approach
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
            />
          </a>
        </Reveal>

        {/* Imagery */}
        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest-800 shadow-soft">
            <SmartImage
              image={IMAGES.about}
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent"
            />
          </div>

          {/* Route label — a restrained cue, not a flag or airplane trail */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-forest/10 bg-ivory/95 px-5 py-3 shadow-soft backdrop-blur">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-forest">
              India
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-terracotta" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-terracotta">
              Italy
            </span>
          </div>
        </Reveal>
      </div>

      {/* Value cards */}
      <div className="mt-16 grid gap-5 sm:grid-cols-3 lg:mt-20">
        {VALUE_CARDS.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 100}
            className="rounded-2xl border border-forest/10 bg-white p-7 transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-forest/25 hover:shadow-soft"
          >
            <h3 className="font-display text-2xl text-forest">{card.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal/65">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
