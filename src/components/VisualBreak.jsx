import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SmartImage from './ui/SmartImage';
import Reveal from './ui/Reveal';
import { IMAGES } from '../data/images';

/** Very light parallax — a few pixels of drift, never a scroll-jacking effect. */
function useParallax() {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      setOffset(Math.max(-1, Math.min(1, progress)) * -28);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return [ref, offset];
}

export default function VisualBreak() {
  const [ref, offset] = useParallax();

  return (
    <section
      ref={ref}
      aria-label="Study in Italy"
      className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-forest-900 lg:min-h-[620px]"
    >
      <div
        className="absolute inset-0 -z-10 scale-110 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
      >
        <SmartImage image={IMAGES.visualBreak} className="h-full w-full object-cover" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest/75" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 grain" />

      <div className="container py-24">
        <Reveal className="max-w-[36ch]">
          <h2 className="text-display-lg text-balance text-ivory">Your Classroom Could Be in Italy.</h2>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-sage/85 text-pretty">
            Historic universities. International classrooms. European opportunities. A completely new
            chapter.
          </p>
          <a href="#counselling" className="btn-light group mt-9">
            Explore My Options
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
