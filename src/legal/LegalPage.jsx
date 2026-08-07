import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS_LINES } from '../data/site';

export const LAST_UPDATED = '7 August 2026';

/** Section heading + body, used by all three legal documents. */
export function Clause({ heading, children }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-[24px] leading-snug text-forest sm:text-[27px]">{heading}</h2>
      <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-charcoal/75 text-pretty">
        {children}
      </div>
    </section>
  );
}

/** Bulleted list styled to match the rest of the site. */
export function Points({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[16px] leading-relaxed text-charcoal/75">
          <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-terracotta" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Contact block reused at the end of each document. */
export function ContactClause({ heading = 'Contact Us' }) {
  return (
    <Clause heading={heading}>
      <p>
        If you have any questions about this page, please get in touch with Italy Education
        Consultants:
      </p>
      <div className="mt-5 rounded-2xl border border-forest/10 bg-white p-6">
        <p className="font-semibold text-forest">Italy Education Consultants</p>
        <address className="mt-2 not-italic text-[15.5px] leading-relaxed text-charcoal/75">
          {ADDRESS_LINES.slice(1).map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="mt-4">
          <a href={PHONE_HREF} className="font-semibold text-terracotta hover:text-terracotta-700">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    </Clause>
  );
}

export default function LegalPage({ title, intro, children }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to main content
      </a>

      <Navbar linkPrefix="/" />

      <main id="main" className="bg-ivory pt-[calc(var(--nav-h)+3rem)]">
        <div className="container pb-20 lg:pb-28">
          <div className="mx-auto max-w-3xl">
            <a
              href="/"
              className="text-[11px] font-bold uppercase tracking-[0.24em] text-terracotta hover:text-terracotta-700"
            >
              ← Back to home
            </a>

            <h1 className="mt-6 text-display-lg text-balance text-forest">{title}</h1>

            <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.14em] text-charcoal/45">
              Last updated: {LAST_UPDATED}
            </p>

            {intro && (
              <div className="mt-8 space-y-4 border-l-2 border-terracotta/40 pl-5 text-[16.5px] leading-relaxed text-charcoal/75 text-pretty">
                {intro}
              </div>
            )}

            <div className="mt-14">{children}</div>
          </div>
        </div>
      </main>

      <Footer linkPrefix="/" stickyBarSpace={false} />
    </>
  );
}
