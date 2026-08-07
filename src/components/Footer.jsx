import { MapPin, Phone } from 'lucide-react';
import Wordmark from './ui/Wordmark';
import InstagramIcon from './ui/InstagramIcon';
import {
  FOOTER_LINKS,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  GOOGLE_BUSINESS_URL,
  PHONE_HREF,
  PHONE_DISPLAY,
} from '../data/site';

/**
 * `linkPrefix` is '' on the home page and '/' on the standalone legal pages, so
 * section anchors resolve back to the home page. Links flagged `external` are
 * real routes and are never prefixed.
 */
function LinkColumn({ title, links, linkPrefix = '' }) {
  return (
    <div>
      <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-sage/50">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.external ? link.href : `${linkPrefix}${link.href}`}
              className="text-[14.5px] text-sage/85 transition-colors hover:text-ivory"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ linkPrefix = '', stickyBarSpace = true }) {
  return (
    <footer className="grain bg-forest-800 pt-20 text-sage">
      <div className="container">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Wordmark tone="light" />
            <p className="mt-6 max-w-[36ch] text-[15px] leading-relaxed text-sage/70">
              Specialist guidance for Indian students planning to pursue higher education in Italy.
            </p>
            <p className="mt-6 text-[13.5px] leading-relaxed text-sage/55">
              Rajouri Garden, New Delhi 110027
            </p>
          </div>

          <LinkColumn title="Quick Links" links={FOOTER_LINKS.quick} linkPrefix={linkPrefix} />
          <LinkColumn title="Services" links={FOOTER_LINKS.services} linkPrefix={linkPrefix} />

          <div className="space-y-10">
            <div>
              <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-sage/50">
                Connect
              </h3>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[14.5px] text-sage/85 transition-colors hover:text-ivory"
                  >
                    <InstagramIcon size={15} />
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li>
                  <a
                    href={GOOGLE_BUSINESS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[14.5px] text-sage/85 transition-colors hover:text-ivory"
                  >
                    <MapPin size={15} aria-hidden="true" />
                    Google Business Profile
                  </a>
                </li>
                <li>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2.5 text-[14.5px] text-sage/85 transition-colors hover:text-ivory"
                  >
                    <Phone size={15} aria-hidden="true" />
                    {PHONE_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>

            <LinkColumn title="Legal" links={FOOTER_LINKS.legal} linkPrefix={linkPrefix} />
          </div>
        </div>

        {/* Extra bottom padding clears the mobile sticky conversion bar, which
            only exists on the home page. */}
        <div
          className={`border-t border-ivory/10 pt-8 lg:pb-8 ${
            stickyBarSpace ? 'pb-28' : 'pb-8'
          }`}
        >
          <p className="max-w-[80ch] text-[12px] leading-relaxed text-sage/45">
            Italy Education Consultants provides guidance and support services. Admission decisions,
            scholarship awards and visa outcomes are determined solely by the relevant universities,
            authorities and consular offices, and requirements can change. No outcome is guaranteed.
          </p>
          <p className="mt-6 text-[12.5px] text-sage/50">
            © 2026 Italy Education Consultants. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
