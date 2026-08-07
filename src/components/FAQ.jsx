import { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import Section, { SectionHeading } from './ui/Section';
import Reveal from './ui/Reveal';
import { FAQS, COUNSELLING_ANCHOR } from '../data/site';

function FaqItem({ faq, index, open, onToggle }) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-forest/10">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-forest"
        >
          <span className="font-sans text-[16px] font-semibold leading-snug text-forest sm:text-[17px]">
            {faq.q}
          </span>
          <span
            aria-hidden="true"
            className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-forest/15 text-forest transition-transform duration-400 ease-premium ${
              open ? 'rotate-45 bg-forest text-ivory' : ''
            }`}
          >
            <Plus size={16} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-premium ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-prose pb-6 pr-12 text-[15.5px] leading-relaxed text-charcoal/70 text-pretty">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  // Split into two columns on large screens while keeping a single semantic list.
  const half = Math.ceil(FAQS.length / 2);
  const columns = [FAQS.slice(0, half), FAQS.slice(half)];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <Section id="faq" tone="ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHeading
        eyebrow="Questions, Answered"
        title="Planning to Study in Italy? Start Here."
        intro={
          <p>
            Requirements for admission, scholarships and student visas are set by universities and
            authorities in Italy, and can change between academic years. Always confirm current
            requirements for your specific programme and intake.
          </p>
        }
      />

      <div className="mt-12 grid gap-x-16 lg:grid-cols-2">
        {columns.map((column, col) => (
          <div key={col}>
            {column.map((faq, i) => {
              const index = col * half + i;
              return (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  index={index}
                  open={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col items-center gap-5 rounded-2xl border border-forest/10 bg-white px-8 py-12 text-center">
        <h3 className="text-display-md text-forest">Still Have Questions?</h3>
        <p className="max-w-[46ch] text-[15.5px] leading-relaxed text-charcoal/65">
          Send us your question directly and an Italy-focused counsellor will get back to you.
        </p>
        <a href={COUNSELLING_ANCHOR} className="btn-primary group mt-2">
          Get Free Counselling
          <ArrowRight
            size={17}
            aria-hidden="true"
            className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
          />
        </a>
      </Reveal>
    </Section>
  );
}
