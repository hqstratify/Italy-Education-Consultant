import { ArrowRight, Phone } from 'lucide-react';
import Reveal from './ui/Reveal';
import SmartImage from './ui/SmartImage';
import { IMAGES } from '../data/images';
import { CONTACT_ANCHOR } from '../data/site';

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative isolate overflow-hidden bg-forest-800">
      <div className="absolute inset-0 -z-10 opacity-30">
        <SmartImage image={IMAGES.finalCta} className="h-full w-full object-cover" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest/80" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 grain" />

      <div className="container py-24 text-center lg:py-32">
        <Reveal>
          {/* Restrained route cue in place of flags or airplane trails */}
          <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-ivory/20 px-5 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-sage">
            India
            <span aria-hidden="true" className="h-px w-8 bg-terracotta-400" />
            Italy <span aria-hidden="true">🇮🇹</span>
          </p>

          <h2
            id="final-cta-heading"
            className="mx-auto max-w-[18ch] text-display-lg text-balance text-ivory"
          >
            Italy Could Be Your Next Chapter.
          </h2>

          <p className="mx-auto mt-7 max-w-[58ch] text-[17px] leading-relaxed text-sage/85 text-pretty">
            Before choosing a university, understand what’s possible for your profile. Start with
            personalized guidance from a team focused on Italy.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#counselling" className="btn-light group">
              Get My Free Profile Assessment
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
              />
            </a>
            <a href={CONTACT_ANCHOR} className="btn-outline-light">
              <Phone size={17} aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
