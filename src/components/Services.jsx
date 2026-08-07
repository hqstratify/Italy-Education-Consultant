import {
  ClipboardCheck,
  GraduationCap,
  FileText,
  Coins,
  Stamp,
  Compass,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import Section, { Eyebrow } from './ui/Section';
import Reveal from './ui/Reveal';
import SmartImage from './ui/SmartImage';
import { IMAGES } from '../data/images';
import { SERVICES } from '../data/site';

const ICONS = { ClipboardCheck, GraduationCap, FileText, Coins, Stamp, Compass };

export default function Services() {
  return (
    <Section id="services" tone="white">
      {/*
        Editorial header band: the image fills what used to be dead space beside
        the heading, and the supporting copy balances the column widths.
      */}
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-forest-800 shadow-soft">
            <SmartImage image={IMAGES.services} className="h-full w-full object-cover" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/5 to-transparent"
            />
            <p className="absolute bottom-6 left-6 right-6 font-display text-[19px] leading-snug text-ivory">
              Six services. One continuous journey.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90} className="order-1 lg:order-2">
          <Eyebrow>How We Help</Eyebrow>
          <h2 className="max-w-[20ch] text-display-md text-balance text-forest lg:max-w-none">
            Everything You Need to Move From “What If?” to “I’m Going to Italy.”
          </h2>
          <p className="mt-6 max-w-prose text-[16.5px] leading-relaxed text-charcoal/70 text-pretty">
            Studying in Italy is a sequence, not a single decision. Each service below picks up
            where the last one ends — so you always know which stage you are in, what is due next
            and what it depends on.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#counselling" className="btn-primary group">
              Get a Free Profile Assessment
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
              />
            </a>
            <a href="#process" className="btn-secondary">
              See the Six-Step Roadmap
            </a>
          </div>
        </Reveal>
      </div>

      {/* Service cards */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <Reveal
              key={service.number}
              delay={(i % 3) * 100}
              as="article"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-ivory/60 p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-forest/20 hover:bg-white hover:shadow-lift"
            >
              {/* Oversized number watermark — quiet visual texture on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-5 font-display text-[86px] leading-none text-forest/[0.045] transition-colors duration-500 group-hover:text-terracotta/[0.09]"
              >
                {service.number}
              </span>

              <div className="relative mb-7 flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest/[0.07] text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-ivory">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="font-display text-[15px] tracking-widest text-forest/30 transition-colors duration-500 group-hover:text-terracotta"
                >
                  {service.number}
                </span>
              </div>

              <h3 className="relative text-[21px] leading-snug text-forest">{service.title}</h3>
              <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-charcoal/65">
                {service.body}
              </p>

              <a
                href="#counselling"
                className="relative mt-7 inline-flex items-center gap-2 self-start rounded text-[13.5px] font-semibold text-terracotta transition-colors hover:text-terracotta-700"
              >
                {service.cta}
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                <span className="sr-only"> — {service.title}</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
