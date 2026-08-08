import { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Section, { Eyebrow } from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import InstagramIcon from '../components/ui/InstagramIcon';
import {
  PHONE_NUMBERS,
  PHONE_DISPLAY,
  PHONE_HREF,
  ADDRESS_LINES,
  HOURS,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from '../data/site';

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (!/^[+\d][\d\s-]{7,17}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (values.message.trim().length < 10)
    errors.message = 'Please tell us a little more (at least 10 characters).';
  return errors;
}

/**
 * TODO (BEFORE LAUNCH): point this at the real destination — a form backend,
 * CRM endpoint or transactional email service, e.g.
 *   const res = await fetch('/api/contact', { method: 'POST', body: … });
 *   if (!res.ok) throw new Error('Request failed');
 *
 * Until that exists there is nowhere for the message to go, so this rejects
 * rather than pretending the enquiry was delivered. The error state below then
 * shows the visitor how to reach us directly, so no enquiry is lost.
 */
async function submitEnquiry() {
  throw new Error('No form endpoint configured');
}

function Field({ id, label, error, required = true, children, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-terracotta">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] text-terracotta-700">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    setStatus('sending');
    try {
      await submitEnquiry(values);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputProps = (key) => ({
    id: key,
    name: key,
    value: values[key],
    onChange: update(key),
    className: `field-input ${errors[key] ? 'border-terracotta focus:border-terracotta' : ''}`,
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  });

  if (status === 'sent') {
    return (
      <div role="status" className="py-10 text-center">
        <CheckCircle2 size={44} aria-hidden="true" className="mx-auto text-forest" />
        <h3 className="mt-6 text-display-md text-forest">Thank you for getting in touch.</h3>
        <p className="mx-auto mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-charcoal/70">
          Your message has been received. A counsellor will get back to you during business hours.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={PHONE_HREF} className="btn-primary">
            <Phone size={17} aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY);
              setStatus('idle');
            }}
            className="btn-secondary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <p className="mb-6 text-[13px] text-charcoal/50">
        Fields marked <span className="text-terracotta">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            {...inputProps('name')}
          />
        </Field>

        <Field id="email" label="Email Address" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            required
            {...inputProps('email')}
          />
        </Field>

        <Field id="phone" label="Phone Number" error={errors.phone}>
          <input
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 00000 00000"
            required
            {...inputProps('phone')}
          />
        </Field>

        <Field id="subject" label="Subject" error={errors.subject}>
          <input
            type="text"
            placeholder="What is your enquiry about?"
            required
            {...inputProps('subject')}
          />
        </Field>

        <Field id="message" label="Message" error={errors.message} className="sm:col-span-2">
          <textarea
            rows={6}
            placeholder="Tell us about your academic background, preferred programme and what you'd like help with."
            required
            {...inputProps('message')}
            className={`${inputProps('message').className} resize-y min-h-[150px]`}
          />
        </Field>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="mt-6 flex gap-3 rounded-xl border border-terracotta/30 bg-terracotta-50 p-5 text-[14.5px] leading-relaxed text-terracotta-700"
        >
          <AlertCircle size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
          <span>
            <strong className="font-semibold">We couldn’t send your message just now.</strong> Please
            try again in a moment, or call us directly on{' '}
            <a href={PHONE_HREF} className="font-semibold underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>{' '}
            — we’ll be glad to help.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary group mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
        <Send
          size={16}
          aria-hidden="true"
          className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5"
        />
      </button>

      <p className="mt-5 flex items-start gap-2 text-[12.5px] leading-relaxed text-charcoal/50">
        <ShieldCheck size={14} aria-hidden="true" className="mt-0.5 shrink-0" />
        Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-forest/10 bg-white p-7 transition-all duration-400 ease-premium hover:-translate-y-1 hover:border-forest/20 hover:shadow-soft">
      <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-forest/[0.07] text-forest">
        <Icon size={19} aria-hidden="true" />
      </span>
      <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-charcoal/45">
        {title}
      </h3>
      <div className="mt-3 text-[15.5px] leading-relaxed text-charcoal/80">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to main content
      </a>

      <Navbar linkPrefix="/" />

      <main id="main">
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden bg-ivory pt-[calc(var(--nav-h)+3.5rem)]">
          {/* Same quiet arcade motif used on the home page hero */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-4 hidden h-[380px] w-[620px] opacity-[0.045] lg:block"
          >
            <svg viewBox="0 0 620 380" fill="none" className="h-full w-full">
              {[0, 1, 2, 3].map((i) => (
                <path
                  key={i}
                  d={`M${30 + i * 150} 360 L${30 + i * 150} 150 A60 60 0 0 1 ${150 + i * 150} 150 L${
                    150 + i * 150
                  } 360`}
                  stroke="#12372A"
                  strokeWidth="2"
                />
              ))}
              <line x1="0" y1="360" x2="620" y2="360" stroke="#12372A" strokeWidth="2" />
            </svg>
          </div>

          <div className="container relative pb-16 lg:pb-20">
            <a
              href="/"
              className="text-[11px] font-bold uppercase tracking-[0.24em] text-terracotta hover:text-terracotta-700"
            >
              ← Back to home
            </a>

            <h1 className="mt-6 max-w-[14ch] text-display-xl text-balance text-forest">
              Contact Us
            </h1>

            <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-charcoal/75 text-pretty">
              Whether you are just beginning to consider Italy or already comparing universities,
              we are glad to help. Send us a message or call our office directly — a counsellor
              will walk you through your options.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className="btn-primary group">
                Send Us a Message
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
                />
              </a>
              <a href={PHONE_HREF} className="btn-secondary">
                <Phone size={17} aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Contact information ---------------- */}
        <Section tone="white">
          <Reveal>
            <Eyebrow>How to Reach Us</Eyebrow>
            <h2 className="max-w-[20ch] text-display-md text-balance text-forest">
              Speak to an Italy Specialist.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0} className="h-full">
              <InfoCard icon={Phone} title="Phone">
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
              </InfoCard>
            </Reveal>

            <Reveal delay={90} className="h-full">
              <InfoCard icon={MapPin} title="Office">
                <address className="not-italic">
                  {ADDRESS_LINES.slice(1).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </InfoCard>
            </Reveal>

            <Reveal delay={180} className="h-full">
              <InfoCard icon={Clock} title="Business Hours">
                {HOURS.days}
                <br />
                {HOURS.time}
              </InfoCard>
            </Reveal>

            <Reveal delay={270} className="h-full">
              <InfoCard icon={InstagramIcon} title="Instagram">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-forest"
                >
                  {INSTAGRAM_HANDLE}
                </a>
                <span className="mt-1 block text-[13.5px] text-charcoal/55">
                  Student stories and updates from Italy.
                </span>
              </InfoCard>
            </Reveal>
          </div>
        </Section>

        {/* ---------------- Contact form ---------------- */}
        <Section id="contact-form" tone="ivory">
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <Eyebrow className="justify-center">Send a Message</Eyebrow>
              <h2 className="mx-auto max-w-[22ch] text-display-md text-balance text-forest">
                Tell Us What You’d Like Help With.
              </h2>
              <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-relaxed text-charcoal/70">
                Share a few details and we will come back to you with clear, specific guidance for
                your profile.
              </p>
            </Reveal>

            <Reveal
              delay={90}
              className="mt-10 rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft sm:p-10"
            >
              <ContactForm />
            </Reveal>
          </div>
        </Section>

        {/* ---------------- Location ---------------- */}
        <Section tone="white">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <Eyebrow>Visit Us</Eyebrow>
              <h2 className="max-w-[18ch] text-display-md text-balance text-forest">
                Our Office in Rajouri Garden.
              </h2>
              <address className="mt-6 not-italic text-[16px] leading-relaxed text-charcoal/75">
                {ADDRESS_LINES.map((line, i) => (
                  <span key={line} className={i === 0 ? 'block font-semibold text-forest' : 'block'}>
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-7"
              >
                <Navigation size={16} aria-hidden="true" />
                Get Directions
              </a>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden rounded-[2rem] border border-forest/10 bg-sage/40 shadow-soft">
                <iframe
                  title="Map showing Italy Education Consultants, Rajouri Garden, New Delhi"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full border-0 lg:h-[420px]"
                />
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ---------------- Final CTA ---------------- */}
        <section className="grain bg-forest py-20 sm:py-24">
          <div className="container text-center">
            <Reveal>
              <h2 className="mx-auto max-w-[20ch] text-display-md text-balance text-ivory">
                Have a Question About Studying in Italy?
              </h2>
              <p className="mx-auto mt-5 max-w-[46ch] text-[16.5px] leading-relaxed text-sage/85">
                Let’s talk. Send us a message or call the office and we’ll take it from there.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="#contact-form" className="btn-light group">
                  Get in Touch
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
                  />
                </a>
                <a href={PHONE_HREF} className="btn-outline-light">
                  <Phone size={17} aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer linkPrefix="/" stickyBarSpace={false} />
    </>
  );
}
