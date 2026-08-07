/**
 * Typographic wordmark — a serif monogram lockup rather than a flag or
 * landmark cliché. Scales cleanly and stays legible on both backgrounds.
 */
export default function Wordmark({ tone = 'dark', className = '' }) {
  const light = tone === 'light';
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border font-display text-[15px] leading-none ${
          light ? 'border-ivory/30 text-ivory' : 'border-forest/25 text-forest'
        }`}
      >
        IE
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] tracking-tight sm:text-[18px] ${
            light ? 'text-ivory' : 'text-forest'
          }`}
        >
          Italy Education
        </span>
        <span
          className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.3em] ${
            light ? 'text-sage/70' : 'text-charcoal/45'
          }`}
        >
          Consultants
        </span>
      </span>
    </span>
  );
}
