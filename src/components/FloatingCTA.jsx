import { useEffect, useState } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { PHONE_HREF, PHONE_DISPLAY, COUNSELLING_ANCHOR } from '../data/site';

/**
 * Desktop: floating call button + back-to-top.
 * Mobile:  sticky bottom conversion bar (Call Us | Free Assessment).
 * Both appear only after the visitor has scrolled past the hero.
 */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop */}
      <div
        className={`fixed bottom-7 right-7 z-40 hidden flex-col items-end gap-3 transition-all duration-500 ease-premium lg:flex ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <a
          href="#top"
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full border border-forest/15 bg-ivory/90 text-forest shadow-soft backdrop-blur transition-colors hover:bg-white"
        >
          <ArrowUp size={17} aria-hidden="true" />
        </a>
        <a
          href={PHONE_HREF}
          aria-label={`Call us on ${PHONE_DISPLAY}`}
          className="group flex h-14 items-center gap-3 rounded-full bg-forest pl-4 pr-5 text-ivory shadow-lift transition-all duration-300 ease-premium hover:bg-forest-600"
        >
          <Phone size={21} aria-hidden="true" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-semibold opacity-0 transition-all duration-400 ease-premium group-hover:max-w-[220px] group-hover:opacity-100">
            Call {PHONE_DISPLAY}
          </span>
        </a>
      </div>

      {/* Mobile sticky conversion bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-ivory/95 backdrop-blur-lg transition-transform duration-500 ease-premium lg:hidden ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="grid grid-cols-2 gap-2.5 px-4 py-3">
          <a
            href={PHONE_HREF}
            aria-label={`Call us on ${PHONE_DISPLAY}`}
            className="btn-secondary w-full px-3 text-[13.5px]"
          >
            <Phone size={16} aria-hidden="true" />
            Call Us
          </a>
          <a href={COUNSELLING_ANCHOR} className="btn-primary w-full px-3 text-[13.5px]">
            Free Assessment
          </a>
        </div>
      </div>
    </>
  );
}
