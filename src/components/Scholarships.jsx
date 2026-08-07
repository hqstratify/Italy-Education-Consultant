import { Landmark, School, BadgeCheck, Check, FileText, ArrowRight, Info } from 'lucide-react';
import Section, { SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import SmartImage from './ui/SmartImage';
import { IMAGES } from '../data/images';
import {
  SCHOLARSHIP_CARDS,
  ELIGIBILITY_FACTORS,
  SCHOLARSHIP_DOCUMENTS,
  COUNSELLING_ANCHOR,
} from '../data/site';

const ICONS = { Landmark, School, BadgeCheck };

export default function Scholarships() {
  return (
    <Section id="scholarships" tone="forest">
      <SectionHeading
        tone="light"
        eyebrow="Fund Your Future"
        title="Your Budget Shouldn’t Stop You From Exploring Italy."
        intro={
          <>
            <p>
              Eligible international students may have access to regional, university and other
              scholarship opportunities in Italy.
            </p>
            <p>
              We help you understand the opportunities relevant to your profile, their eligibility
              requirements, documentation and application process.
            </p>
          </>
        }
      />

      {/* Scholarship types */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {SCHOLARSHIP_CARDS.map((card, i) => {
          const Icon = ICONS[card.icon];
          return (
            <Reveal
              key={card.title}
              delay={i * 110}
              as="article"
              className="flex flex-col rounded-2xl border border-ivory/15 bg-ivory/[0.06] p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-ivory/30 hover:bg-ivory/[0.1]"
            >
              <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-ivory/10 text-sage">
                <Icon size={21} aria-hidden="true" />
              </span>
              <h3 className="text-[21px] uppercase tracking-wide text-ivory">{card.title}</h3>

              {card.intro && <p className="mt-4 text-[14.5px] text-sage/75">{card.intro}</p>}

              {card.items && (
                <ul className="mt-4 space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-sage/90">
                      <Check
                        size={15}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-terracotta-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {card.body && (
                <p className="mt-4 text-[15px] leading-relaxed text-sage/85">{card.body}</p>
              )}
            </Reveal>
          );
        })}
      </div>

      {/* Eligibility + documents, anchored by an image panel */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[0.8fr_1fr_1fr]">
        <Reveal className="relative min-h-[300px] overflow-hidden rounded-2xl bg-forest-900 lg:min-h-0">
          <SmartImage
            image={IMAGES.scholarships}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-forest via-forest/45 to-transparent"
          />
          <div className="relative flex h-full flex-col justify-end p-8">
            <p className="font-display text-[26px] leading-tight text-ivory">
              Funding is decided on documents, not luck.
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-sage/80">
              Most missed scholarships come down to a deadline or a missing paper — not merit.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="rounded-2xl border border-ivory/15 bg-ivory/[0.06] p-8">
          <h3 className="text-[19px] text-ivory">Eligibility may depend on:</h3>
          <ul className="mt-5 space-y-3">
            {ELIGIBILITY_FACTORS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-sage/90">
                <Check size={15} aria-hidden="true" className="mt-1 shrink-0 text-terracotta-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="rounded-2xl border border-ivory/15 bg-ivory/[0.06] p-8">
          <h3 className="text-[19px] text-ivory">Documents may include:</h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {SCHOLARSHIP_DOCUMENTS.map((doc) => (
              <li
                key={doc}
                className="inline-flex items-center gap-2 rounded-full border border-ivory/15 px-4 py-2 text-[13.5px] text-sage/90"
              >
                <FileText size={13} aria-hidden="true" className="text-sage/50" />
                {doc}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* CTA + disclaimer */}
      <Reveal className="mt-12 flex flex-col items-start gap-6 border-t border-ivory/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex max-w-[58ch] items-start gap-3 text-[13px] leading-relaxed text-sage/60">
          <Info size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
          Scholarships are awarded by the relevant institutions or authorities. Eligibility and
          funding cannot be guaranteed.
        </p>
        <a href={COUNSELLING_ANCHOR} className="btn-light group shrink-0">
          Check My Scholarship Eligibility
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
