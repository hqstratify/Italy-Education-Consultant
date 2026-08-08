import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Wordmark from './ui/Wordmark';
import { NAV_LINKS, PHONE_HREF, PHONE_DISPLAY } from '../data/site';

/**
 * `linkPrefix` is '' on the home page and '/' on the standalone pages, so
 * section anchors resolve back to the home page from anywhere. Links flagged
 * `external` are real routes and are never prefixed.
 */
const resolve = (link, linkPrefix) =>
  link.external ? link.href : `${linkPrefix}${link.href}`;

export default function Navbar({ linkPrefix = '' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll and allow Escape to close the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        solid
          ? 'border-b border-forest/10 bg-ivory/85 backdrop-blur-xl supports-[backdrop-filter]:bg-ivory/70'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="container flex h-[76px] items-center justify-between gap-6"
      >
        <a
          href={`${linkPrefix}#top`}
          className="rounded-lg py-1"
          aria-label="Italy Education Consultants — back to top"
        >
          <Wordmark />
        </a>

        {/* gap tightens at lg so all seven items fit on one line; the original
            spacing returns from xl up, where there is room for it. */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={resolve(link, linkPrefix)}
                className="group relative rounded whitespace-nowrap py-2 text-[13.5px] font-medium text-charcoal/75 transition-colors hover:text-forest"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-terracotta transition-transform duration-300 ease-premium group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_HREF}
            aria-label={`Call us on ${PHONE_DISPLAY}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-ivory"
          >
            <Phone size={18} aria-hidden="true" />
          </a>
          <a href={`${linkPrefix}#counselling`} className="btn-primary px-5 py-3 text-[13px]">
            Get Free Counselling
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest lg:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-forest/10 bg-ivory lg:hidden"
      >
        <ul className="container flex flex-col py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={resolve(link, linkPrefix)}
                onClick={() => setOpen(false)}
                className="block border-b border-forest/5 py-4 font-display text-2xl text-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container flex flex-col gap-3 pb-8 pt-2">
          <a
            href={`${linkPrefix}#counselling`}
            onClick={() => setOpen(false)}
            className="btn-primary w-full"
          >
            Get Free Counselling
          </a>
          <a href={PHONE_HREF} className="btn-secondary w-full">
            <Phone size={17} aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </header>
  );
}
