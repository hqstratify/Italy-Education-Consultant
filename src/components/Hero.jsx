import { ArrowRight, GraduationCap, Coins, Stamp, Sparkles, Phone } from 'lucide-react';
import SmartImage from './ui/SmartImage';
import { IMAGES } from '../data/images';
import { PHONE_HREF } from '../data/site';

const TRUST_ROW = [
  { icon: Sparkles, label: 'Italy-Focused Expertise' },
  { icon: GraduationCap, label: 'End-to-End Guidance' },
  { icon: Coins, label: 'Scholarship Assistance' },
  { icon: Stamp, label: 'Visa Support' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-[calc(var(--nav-h)+2rem)]">
      {/* Quiet architectural cue: a faint arcade of Roman arches, not a landmark photo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 hidden h-[520px] w-[720px] opacity-[0.045] lg:block"
      >
        <svg viewBox="0 0 720 520" fill="none" className="h-full w-full">
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M${40 + i * 170} 500 L${40 + i * 170} 210 A70 70 0 0 1 ${180 + i * 170} 210 L${
                180 + i * 170
              } 500`}
              stroke="#12372A"
              strokeWidth="2"
            />
          ))}
          <line x1="0" y1="500" x2="720" y2="500" stroke="#12372A" strokeWidth="2" />
        </svg>
      </div>

      <div className="container relative grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
        {/* ---------------- Copy ---------------- */}
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-forest/15 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            Study in Italy from India
          </p>

          <h1 className="max-w-[15ch] text-display-xl text-balance text-forest">
            Study in Italy With Specialists Who Know the Process.
          </h1>

          <p className="mt-7 max-w-[54ch] text-[17px] leading-relaxed text-charcoal/75 text-pretty">
            From choosing the right university to applications, scholarships, visa guidance and
            pre-departure support, we help Indian students navigate their journey to Italy with
            clarity and confidence.
          </p>

          <p className="mt-5 max-w-[46ch] border-l-2 border-terracotta/50 pl-4 font-display text-[19px] italic leading-snug text-forest/85">
            Your profile is unique. Your study-abroad plan should be too.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#counselling" className="btn-primary group">
              Get a Free Profile Assessment
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
              />
            </a>
            <a href={PHONE_HREF} className="btn-secondary">
              <Phone size={17} aria-hidden="true" />
              Call an Italy Expert
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3.5 border-t border-forest/10 pt-7">
            {TRUST_ROW.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-[13.5px] font-medium text-charcoal/70"
              >
                <Icon size={16} aria-hidden="true" className="text-terracotta" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Image composition ---------------- */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-forest-800 shadow-lift sm:aspect-[5/6]">
            <SmartImage
              image={IMAGES.heroPrimary}
              priority
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent"
            />
          </div>

          {/* Secondary framed detail */}
          <div className="absolute -bottom-8 -left-6 hidden h-40 w-32 overflow-hidden rounded-2xl border-4 border-ivory bg-forest-800 shadow-soft sm:block lg:-left-10 lg:h-48 lg:w-40">
            <SmartImage image={IMAGES.heroSecondary} className="h-full w-full object-cover" />
          </div>

          {/* Floating social proof */}
          <div className="absolute -left-3 top-8 rounded-2xl border border-forest/10 bg-white/95 px-5 py-3.5 shadow-soft backdrop-blur sm:-left-8">
            <p className="font-display text-2xl leading-none text-forest">11K+</p>
            <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-charcoal/55">
              Student Success Stories
            </p>
          </div>

          <div className="absolute -right-2 bottom-16 rounded-2xl border border-forest/10 bg-white/95 px-5 py-3.5 shadow-soft backdrop-blur sm:-right-6">
            <p className="font-display text-2xl leading-none text-forest">10 Years</p>
            <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-charcoal/55">
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
