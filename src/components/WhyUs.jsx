import {
  MapPin,
  UserRound,
  Route,
  Coins,
  ListChecks,
  Stamp,
  MessagesSquare,
  Heart,
  LifeBuoy,
} from 'lucide-react';
import Section, { SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import { WHY_US } from '../data/site';

const ICONS = {
  MapPin,
  UserRound,
  Route,
  Coins,
  ListChecks,
  Stamp,
  MessagesSquare,
  Heart,
  LifeBuoy,
};

export default function WhyUs() {
  return (
    <Section id="why-us" tone="white">
      <SectionHeading eyebrow="Why Students Choose Us" title="Specialist Guidance Makes a Difference." />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-forest/10 bg-forest/10 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
        {WHY_US.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <Reveal
              key={item.title}
              as="li"
              delay={(i % 3) * 90}
              className="group bg-white p-8 transition-colors duration-500 hover:bg-ivory"
            >
              <Icon
                size={22}
                aria-hidden="true"
                className="text-terracotta transition-transform duration-500 ease-premium group-hover:-translate-y-0.5"
              />
              <h3 className="mt-5 text-[19px] leading-snug text-forest">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal/65">{item.body}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
