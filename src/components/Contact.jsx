import { MapPin, Clock, Phone, Navigation, CalendarCheck } from 'lucide-react';
import Section, { Eyebrow } from './ui/Section';
import Reveal from './ui/Reveal';
import {
  ADDRESS_LINES,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_NUMBERS,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
} from '../data/site';

function InfoBlock({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest/[0.07] text-forest">
        <Icon size={17} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-charcoal/45">
          {title}
        </h3>
        <div className="mt-2 text-[15.5px] leading-relaxed text-charcoal/80">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <Section id="contact" tone="ivory">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Get in Touch</Eyebrow>
          <h2 className="max-w-[16ch] text-display-md text-balance text-forest">
            Let’s Talk About Your Plans for Italy.
          </h2>

          <div className="mt-10 space-y-8">
            <InfoBlock icon={MapPin} title="Visit Us">
              <address className="not-italic">
                {ADDRESS_LINES.map((line, i) => (
                  <span key={line} className={i === 0 ? 'block font-semibold text-forest' : 'block'}>
                    {line}
                  </span>
                ))}
              </address>
            </InfoBlock>

            <InfoBlock icon={Clock} title="Business Hours">
              {HOURS.days}
              <br />
              {HOURS.time}
            </InfoBlock>

            <InfoBlock icon={Phone} title="Phone">
              <ul className="space-y-1">
                {PHONE_NUMBERS.map((phone) => (
                  <li key={phone.digits}>
                    <a
                      href={`tel:+${phone.digits}`}
                      className="inline-block whitespace-nowrap tabular-nums transition-colors hover:text-forest"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoBlock>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={PHONE_HREF}
              aria-label={`Call us on ${PHONE_DISPLAY}`}
              className="btn-primary"
            >
              <Phone size={17} aria-hidden="true" />
              Call Us
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Navigation size={16} aria-hidden="true" />
              Get Directions
            </a>
            <a href="#counselling" className="btn-secondary">
              <CalendarCheck size={16} aria-hidden="true" />
              Book Free Counselling
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-sage/40 shadow-soft">
            <iframe
              title="Map showing Italy Education Consultants, Rajouri Garden, New Delhi"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 lg:h-[560px]"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
