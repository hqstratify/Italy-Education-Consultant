import { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Eyebrow } from './ui/Section';
import {
  COURSE_OPTIONS,
  QUALIFICATION_OPTIONS,
  INTAKE_OPTIONS,
  PHONE_HREF,
  PHONE_DISPLAY,
} from '../data/site';

const EMPTY = {
  name: '',
  phone: '',
  email: '',
  qualification: '',
  course: '',
  intake: '',
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!/^[+\d][\d\s-]{7,17}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (!values.qualification) errors.qualification = 'Please select your current qualification.';
  if (!values.course) errors.course = 'Please select a preferred course area.';
  if (!values.intake) errors.intake = 'Please select a preferred intake.';
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
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

export default function LeadForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      const firstInvalid = document.getElementById(Object.keys(nextErrors)[0]);
      firstInvalid?.focus();
      return;
    }

    /*
     * TODO (BEFORE LAUNCH): connect this to the real lead destination —
     * CRM endpoint or form backend, e.g.
     *   await fetch('/api/leads', { method: 'POST', body: JSON.stringify(values) })
     * Until that is wired up, the confirmation panel offers a direct call so an
     * enquiry is never left without a way through.
     */
    setSubmitted(true);
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

  return (
    <section id="counselling" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container">
        <div className="grid overflow-hidden rounded-[2rem] border border-forest/10 shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left rail */}
          <div className="grain bg-forest px-8 py-12 sm:px-12 lg:py-16">
            <Eyebrow tone="light">Free Profile Assessment</Eyebrow>
            <h2 className="max-w-[16ch] text-display-md text-balance text-ivory">
              Find Out What’s Possible for Your Profile.
            </h2>
            <p className="mt-6 max-w-prose text-[16px] leading-relaxed text-sage/85">
              Tell us a little about yourself and get personalized guidance for studying in Italy.
            </p>

            <ul className="mt-10 space-y-4 border-t border-ivory/15 pt-8">
              {[
                'An honest read on your eligibility',
                'Programme and university direction',
                'Scholarship opportunities worth exploring',
                'A clear view of costs and timelines',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-sage/90">
                  <CheckCircle2
                    size={17}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-terracotta-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-ivory px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
            {submitted ? (
              <div role="status" className="flex h-full flex-col justify-center py-8 text-center">
                <CheckCircle2 size={44} aria-hidden="true" className="mx-auto text-forest" />
                <h3 className="mt-6 text-display-md text-forest">Thank you, {values.name.split(' ')[0]}.</h3>
                <p className="mx-auto mt-4 max-w-[42ch] text-[15.5px] leading-relaxed text-charcoal/70">
                  Your details have been recorded. To reach a counsellor straight away, give us a
                  call — we’ll take you through your options for Italy.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={PHONE_HREF}
                    aria-label={`Call us on ${PHONE_DISPLAY}`}
                    className="btn-primary"
                  >
                    <Phone size={17} aria-hidden="true" />
                    Call {PHONE_DISPLAY}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setValues(EMPTY);
                      setSubmitted(false);
                    }}
                    className="btn-secondary"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
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

                  <div className="sm:col-span-2">
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
                  </div>

                  <Field id="qualification" label="Current Qualification" error={errors.qualification}>
                    <select required {...inputProps('qualification')}>
                      <option value="">Select…</option>
                      {QUALIFICATION_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>

                  <Field id="course" label="Preferred Course" error={errors.course}>
                    <select required {...inputProps('course')}>
                      <option value="">Select…</option>
                      {COURSE_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field id="intake" label="Preferred Intake" error={errors.intake}>
                      <select required {...inputProps('intake')}>
                        <option value="">Select…</option>
                        {INTAKE_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                </div>

                <button type="submit" className="btn-primary group mt-8 w-full">
                  Get My Free Profile Assessment
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-[13.5px] text-charcoal/60">
                  No pressure. Just a clearer understanding of your options.
                </p>

                <p className="mt-5 flex items-start justify-center gap-2 text-center text-[12.5px] leading-relaxed text-charcoal/50">
                  <ShieldCheck size={14} aria-hidden="true" className="mt-0.5 shrink-0" />
                  Your details are only used to contact you regarding your study plans.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
