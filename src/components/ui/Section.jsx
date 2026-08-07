import Reveal from './Reveal';

const TONES = {
  ivory: 'bg-ivory text-charcoal',
  white: 'bg-white text-charcoal',
  sage: 'bg-sage/45 text-charcoal',
  forest: 'bg-forest text-ivory grain',
};

/** Consistent vertical rhythm + background alternation across the page. */
export default function Section({
  id,
  tone = 'ivory',
  className = '',
  containerClassName = '',
  children,
  ...rest
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 lg:py-32 ${TONES[tone]} ${className}`}
      {...rest}
    >
      <div className={`container ${containerClassName}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = 'dark', className = '' }) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${
        tone === 'light' ? 'text-sage/80' : 'text-terracotta'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-8 ${tone === 'light' ? 'bg-sage/40' : 'bg-terracotta/40'}`}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'dark',
  align = 'left',
  className = '',
  children,
}) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : '';
  return (
    <Reveal className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`max-w-[22ch] text-display-md text-balance ${
          tone === 'light' ? 'text-ivory' : 'text-forest'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {intro && (
        <div
          className={`mt-6 max-w-prose space-y-4 text-[16.5px] leading-relaxed text-pretty ${
            tone === 'light' ? 'text-sage/85' : 'text-charcoal/70'
          }`}
        >
          {intro}
        </div>
      )}
      {children}
    </Reveal>
  );
}
